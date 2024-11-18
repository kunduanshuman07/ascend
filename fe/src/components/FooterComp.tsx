import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import RightArrowIcon from "@mui/icons-material/ArrowRightAlt"

const FooterComp = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ backgroundColor: "#1e2222", display: "flex", flexDirection: "column", padding: "40px 20px 10px 20px" }}>
                <Typography sx={{ fontSize: "40px", color: "white", textAlign: "center" }}>Join Our Team</Typography>
                <Typography sx={{ fontSize: "14px", color: "white", textAlign: "center", marginTop: "10px" }}>Realize your potential</Typography>
                <Button endIcon={<RightArrowIcon />} sx={{
                    backgroundColor: "#1e2222", border: "1px solid white", color: "white", textTransform: "none", marginX: "auto", marginY: "20px", borderRadius: "20px",
                    padding: "5px 20px",
                    ":hover": {
                        backgroundColor: "white",
                        color: "#1e2222"
                    }
                }}>Click here</Button>
            </Box>
            <Box sx={{ backgroundColor: "#000000", padding: "10px", display: "flex" }}>
                <Box sx={{ display: "flex", marginX: "auto" }}>
                    <Typography
                        sx={{ flexGrow: 1, display: { cursor: "pointer", color: "white", fontSize: "20px", marginRight: "20px" } }}
                    >
                        Powered by
                    </Typography>
                    <Box
                        component="img"
                        src='/assets/ascend.svg'
                        alt='logo'
                        width={30}
                        height={30}
                        sx={{ display: { cursor: "pointer" } }}
                    />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { cursor: "pointer", color: "white" } }}
                    >
                        ascend
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default FooterComp