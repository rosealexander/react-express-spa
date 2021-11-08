import {Box, Container, Grid, Typography} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import {useContext, useEffect, useState} from "react";
import theme from "./theme";
import {RiQuillPenLine} from "react-icons/ri";
import Poem from "./Poem";
import axios from "../axios";
import {AuthContext} from "../App";


const fetchPoemsApi = () => {
    return new Promise(async (resolve, reject) => {
        await axios('/poem/all')
            .then(async res => resolve(await res.data))
            .catch(error => reject(error))
    })
}


const Body = () => {
    const { isLoading } = useAuth0();
    const [isAuth] = useContext(AuthContext)
    const [poetry, setPoetry] = useState([]);

    useEffect(() => {
        if (isAuth) {
            fetchPoemsApi().then(res => setPoetry(res.poetry))
        }
    }, [isAuth])

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

                <Grid item xs={3}>
                    <Typography>
                        Loading...
                    </Typography>
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
                    <Grid
                        container
                        direction='column'
                        spacing={5}
                    >
                        {poetry?.map( (poem, i) => [
                            <Grid
                                item
                                key={i}
                            >
                                <Poem poem={poem} />
                            </Grid>
                        ])}
                    </Grid>
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
                    <RiQuillPenLine
                        color={theme.palette.primary.main}
                        size='8em'
                    />
                </Grid>
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
};

export default Body;
