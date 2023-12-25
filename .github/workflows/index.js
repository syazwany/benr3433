const express = require('express')
const app = express()
const port = process.env.PORT || 1337;
server.listen(port);

app.use(express.json())

app.get('/',(re,res)=> {
    res.send('Hello World!')
})

app.listen(port,() => {
    console.log('Example app listening om port ${port}')

})


