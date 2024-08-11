import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate,useLocation } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate()
  const location = useLocation()
  var [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId:"",
    img_url: ""
  });
  function inputHandler (e) {
    console.log(e);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  function addData(){
    if(location.state!=null){
      axios.put('http://localhost:3001/update/'+location.state.val._id,inputs).then((res)=>{
      alert('Updated!!');
    }).catch((error)=>{
          console.log(error);
        })
    }
  
    else{
    axios.post('http://localhost:3001/add',inputs).then((res)=>{
      alert('Added')
    }).catch((error)=>{
    console.log(error)
    })      }
  };

  useEffect(()=>{
    if(location.state!=null){
     setForm({...inputs,
       EmpName:location.state.val.EmpName,
       designation:location.state.val.designation,
       empId:location.state.val.empId,
       img_url:location.state.val.img_url
     })
    }
   },[])

  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Employee Name"
              onChange={inputHandler}
              name="EmpName"
              value={inputs.title}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Designation"
              onChange={inputHandler}
              name="designation"
              value={inputs.designation}
              multiline={4}
            />
             <TextField
              variant="outlined"
              placeholder="Employee Id"
              onChange={inputHandler}
              name="empId"
              value={inputs.empId}
            />
            <TextField
              variant="outlined"
              placeholder="Photo(paste any link from the browser)"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />
           

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
