const port = process.env.PORT || 3003;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://danny:danny@cluster0.crwllgh.mongodb.net/MouseDB?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', async () => {
    console.log('System connected to MongoDB Database:', db.databaseName);
    try {
        const count = await db.collection('Mouse').countDocuments();
        console.log('Mouse collection count:', count);
    } catch (e) {
        console.log('No se pudo contar la colección Mouse:', e.message);
    }
});

app.use(express.json());
const mouseRoutes = require('./routes/mouseRoutes');
app.use("/store", mouseRoutes);

app.listen(port, () => console.log("Mouse API running on port: " + port));
