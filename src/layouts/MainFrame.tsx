import { useEffect, useState } from "react";
import { User } from "../model/User.tsx";

export default const MainFrame = () => {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {

    }, []);
}