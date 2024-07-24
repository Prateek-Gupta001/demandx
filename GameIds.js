const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'gameDatabase';

// Collection Name
const collectionName = 'GameIds';

// Function to add a game to the database
const bcrypt = require('bcrypt');

async function addGame(gameName, gameId, password) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Create game object with hashed password
        const game = { gameName: gameName, id: gameId, password: hashedPassword };

        // Insert game into the collection
        const result = await collection.insertOne(game);
        console.log(`Game added with ID: ${result.insertedId}`);
    } catch (error) {
        console.error('Error adding game:', error);
    } finally {
        await client.close();
    }
}


// Example usage:
addGame('Halo Infinite', 'halo123', 'pass123');
