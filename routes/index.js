const express= require('express')
const fs=require('fs')
//fs é o módulo le-system, para ler arquivos
const app=express() 
app.get('/', processRequest) 
function processRequest (request,response) {readText(request, response) 
  console.log('requisição terminou')}
  function readText (request,response) {//salve um arquivo teste.txt junto a esse arquivo com qualquer coisa dentro 
    fs.readFile('teste.txt',function(err,data) { 
      if (err) { console.log('erro na leitura') 
      return response.status(500).send('Erro ao ler o arquivo.') 
    } 
    response.write(data) 
    response.end(); 
    console.log('leu arquivo') }); 
    console.log('Lendo o arquivo, aguarde.')}
    app.listen(3000)
