import React from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading(props) {
    const { disableShrink, size } = props;

    return (
        <Box position="absolute" left="50%" top="50%" textAlign="center" style={{ transform: "translate(-50%, -50%)" }}>
            <CircularProgress
                size={size}
                disableShrink={disableShrink ? true : false}
            />
        </Box>
    );
}