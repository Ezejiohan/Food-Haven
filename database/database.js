const mongoose = require( 'mongoose' );

mongoose.connect('mongodb+srv://ezejiohan:Passenger24@cluster0.8qy642k.mongodb.net/Food-Haven').then(() => {
    console.log('Connect to MongoDB Successful')
}).catch((err) => {
    confirm.log(err.message)
})