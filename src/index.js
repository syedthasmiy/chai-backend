const express = require(express);
const app = express();

const Port = process.env.Port || 5000;

app.listen(Port, () => console.log('Server started'));








// import express from "express";
// const app = express()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//              console.log("ERRR: ", error);
//              throw error
//         })

//         app.listen(process.env.PORT, () => {
//              console.log(`App is listening on port $
//                 {process.env.PORT}`); 
//         })

//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()