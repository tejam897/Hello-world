const express = require('express');
const app = new express();
let PORT = 3000;

const fetchTodos = function(){
    return "{1:{title:hardcoded,discription:testing}}";
};
app.listen(PORT, () => console.log(`server listening at port ${PORT}`));

app.get('/', (req, res) => res.send("Hello world"));

app.get('/todos', (req,res) => {
    let todos = fetchTodos();
    res.send(todos);
});