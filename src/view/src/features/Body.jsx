import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import {memo, useContext} from "react";
import {AuthContext} from "../App";
import Poetry from "./Poetry/Poetry";


const Body = memo(() => {
    const { isLoading } = useAuth0();
    const [isAuth] = useContext(AuthContext);

    if (isLoading) {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item>
                    <CircularProgress />
                </Grid>
            </Grid>
        )
    }
    else if (isAuth){
        return (
            <Box py={5}>
                <Container
                    maxWidth='xs'
                >
                    <Poetry />
                </Container>
            </Box>
        )
    }
    else {
        return (
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems='center'
                justifyContent="center"
            >
                <Grid item>
                    <Typography
                        variant='h3'
                        color='primary'
                    >
                        Single&nbsp;Page
                        <br />
                        Application
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant='caption'
                        color='primary'
                        sx={{fontWeight: "bold"}}
                    >
                        React&nbsp;+&nbsp;Express.js&nbsp;+&nbsp;TypeORM&nbsp;+&nbsp;Auth0
                    </Typography>
                </Grid>
            </Grid>
        )
    }
})

export default Body;
