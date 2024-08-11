const express = require("express");
//const mongoose = require("mongoose");
const cors = require("cors");
const BlogModel=require('./model')
const app = new express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");

app.get('/get',async(req,res)=>{
  try {
      const mfetch=await BlogModel.find();
      res.send(mfetch)
  } catch (error) {
      console.log('Data not found')
      
  }
})

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

app.delete('/delete/:id',async(req,res)=>{
  try {
      const delmov=await BlogModel.findByIdAndDelete(req.params.id)
      res.send('Deleted successfully!!')
  } catch (error) {
      console.log(error);
  }
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
