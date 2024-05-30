import Container from "@src/components/Container";
import Logo from "@src/components/Header/elements/Logo";
import {FC, HTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";


const Header: FC<HTMLAttributes<HTMLHeadElement>> = ({className, ...props}) => {
    return (
        <header
            className={twMerge("border-b sticky top-0 bg-white", className)}
            {...props}
        >
            <Container className="flex justify-between items-center text-cetacean-blue">
                <Logo/>
                <nav className="hidden xl:block">
                    <ul className="flex space-x-5 font-medium">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-deep-carrot-orange transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-deep-carrot-orange transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#templates"
                                className="hover:text-deep-carrot-orange transition-colors duration-300"
                            >
                                Templates
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-deep-carrot-orange transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="bg-deep-carrot-orange text-white rounded-full px-4 py-2">Contact US</button>
            </Container>
        </header>
    )
}

export default Header