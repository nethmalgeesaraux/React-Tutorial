import React, { ReactNode } from 'react'

interface Props {
    children: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    //not parameter passed color will be primary by default
    onClick: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
    return (
        <div>
            <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button