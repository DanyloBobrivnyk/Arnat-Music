import { twMerge } from 'tailwind-merge';
import {HTMLProps} from "react";

const Container = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
    return <div className={twMerge(['container px-8 mx-auto xl:px-5', !props.alt && "py-5 lg:py-8"], className)} {...props} />;
};

export default Container;
