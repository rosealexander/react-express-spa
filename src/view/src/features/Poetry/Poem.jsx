import {Box, Grid, Paper, Typography} from "@mui/material";
import React from "react";

const Poem = ({poem = {}}) => {
    const {title, author, content} = poem

    return (
        <Paper>
            <Box px={3} py={5}>
                <Grid
                    container
                    direction='column'
                    spacing={3}
                    alignItems='center'
                >
                    <Grid item>
                        <Grid
                            container
                            direction='column'
                            alignItems='center'
                        >
                            <Grid item>
                                <Typography
                                    variant='h5'
                                    align='center'
                                    color='primary'
                                >
                                    {title}
                                </Typography >
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='body2'
                                    align='center'
                                    color='primary'
                                >
                                    by {author}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    { content?.map((line, i) =>
                        <Grid
                            item
                            key={i}
                        >
                            <Typography
                                variant='body2'
                                align='center'
                            >
                                {line}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Paper>
    );
};

export default Poem;
