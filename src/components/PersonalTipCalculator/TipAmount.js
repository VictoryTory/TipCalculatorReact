import React from "react";
import {Box, styled, Typography} from '@mui/material';

const AmountContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
})

// const TipAmountPerPersonStyled = styled('span')((theme) => ({
//   ...theme.typography.body2,
//   fontWeight: '600',
// }));

export function TipAmount(props) {
  return(
      <AmountContainer>
        <div>
          <Typography variant="h5" sx={{fontWeight: "600"}}>
            Tip amount
          </Typography>
          <Typography variant="h6">
            / person
          </Typography>
        </div>
       <div>
         <Typography variant="h5" sx={{fontWeight: "600"}}>${props.tipAmount}</Typography>
       </div>
      </AmountContainer>
  )
}