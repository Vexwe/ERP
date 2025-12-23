import { AiOutlineMenu } from "react-icons/ai";
import { Sidebarw } from "./sidebar/Sidebarw";
import { useState } from "react";
function Header(){
    const [open, setOpen] = useState(false)

    return(
        <>
        <header className="bg-[#814243]">
            <div className="p-3 flex items-center">
                <button onClick={()=> setOpen(!open)}> 
                    <AiOutlineMenu className="mr-4 text-white text-2xl"/>
                </button>
        
                <a href="/home" className="text-center w-full text-white text-2xl">
                    ERP
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
