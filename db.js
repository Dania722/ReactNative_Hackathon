const mongoose = require ('mongoose');

// const Database = async () => {
//   try {
//     const con = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log(
//       `Database has been connected successfully ${con.connection.host}`
//     ); 
//   } catch (err) {
//     console.log(`Error occured ${err}`);
//     process.exit();
//   }
// };

// module.exports = Database;

module.exports = () => {
    const Database = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    try{
        mongoose.connect(process.env.DB , Database)
         console.log( `Database has been connected successfully ` ); 
    }
    catch(error){
    console.log(`Error occured ${error}`);
    }
}
