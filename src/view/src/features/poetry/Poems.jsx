import {Box, Grid, Paper} from "@mui/material";
import hash from "object-hash";
import theme from "../theme";
import Haiku from "./Haiku";
import Limerick from "./Limerick";

const Poems = ({poems}) => {
    return (
        <Grid
            container
            direction='column'
            spacing={5}
        >
            { poems?.haikus?.map(haiku =>
                <Grid
                    key={hash(haiku)}
                    item
                >
                    <Paper
                        variant='outlined'
                        sx={{borderColor: theme.palette.primary.main}}
                    >
                        <Box px={3} py={5}>
                            <Haiku haiku={haiku} />
                        </Box>
                    </Paper>
                </Grid>
            )}
            { poems?.limericks?.map( limerick =>
                <Grid
                    key={hash(limerick)}
                    item
                >
                    <Paper
                        variant='outlined'
                        sx={{borderColor: theme.palette.primary.main}}
                    >
                        <Box px={3} py={5}>
                            <Limerick limerick={limerick} />
                        </Box>
                    </Paper>
                </Grid>
            )}
        </Grid>
    );
};

export default Poems;
