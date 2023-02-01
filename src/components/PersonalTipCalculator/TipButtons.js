import React from "react";
import {Button, Stack, styled, TextField} from '@mui/material';
import {hover} from "@testing-library/user-event/dist/hover";

const CustomTipInput = styled(TextField)({
  // maxWidth: '64px',
  // height: '5.35rem',
  width: '5.5rem',
  // padding: '15.5px 14px !important',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  '&: .MuiFormLabel-root': {
    padding: '0px',
  },
});

const TipButtonStyled = styled(Button) ({
  width: '5.5rem',
  padding: '10px 20px',
  fontSize: '18px',
  color: '#19343C',
  border: '#19343C 1px solid',
  '&:hover': {
    background: '#19343C',
    color: '#A7C957',
    border: 'transparent 1px solid',
  },
})

export function TipButtons(props) {
  return (
    <div>
      <h4>Tip %</h4>
      <Stack flexWrap="wrap" flexDirection="row" mt={1} gap={2.5}>
        <TipButtonStyled variant="outlined" onClick={() => props.onChange(5)}>5%</TipButtonStyled>
        <TipButtonStyled variant="outlined" onClick={() => props.onChange(10)}>10%</TipButtonStyled>
        <TipButtonStyled variant="outlined" onClick={() => props.onChange(15)}>15%</TipButtonStyled>
        <TipButtonStyled variant="outlined" onClick={() => props.onChange(20)}>20%</TipButtonStyled>
        <TipButtonStyled variant="outlined" onClick={() => props.onChange(25)}>25%</TipButtonStyled>
        <CustomTipInput
          id="custom-tip"
          // type="number"
          label="Custom"
          onChange={(e) => props.onChange(Number(e.target.value))}
          sx={{height: '53px',}}
          pseudo="none"
        />
      </Stack>
    </div>
  )
}