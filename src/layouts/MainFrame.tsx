import { PropsWithChildren } from "react";

interface Props {}

export default function MainFrame(props: PropsWithChildren<Props>) {
    return <div>{props.children}</div>;
}
