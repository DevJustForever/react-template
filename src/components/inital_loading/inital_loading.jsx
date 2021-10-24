import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import GIF from "../../images/hata.gif";
const useStyles = makeStyles(theme => ({
    LogoContainer: {
        maxWidth: "calc(100vw - 80px)",
        width: "400px"
    },
    TextContainer: {
        display: "block",

    }
}))



export default function InitialLoading(props) {
    const theme = useStyles();
    const { error } = props

    return (
        <Box position="absolute" left="50%" top="50%" textAlign="center" style={{ transform: "translate(-50%, -50%)" }}>
            <img draggable={false} className={theme.LogoContainer} src={GIF} alt="Site loading logo" />

            {error ?
                <>
                    <Typography variant="h4">
                        Sunucuyla bağlantı kuramadık :(
                    </Typography>
                    <Typography variant="body1">
                        Lütfen daha sonra tekrar deneyin...
                    </Typography>
                    <Box ml={1} display="flex" alignItems="center" justifyContent="center">
                        <CircularProgress />
                    </Box>
                </>
                :
                <>
                    <Typography variant="h4">
                        Sunucuyla bağlantı kuruluyor
                    </Typography>
                    <Typography variant="body1">
                        Lütfen bekleyiniz...
                    </Typography>
                    <Box ml={1} display="flex" alignItems="center" justifyContent="center">
                        <CircularProgress />
                    </Box>
                </>
            }

        </Box>
    );

};