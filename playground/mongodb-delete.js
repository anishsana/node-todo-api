const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos')
  //   .deleteMany({
  //     text: 'Eat lunch'
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({
  //   name: 'Anish'
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("594efeb74906be1d7f17778f")
  }).then((result) => {
    console.log(result);
  });

});
