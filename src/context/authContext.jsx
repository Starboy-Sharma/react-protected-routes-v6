// @ts-nocheck
import { createContext, useState } from "react";

const authContext = createContext({
    currentUser: null,
    login: Promise.resolve,
    logout: Promise.resolve
});

function useAuth() {
    const [currentUser, setCurrentUser] = useState(null);

    function login() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setCurrentUser({ name: 'Pankaj Sharma', email: 'h8sX0@example.com' });
                resolve();
            }, 1000);
        });
    }

    function logout() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setCurrentUser(null);
                resolve();
            }, 1000);
        });
    }

    return { currentUser, login, logout };
}

export const AuthContextProvider = function ({ children }) {
    const auth = useAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
};

export default authContext;
