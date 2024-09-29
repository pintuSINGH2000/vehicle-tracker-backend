const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const trackRoute = require("./routes/track");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/v1/track',trackRoute);

PORT = 8010
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})