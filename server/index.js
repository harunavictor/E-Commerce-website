const express = require('express');
const path = require('path')
const port = process.env.Port || 4260;

const app = express();

const destinationDir = path.join(__dirname,'../dist');
//hosting from dist folder
app.use(express.static(destinationDir));
Console.log(`express hosting from ${destinationDir}`);

//serving index.html
app.get('*',(re,res)=>{
    res.sendFile(path.join(destinationDir,'index.html'));
});
Console.log(`serving hosting from `);

//initialiase app and listen to port
app.listen(port,()=> Console,log(`server is running on port ${port}`));