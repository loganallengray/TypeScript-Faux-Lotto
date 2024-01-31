import React, { ReactNode } from "react";
import Navbar from "../navbar/navbar";

const Page = ({ children, navbar = true }: { children: ReactNode, navbar?: boolean }) => {
    return (
        <>
            {navbar ? <Navbar /> : null}
            <div id="content">
                {children}
            </div>
        </>
    )
}

export default Page;