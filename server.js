const express = require('express');
const app = express();

const colors = [
  {color: 'blue', hex: '0000ff'},
  {color: 'red', hex: 'ff0000'},
  {color: 'magenta', hex: 'ff00ff'},
];

app.get('/colors', (req, res) => {
  res.send(colors);
});

const port = 2466;
app.listen(port, () => console.log('listening on', port));
