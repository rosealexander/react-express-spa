import Header from './Header';
import Body from './Body'
import Footer from "./Footer";
import {Box, Container} from "@mui/material";

const Layout = () => {
    return (
        <Container
            maxWidth='xs'
        >
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                height='100vh'
                py={2}
            >
                <Header/>
                <Body />
                <Footer/>
            </Box>
        </Container>
    )
}

export default Layout
