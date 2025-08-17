import React from "react";
import { Heading } from "./_components/heading";
import Navbar from "./_components/navbar";

const LandingLayout = ({
    children
}: { children :React.ReactNode }) => {
    return (
        <div className="min-h-full w-full">
            <Navbar/>
            <main className="h-full w-full">
                {children}
            </main>
        </div>
    );
}
 
export default LandingLayout;