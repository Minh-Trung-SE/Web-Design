import React, {FC} from 'react';
import {Link, LinkProps} from "react-router-dom";
import {twMerge} from "tailwind-merge";

type LogoProps = Omit<LinkProps, "to"> & {
    to?: string;
}

const Logo: FC<LogoProps> = ({to = "", className, ...props}) => {
    return (
        <Link
            to={to}
            {...props}
            className={twMerge("h-8 flex items-center space-x-1 hover:opacity-90 transition-opacity", className)}
        >
            <img className="block select-none h-full w-auto" alt="logo" src="logo/logo.png"/>
            <span className="select-none text-xl font-bold text-deep-carrot-orange">Web Design</span>
        </Link>
    );
};

export default Logo;