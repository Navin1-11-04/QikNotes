"use client";

import { useUser } from "@/components/providers/user-provider";
import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";

const MainLayout = ({ 
        children 
    }:{ 
        children: React.ReactNode 
    }) => 
{
    const {user,loading} = useUser();
    if(loading){
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size="lg"/>
            </div>
        )
    }
    if(!user){
        return redirect("/");
    }
    return (
        <div className="h-full flex dark:bg-[#1f1f1f]">
           <Navbar/>
           <main className="flex-1 h-full overflow-y-auto">
                {children}
           </main>
        </div>
    )
};

export default MainLayout;
