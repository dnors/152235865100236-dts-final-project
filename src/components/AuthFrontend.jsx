import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthFrontend = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/home')
            } else {
                // user signed out
            }
        });
    }, []);

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default AuthFrontend;