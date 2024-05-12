import React, {FC, HTMLAttributes, PropsWithChildren} from 'react';
import {twMerge} from "tailwind-merge";

const Container:FC<HTMLAttributes<HTMLDivElement> & PropsWithChildren> = ({className, children, ...props}) => {
    return (
        <div
            {...props}
            className={twMerge("max-w-screen-xl mx-auto xl:px-0 px-5", className)}
        >
            {children}
        </div>
    )
}

export default Container;