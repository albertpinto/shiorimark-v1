// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient,ObjectID}=require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Punk'

const id = new ObjectID();
console.log (id);


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

        db.collection('users').find({name:'Gunther'}).toArray((error,result) => {
        console.log(result)
    })
    
    // db.collection('users').findOne({ _id: new ObjectID("5c1113239cbfe605241f9071") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
})


// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)
//     console.log('Connected to database!');
//     db.collection('users').findOne({name:'Albert'}),(error,result) => {
//         if (error){
//             console.log(error);
//         }
//         console.log(result.ops)
//     }
  
//     // db.collection('users').insertOne({
//     //     name: 'Albert',
//     //     age: 49
//     // },(error,result)=> {
//     //     if (error) {
//     //         return console.log("Could not insert the value");
//     //     }
//     //     console.log(result.ops);        
//     // });
//     db.collection('users').insertMany([
//         {
//             name:'Andrew',
//             age :26
//         },
//         {
//             name: "Vincent",
//             age :50
//         },
//         {
//             name:"Gunther",
//             age :15
//         },
//         {
//             name :"Hunter",
//             age :14
//         }

//     ]),(error,result) => {
//         if (error){
//             console.log("Inserting of users failed !")
//         }
//         console.log(result.ops);
//     }
    
//     db.collection('tasks').insertMany ([
//         {
//         description :" Is the Punk cat sleeping",
//         status:true
//         },
//         {
//             description:"Is Hyde Sleeping",
//             status:true
//         },
//         {
//             description:"Is Henry sleeping",
//             status:false
//         }

//     ]),(error,result) => {
//         if (error) {
//             return console.log ("Insertion of tasks failed..")
//         }
//         console.log (result.ops)
        
        
//     }




// })   

