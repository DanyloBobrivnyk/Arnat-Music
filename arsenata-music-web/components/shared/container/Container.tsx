import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
    return <div className={twMerge('mx-auto max-w-8xl px-4', className)} {...props} />;
};

export default Container;
