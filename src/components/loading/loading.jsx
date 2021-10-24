import React from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading(props) {
    const { disableShrink, size } = props;

    return (
        <Box style={{ width: "100%" }} textAlign='center'>
            <CircularProgress
                size={size}
                disableShrink={disableShrink ? true : false}
            />
        </Box>
    );
}