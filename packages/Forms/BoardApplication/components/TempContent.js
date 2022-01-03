import {Box} from "@mui/material";
import React from "react";

const TempContent = (props) => {
    const {children} = props;

    return (
        <Box sx={{
            width: "100%",
            height: 400,
            gap: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {children}
        </Box>
    );
}

export default TempContent;
