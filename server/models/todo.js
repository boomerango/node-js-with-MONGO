var mongoose = require('mongoose');

 
 var todo=mongoose.model('todo',{
     text: {
             type: String,
             required: true,
             minlength:2,
             trim:true
     },
     completed: {
             type: Boolean,
             default: false
     },
     completedAt: {
             type: Number,
             default:null
     }
 });

 module.exports= {todo};


  var newTodo1 = new todo({
     text: 'Cook fish',
     completed:true,
     completedAt: 31
 });

 newTodo1.save().then((doc)=> {
    console.log('Saved todo',doc)
}, (e)=> {
    console.log('Unable to save todo')
})