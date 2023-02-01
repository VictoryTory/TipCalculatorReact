import React from "react";
import {Box, Typography} from "@mui/material";

export function Total(props) {
  return(
    <Box sx={{display:"flex", justifyContent:"space-between"}}>
      <Box className="total-container">
        <Typography variant="h5" sx={{fontWeight: "600"}}>
          Total
        </Typography>
        <Typography variant="h6">
          / person
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "600"}}>
          ${props.totalPerPerson}
        </Typography>
      </Box>
    </Box>
  )
}