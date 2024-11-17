import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
    palette:{
        primary:{
            main:blue[500],
        },
    },
    myButton:{
        backgroundColor:'red',
        color:'white',
        border:'1px solid black'
    }
})