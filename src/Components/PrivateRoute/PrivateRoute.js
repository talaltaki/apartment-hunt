import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AllContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const [signedUser] = useContext(AllContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                signedUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;