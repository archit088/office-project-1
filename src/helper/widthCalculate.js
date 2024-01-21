import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function useWidth(){
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse()
    return (
        keys.reduce((output, key) => {
            const matches = useMediaQuery(theme.breakpoints.up(key))
            return !output && matches ? key : output
        }, null) || ''
    )
}