import { MouseEventHandler } from "react";


export interface CustomButtonProps {
    title?: string;
    smtitle?: string;
    subtitle?: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles? : string;
    appIcon?: string;
    playstoreIcon?: string;
    isDisabled?: boolean;
}