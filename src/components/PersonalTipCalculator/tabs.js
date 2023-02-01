import React from "react";
import {Box, Button, styled,} from '@mui/material';

const TabsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
})

const ButtonPersonalTab = styled(Button)({
  background: '#A7C957',
  color: '#19343C',
  width: '100%',
  borderTopLeftRadius: '20px',
  '&:hover': {
    color: '#A7C957',
    background: '#285260'
  },
})

const ButtonTotalTab = styled(Button)({
  background: '#19343C',
  color: '#A7C957',
  width: '100%',
  borderTopRightRadius: '20px',
  '&:hover': {
    color: '#A7C957',
    background: '#285260'
  },
})

export function TabsButtons() {
  return (
    <TabsContainer>
      <ButtonPersonalTab className="tab-items personal" onClick="openOption(event, 'personal')">Personal</ButtonPersonalTab>
      <ButtonTotalTab className="tab-items common" onClick="openOption(event, 'common')">Common</ButtonTotalTab>
    </TabsContainer>
  )
}