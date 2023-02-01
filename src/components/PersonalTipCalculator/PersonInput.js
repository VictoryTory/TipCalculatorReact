import React from "react";
import {TextField, styled} from '@mui/material';

const PersonInputStyled = styled(TextField) ({
  width: "100%",
})

export function PersonInput(props) {
  const handleValidationPersonInput =(e) => {
    if (e.target.value.split('')[0] === '0') {
      const newValuePerson = e.target.value.slice(1, e.target.value.split('').length)
      console.log(newValuePerson)
      props.onChange((e.target.value === "0" || e.target.value === "") ? "" : Number(newValuePerson) )
    }
    props.onChange((e.target.value === "0") ? "" : Number(e.target.value) )
  }
  return(
    <div >
      <h4>Number of People</h4>
      <PersonInputStyled
        width= "100%"
        value={props.value}
        id="filled-basic"
        // type="number"
        variant="filled"
        onChange={(e) => handleValidationPersonInput(e)}
      />
    </div>
  )
}