'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.f2q6e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: 'woowahannotion'
}).then(function () {
    console.log('✅ connected to DB');
}).catch(function (error) {
    console.log('\u274C ' + error);
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDB connection error'));
mongoose.connection('mongodb+srv://admin:admin@cluster0.f2q6e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
// const connect = () => {
//   if (process.env.NODE_ENV !== "production") {
//     mongoose.set("debug", true);
//   }

//   mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   });
// };

// connect();
// const db = mongoose.connection;
// const handleOpen = () => console.log("✅ connected to DB");
// const handleError = (error) => console.log(`❌ ${error}`);

// db.once("open", handleOpen);
// db.on("error", handleError);
// db.on("disconnected", connect);