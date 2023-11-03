import {MouseEventHandler} from "react";

export interface PrimaryButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
