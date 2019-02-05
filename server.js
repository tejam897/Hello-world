const express = require('express');
const app = new express();
let PORT = 3000;
app.listen(PORT, () => console.log(`server listening at port ${PORT}`));

app.get('/', (req,res) => res.send("Hello world"));