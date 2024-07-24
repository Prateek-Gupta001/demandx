const { MongoClient } = require('mongodb');

// Connection URI with the username and password
const uri = 'mongodb://myUserAdmin:abc123@localhost:27017/website';

// Database Name
const dbName = 'website';

// Collection Name
const collectionName = 'users';

// Function to add a user to the database
async function addUser(username, email, password) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Create user object
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Insert user into the collection
        const result = await collection.insertOne(user);
        console.log(`User ${username} added with ID: ${result.insertedId}`);
    } catch (error) {
        console.error('Error adding user:', error);
    } finally {
        await client.close();
    }
}

// Example usage:
addUser('exampleUser', 'user@example.com', 'password123');
