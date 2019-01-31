//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    } 
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //         text: 'Smth to do',
    //         completed: false
    // }, (err,result)=> {
    //     if(err) {
    //         return console.log('Unable to insert', err)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2) )
    // })

    db.collection('Users').insertOne({
            Name: 'Artem',
            age: 34,
            location: 'Get in browser',
            completed: false
    }, (err,result )=> {
        if(err) {
            return console.log('Unable to insert', err)
        }
        console.log(JSON.stringify(result.ops))
    })
    db.close();
});