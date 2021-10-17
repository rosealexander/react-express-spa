import Layout from "./features/Layout";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./features/theme";

function App() {
    return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <Layout />
            </ThemeProvider>
    );
}

export default App;
