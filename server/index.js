//initialize express
//initialize app
//define port
require('dotenv').config(); // ← Load .env variables

let cors = require('cors')
let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;;

const mongoose=require("mongoose");

//-----------------------------------------------------------------------------------
let Task= require("./model");
//-----------------------------------------------------------------------------------

app.use( express.json());
app.use(cors());

// Use hidden MongoDB URL
const url = process.env.MONGODB_URI;

//connect to database
mongoose
  .connect(url)
  .then(res => console.log('db connected'))
  .catch(error => console.log(error));
//routes
//
app.get('/',(req,res)=>{
    res.send("<h2>welcome Home</h2>")
})
//for fetching stored tasks ,defining tasks api
app.get('/tasks',(req,res)=>{
     Task.find()
     .then(storedTasks=>res.status(200).json(storedTasks))
     .catch(err=>console.log(err))
})
//defining add-task api
app.post("/add-task",(req,res)=>{
    //-->For getting data through url---> console.log(req.params.task);
    //  For checking the request and response of server  
    //   res.json({msg: "done",
    //     task:req.body.task
    //   });
     
    //console.log(req.body)

    let task=new Task(req.body);
    task.save()
    .then(dbres=>{console.log(dbres);
    res.send(dbres)})
        
    .catch(dberr=>console.log(dberr))
})
// defining edit tasks api
app.post("/edit",(req,res)=>{
   //console.log(req.body.id);
   Task.findById(req.body.id)
   .then(dbres=>res.send(dbres))
   .catch(err=>console.log(err))

})
//update task api
app.put("/update",(req,res)=>{
    console.log(req.body)
    Task.findById(req.body._id)
    .then(updateTask=>{
        updateTask.Work=req.body.Work;
        updateTask.save()
        .then(updatedTask=>{
            //console.log(updatedTask)
            res.send("task is updated"+updatedTask)
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
})

// defining Delete task api
app.delete("/delete",(req,res)=>{
    console.log(req.body)
    Task.findByIdAndDelete(req.body._id)
    .then(deletedTask=>{
        console.log("task deleted",deletedTask)
        res.send(deletedTask)
    })
    .catch(err=>console.log(err))
})
//start listening to port from server
console.log("no problem ")
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`)
})