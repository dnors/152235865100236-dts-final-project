import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthBackend = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // user signed in
            } else {
                navigate('/login')
            }
        });
    }, []);

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default AuthBackend;