
'use client'
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setUser('superadmin');
        // setUser('saleExecutive');
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

