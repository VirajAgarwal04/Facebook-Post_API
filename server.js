
const express = require('express');
const axios = require('axios');
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000,() => {
    console.log("Server Started");
});

const pageId = '330094280179298';
const access_token = 'EAAKhkCsp2c4BO9TDMC2PPC1gvTkYNhZCROnHJaxC9dAhwzFO9eLbzBEOPk2hnfDGN26cBZCzCwtq1uEZCqxLFDmJboYkt5n5iHRAFrvN3ZBlHlTk7RsCHlyT8ZBZCZCIVrOQfc1E9Tg8Nqg36y7VL4UPpc68jScKvO4AzmQ9a9MosFsWisZCZCPaN4EFS8xbisrmD';


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