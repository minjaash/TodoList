const mongoose = require("mongoose");

let Schema= mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Task=mongoose.model("Task",new Schema({
    id : ObjectId,
    Work: String
}));
module.exports=Task;
