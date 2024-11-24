import { LinearProgress } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: any;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const checkUser = () => {
        const user = localStorage.getItem("User");
        if (user) {
            setAuth(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        checkUser();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {loading ? <LinearProgress color="info" /> : children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
