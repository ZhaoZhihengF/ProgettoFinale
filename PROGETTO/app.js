var express = require('express');
var app = express(); 
const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname,'Scarpe.html')); 
});

app.get('/AbbigliamentoMaschile',function(req,res){
 res.sendFile(path.join(__dirname,'AbbigliamentoMaschile.html')); 
});

app.get('/AbbigliamentoFemminile',function(req,res){
 res.sendFile(path.join(__dirname,'AbbigliamentoFemminile.html'));
});
app.get('/AbbigliamentoBambini',function(req,res){
 res.sendFile(path.join(__dirname,'AbbigliamentoBambini.html'));
});
app.get('/Info',function(req,res){
 res.sendFile(path.join(__dirname,'Accesso.html')); 
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
