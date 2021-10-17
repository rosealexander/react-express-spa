import {AppBar, Grid, Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar
            position='relative'
            color='transparent'
            elevation={0}
        >
            <Grid
                container
            >
                <Grid item>
                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        header
                    </Typography>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Header;
