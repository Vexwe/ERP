import { AiOutlineMenu } from "react-icons/ai";
import { Sidebarw } from "./sidebar/Sidebarw";
import { useState } from "react";

function Header(){
    const [open, setOpen] = useState(false)

    return(
        <>
        <header className="bg-[#1976d2]">
            <div className="p-3 flex items-center">
        
                <a href="/" className="text-center w-full text-white text-2xl">
                    ERP
                    <p className="text-sm text-gray-200 leading-tight" 
                        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
                        Enterprise Resource Planning
                    </p>
                </a>

            </div>
        </header>
        {open &&(
            <div className="fixed top-0 left-0 h-full">
                <Sidebarw closeSidebar={()=>setOpen(false) } />
            </div>
        )}
        </>
    )
}

export default Header;
