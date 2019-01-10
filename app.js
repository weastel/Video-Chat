const express = require('express');

var app = express();

app.use(express.static('public'));

var server = app.listen(3000,function(){
  console.log("listen to request on port  3000")
});

app.get('/',(req,res)=>{
  res.render('index.ejs');
})
