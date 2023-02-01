import React from "react";
import {TextField, styled} from '@mui/material';

const BillInputStyled = styled(TextField)({
  width: '100%',
  height: '50px',
})

export function BillInput(props) {
  const handleValidation = (e) => {
    if (e.target.value.split('')[0] === '0') {
      const newValue = e.target.value.slice(1, e.target.value.split('').length)

      props.onChange((e.target.value === "0" || e.target.value === "") ? "" : Number(newValue) )
    }
    props.onChange((e.target.value === "0") ? "" : Number(e.target.value) )
  }

  return (
    <div>
      <h4>Bill</h4>
      <BillInputStyled
        value={props.value}
        id="filled-basic"
        // type="number"
        variant="filled"
        onChange={(e) => handleValidation(e)}
      />
    </div>
  );
}

