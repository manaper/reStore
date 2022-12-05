import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import React from "react";

interface Props{
    darkMode: boolean;
    HandleMode: ()=> void;
}
export default function Header({darkMode, HandleMode} : Props){
    return(
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant="h6">
                Re-Store
                </Typography>
                <Switch defaultChecked checked={darkMode} onChange={HandleMode}/>
            </Toolbar>
        </AppBar>
    )
}