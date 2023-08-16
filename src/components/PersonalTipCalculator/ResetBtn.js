import React from "react";
import {Box, Button, styled} from '@mui/material';

const ResetBtn = styled(Button) ({
  width: "100%",
  height: "50px",
  color: "#19343C",
  fontSize: "18px",
  backgroundColor: "transparent",
  border: "#19343C 1px solid",
  '&:hover': {
    backgroundColor: "#19343C",
    color: "#A7C957",
  },
});

export function ResetButton(props) {
  return(
    <Box width={"100%"}>
      <ResetBtn variant="contained" onClick={() => props.onReset()}>reset</ResetBtn>
    </Box>
  )
}