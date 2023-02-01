import React from "react";
import {TextField} from '@mui/material';

export function billInput() {
  return(
    <div>
      <h4>Bill</h4>
      <TextField id="filled-basic"  type="number" variant="filled" />
    </div>
  )
}