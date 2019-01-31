var mongoose = require('mongoose');

var User=mongoose.model('user',{
    email: {
            type: String,
            required: true,
            minlength:2,
            trim:true
    }
});

module.exports={User};

var newTodo = new User({
    email: 'abracadabra'
});

newTodo.save().then((doc)=> {
    console.log('Saved todo',doc)
}, (e)=> {
    console.log('Unable to save todo')
})