const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port =  8000;

// import router
const productTypeRouter = require('./app/router/productTypeRouter');
const productRouter = require('./app/router/productRouter');
const customerRouter = require('./app/router/customerRouter');
const orderRouter = require('./app/router/orderRouter');


/// middleware doc du lieu UTF8 && JSon
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// ket noi mongoose
mongoose.connect("mongodb://localhost:27017/CRUD_Shop24h", (error) => {
    if (error) {
        throw error;
    }
    console.log("Connect Mongoose DP success")
});

// chay views
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



// chay router
app.use("/", productTypeRouter);
app.use("/", productRouter);
app.use("/", customerRouter);
app.use("/", orderRouter);

// chay cong
app.listen( process.env.PORT || port, () => {
    console.log("app listening on port" + process.env.PORT || port );
})
