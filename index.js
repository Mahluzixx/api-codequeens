const express = require ('express');
const app = express ();
app.use(express.json());

// criar um array chamado "pessoas"

let pessoas = [
    (nome:'yas', idade:14,altura:1,55),
    ]
    [
        (nome:'evelyn', idade:16,altura:1,57)
    ]
    [
        (nome:'gabi', idade:15,altura:1,57)
    ]
    [  (nome:'gabi2', idade:14,altura:1,60)
    ]
    [
      (nome:'laura', idade:14,altura:1,53)
    ]
app.get('/pessoas', (req, res) => {
    res.json({mensagem:'API de pessoas funcionando'});

});

const PORT = 3000;
app.listen(PORT, () => {
 console.log ('servido rodando em http://localhost:${port}');
});

