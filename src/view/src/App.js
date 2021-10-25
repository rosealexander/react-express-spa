import Layout from "./features/Layout";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./features/theme";
import {createContext, useCallback, useEffect, useState} from "react";
import axios from "./axios";
import {useAuth0} from "@auth0/auth0-react";

export const AuthContext = createContext(false);

function App() {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [isAuth, setIsAuth] = useState(false)

    const setInterceptor = useCallback( async () => {
        const accessToken = await getAccessTokenSilently();
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
        });
        setIsAuth(true)
    }, [isAuthenticated, getAccessTokenSilently])

    useEffect( async () => {
        await setInterceptor()
    }, [setInterceptor])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthContext.Provider value={[isAuth, setIsAuth]}>
                <Layout />
            </AuthContext.Provider>
        </ThemeProvider>
    );
}

export default App;
