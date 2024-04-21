const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'general';

// Function to add an item to the database
async function addItem(itemName, year, description) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection('items');

        // Create item object
        const item = { itemName: itemName, year: year, description: description };

        // Insert item into the collection
        const result = await collection.insertOne(item);
        console.log(`Item added with ID: ${result.insertedId}`);
    } catch (error) {
        console.error('Error adding item:', error);
    } finally {
        await client.close();
    }
}

// Example usage:
addItem('Example Item', 2023, 'This is an example description.');
