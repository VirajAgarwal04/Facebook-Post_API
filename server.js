
const express = require('express');
const axios = require('axios');
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000,() => {
    console.log("Server Started");
});

const pageId = 'Your_Page_ID';
const access_token = 'Your_Page_Access_Token';


app.post("/posttopage",(req,res) =>{
    const text = req.body.text;
    const img = req.body.img;

    axios
    .post(
        `https://graph.facebook.com/v19.0/${pageId}/photos?url=${img}&message=${text}&access_token=${access_token}`, 
        null
    )
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error)
    });
})
