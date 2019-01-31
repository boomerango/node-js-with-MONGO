const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    } 
    console.log('Connected to MongoDB server');

  //delete multiple
    // db.collection('Todos').deleteMany({text:'eat food'}).then((result)=>{
    //     console.log(result);
    // })

  //deleteOne
//   db.collection('Todos').deleteOne({text:'buy a milk'}).then((result)=>{
//     console.log(result);
// })
  //FindAndDelete
     
//   db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
//     console.log(result);
// })

    
    //db.close();
});