interface MainFrameProps {
    children: React.ReactNode;
}

export default function MainFrame({ children }: MainFrameProps) {
    return <div>{children}</div>;
}
