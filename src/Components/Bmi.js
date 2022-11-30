import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Bmi.css";
import { Grid } from "@mui/material";

export default function Bmi() {
    const [weight,setWeight] = useState('')
    const [height,setHeight] = useState('')
    const [bmi,setBmi] = useState(false)
    const [message,setMessage] = useState('')
const calcBmi=()=>{
    setBmi(true)
    if( weight == 0 || height == 0)
    {
        alert('Please enter a valid weight and height')
    }
    let bmi=weight/(height*height)
    setBmi(Math.round(bmi))
    // setBmi(weight/(height*height))
    if (bmi < 25) {
        setMessage('You are underweight')
      } if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } if(bmi >= 30) {
        setMessage('You are overweight')
      }
      
}
const clear = () => {
     window.location.reload()
}

  return (
    <div className="bmi">
      <Card className="card" sx={{ maxWidth: 345, alignItems: "center" }}>
      <h1 className="header"> BMI Calculator</h1>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <label>Enter weight(kg)</label>
            </Grid>
            <Grid item xs={6}>
              <input
                type={"number"}
                placeholder="enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              ></input>
            </Grid>
            <Grid item xs={6}>
              <label>Enter height(m)</label>
            </Grid>
            <Grid item xs={6}>
              <input
                type={"number"}
                placeholder="enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              ></input>
            </Grid>
            <Grid item xs={12}>
              <button onClick={calcBmi}>Submit</button>
              <button onClick={clear}>Clear</button>

              {bmi?("Your BMI is" + " "+ bmi):null}
            </Grid>
            <Grid item xs={12}>
              {message}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
// {values.maritalstatus==="married" ? (
//     <Marital
//       sx={{ textAlign: "center" }}
//       values={values}
//       handleInputChange={handleInputChange}
//       errors={errors}
//     />
//   ) : null}