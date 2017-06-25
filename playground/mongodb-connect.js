const MongoClient = require('mongodb').MongoClient;


  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
  
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Anish',
    age: 25,
    location: 'Greenville'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
