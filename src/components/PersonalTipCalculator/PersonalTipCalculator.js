import React, {useState} from "react";
import {Box, Stack, styled, TextField,} from '@mui/material';
import {BillInput} from "./BillInput";
import {PersonInput} from "./PersonInput";
import {TipButtons} from "./TipButtons";
import {TipAmount} from "./TipAmount";
import {Total} from "./Total";
import {ResetButton} from "./ResetBtn";
import {TabsButtons} from "./tabs";


const PersonalTipCalculatorContainer =  styled(Box)({
  background: '#A7C957',
  borderRadius: '20px',
  borderBox: 'box-sizing',
  padding: '0px',
  flexDirection:'column',
  personalTabContainer: '#19343C',
  innerElements: '#A7C957',
  hoverBorder: '#fcdf20',
  error: '#ec1414',
  bgColor: '#7da668',
  btnReset: '#c3e66f',
})

function calculateTip(personValue, billValue, tipValue) {
  if (personValue >= 1) {
    return (billValue * tipValue / 100) / personValue;
  }

  return 0;
}

function totalPerPerson (billValue, personValue, tipPerPerson) {
  return (billValue / personValue) + tipPerPerson ;
}

export function PersonalTipCalculator() {
  const [billValue, setBillValue] = useState(0);
  const [personValue, setPersonValue] = useState(0);
  const [tipValue, setTipValue ] = useState(0);
  const [isTipSelected, setIsTipSelected] = useState(false);
  const tipPerPerson = calculateTip(personValue, billValue, tipValue);
  const totalPerPersonResult = totalPerPerson (billValue, personValue, tipPerPerson) || 0;

  const handleReset = () => {
    setBillValue(0);
    setPersonValue(0);
    setTipValue(0);
  };

    return (
        <PersonalTipCalculatorContainer display="flex" maxWidth="48rem" margin="auto" justifyContent="center" width="100%">
          <TabsButtons/>
          <Box display="flex" justifyContent="space-between" padding="0 40px 50px 40px">
            <Stack sx={{justifyContent:"center", width:"45%"}}>
              <BillInput value={billValue} onChange={(v) => setBillValue(v)}/>
              <PersonInput value={personValue} onChange={(v) => setPersonValue(v)}/>
              <TipButtons onChange={(v) => setTipValue(v)}/>
            </Stack>
            <Stack sx={{width:"48%", height:"auto"}}>
              <Box sx={{display:"flex", flexDirection:"column", height:"100%", padding:"2rem 0rem"}}>
                <Box>
                  <TipAmount tipAmount={tipPerPerson}/>
                </Box>
                <Box sx={{padding:"2rem 0rem"}}>
                  <Total totalPerPerson={totalPerPersonResult}/>
                </Box>
                <Box display={"flex"} justifyContent={"center"} marginTop={"auto"}>
                  <ResetButton onReset={() => handleReset()}/>
                </Box>
              </Box>
            </Stack>
          </Box>
        </PersonalTipCalculatorContainer>
    )
}