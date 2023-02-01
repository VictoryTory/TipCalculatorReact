import React from "react";
import {Box, Button, Stack, styled, TextField} from '@mui/material';
import {hover} from "@testing-library/user-event/dist/hover";

const ResetBtn = styled(Button) ({
  width: "100%",
  color: "#19343C",
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