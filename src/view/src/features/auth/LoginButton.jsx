import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@mui/material";
import {memo} from "react";

const LoginButton = memo(() => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            fullWidth
            variant='contained'
            onClick={() => loginWithRedirect()}
        >
            Log In
        </Button>
    )
})

export default LoginButton;
