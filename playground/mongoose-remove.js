const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({
//   _id: '595bfa39631c68c707c6748a'
// }).then((todo) => {
//
// });

Todo.findByIdAndRemove('595bfa39631c68c707c6748a').then((todo) => {
  console.log(todo);
});
