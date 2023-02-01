import React from "react";

import { Box, Link as MuiLink, Stack, styled, IconButton, TextField } from '@mui/material';

export function PersonalTipCalculator() {
    return (
        <Box>
            <div>
                <h4>Bill</h4>
                <TextField id="filled-basic" label="Filled" variant="filled" />
            </div>
        </Box>
    )
}