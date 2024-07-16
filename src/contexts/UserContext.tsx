// import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { get } from "../modules/HttpClient.tsx";

// interface IntroMeUser {
//     id: number;
//     email: string;
//     name: string;
//     picture?: string;
// }

// interface UserContextType {
//     user: IntroMeUser | null;
//     loading: boolean;
//     setUser: (user: IntroMeUser | null) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState<IntroMeUser | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const token = localStorage.getItem("AccessToken");
//                 if (token) {
//                     const { data } = await get<IntroMeUser>("/api/user?token=" + token);
//                     setUser(data);
//                 } else {
//                     navigate("/sign-in");
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch user:", error);
//                 navigate("/sign-in");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUser();
//     }, [navigate]);

//     return (
//         <UserContext.Provider value={{ user, loading, setUser }}>{children}</UserContext.Provider>
//     );
// };
// export const useUser = () => {
//     const context = useContext(UserContext);
//     if (context === undefined) {
//         throw new Error("useUser는 UserProvider 내에서 사용해야 합니다.");
//     }
//     return context;
// };

import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../modules/HttpClient";

interface IntroMeUser {
    id: number;
    email: string;
    name: string;
    picture?: string;
}

interface UserContextType {
    user: IntroMeUser | null;
    loading: boolean;
    setUser: (user: IntroMeUser | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IntroMeUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("AccessToken");
                if (token) {
                    const { data } = await apiClient.get<IntroMeUser>("/api/user?token=" + token);
                    setUser(data);
                } else {
                    navigate("/sign-in");
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
                navigate("/sign-in");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [navigate]);

    return (
        <UserContext.Provider value={{ user, loading, setUser }}>{children}</UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser는 UserProvider 내에서 사용해야 합니다.");
    }
    return context;
};
