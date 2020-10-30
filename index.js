const express = require('express')
// require은 express를 node_modules에서 가져오는 거야
const app = express()
// app 초기화? 실행?
const PORT = 4000;

function handleListening (){
  console.log(`Listening on:http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);