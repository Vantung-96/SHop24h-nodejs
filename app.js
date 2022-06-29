const express = require('express');
const mongoose = require('mongoose');
const app =express();

const port = 8000;

// import router



/// middleware doc du lieu UTF8 && JSon
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// ket noi mongoose
mongoose.connect("mongodb://localhost:27017/CRUD_Shop24h" , (error) => {
    if(error) {
        throw error;
    }
    console.log("Connect Mongoose DP success")
});

// chay views


// chay router


// chay cong
app.listen(port , () => {
    console.log("app listening on port" + port);
})