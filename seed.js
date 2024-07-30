const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: String,
    mail: String,
    tel: String,
});

const User = mongoose.model('User', userSchema);

const users = [
    { name: 'Alice', mail: 'alice@example.com', tel: '1111' },
    { name: 'Bob', mail: 'bob@example.com', tel: '4444' },
    { name: 'Yasushi', mail: 'osonoi@cu', tel: '2222' },
    { name: 'David', mail: 'david@example.com', tel: '6666' },
    { name: 'Eve', mail: 'eve@example.com', tel: '7777' },
    { name: 'Frank', mail: 'frank@example.com', tel: '8888' },
    { name: 'Koh', mail: 'kojima@cu', tel: '2222' },
    { name: 'Charlie', mail: 'charlie@example.com', tel: '5555' },
    { name: 'Grace', mail: 'grace@example.com', tel: '9999' },
    { name: 'Henry', mail: 'henry@example.com', tel: '0000' },
];

User.insertMany(users)
    .then(() => {
        console.log('Users added successfully');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error adding users:', err);
    });
