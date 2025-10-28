"use client";
 import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { link } from "fs";


export default function Navbar() {
    const [open,setOpen]=useState(false);
    const [theme,setTheme]=useState("light");

    const toggleTheme=()=>{
        const newTheme=theme === "light" ?   "dark":"light";
        setTheme(newTheme);
        if (newTheme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(()=>{
        if (window.matchMedia("(prefers-color-scheme:dark").matches){
            setTheme("dark");
            document.documentElement.classList.add("dark")
        }
    },[]);
    const links=[
        {name:"Home",path:"/"},
        {name:"About",path:"/about"},
        {name:"Projects",path:"/projects"},
        {name:"Skills",path:"/skills"},
        {name:"Contact",path:"/contact"},

    ]




    

    return(

        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80  
        backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
        
        
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">

       <Link href='/' className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
       Sneara <span className="text-gray-700 dark:text-gray-300">Dev</span>
       </Link>
        
        <div className="hidden md:flex gap-6 items-center">
             {
                links.map((link)=>(
                    <Link key={link.path} href={link.path} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">

                        {link.name}
                    </Link>
                )
                )
             }
             <button onClick={toggleTheme} className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800
              transition"> {theme === "light" ? <IoMdMoon  size={20}/>: <LuSunMoon size={20}/>} 

             </button>
          </div>

          <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle-Menu">
            {
                open ? <FaTimes size={24}/> : <FaBarsStaggered size={24}/>
            }

          </button>

            </div>

        </nav>
    )
}