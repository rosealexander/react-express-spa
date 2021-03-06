import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@mui/material";
import {memo} from "react";

const LogoutButton = memo(({disabled}) => {
    const { logout } = useAuth0();

    return (
        <Button
            fullWidth
            disabled={disabled}
            variant='contained'
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            Log Out
        </Button>
    )
})

export default LogoutButton;
