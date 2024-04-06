const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
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

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });