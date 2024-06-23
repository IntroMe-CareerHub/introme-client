interface IntroMeUser {
    id: number;
    email: string;
    name: string;
    picture?: string;
}

interface MainFrameProps {
    user: IntroMeUser | null;
    children: React.ReactNode;
}

export default function MainFrame({ user, children }: MainFrameProps) {
    return <>{user ? <div>{children}</div> : <div>Loading...</div>}</>;
}
