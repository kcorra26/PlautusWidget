const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());

const { convert_combo } = require('./lineconverter')

app.post('/login', (req, res) => {
    const act = parseInt(req.body.act)
    const scene = parseInt(req.body.scene)
    const line = parseInt(req.body.line)
    const play = req.body.play
    
    return res.json(convert_combo(act, scene, line, play));
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });