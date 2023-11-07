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

export interface OptionProps{
    title: string | number;
    value: number | string;
}

export interface CustomFilterProps{
    title: string;
    options: OptionProps[];
    setFilter:any
}