const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    } 
    console.log('Connected to MongoDB server');

//     db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c52eef0095ade47f265a21c') }

// , {
//     $set: {
//         completed: 'true'
//     }
// }, {
//     returnOriginal: false

// } ).then((result)=>{
//     console.log(result);
// })

db.collection('Users').findOneAndUpdate({_id: new ObjectID('5c52af2024a29b2cccb04e76') }

, { 
    $set: {
        Name: 'Artem'
    },
    
     $inc: {age:10}

}, {
    returnOriginal: false

} ).then((result)=>{
    console.log(result);
})



})