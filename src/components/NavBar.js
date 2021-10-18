import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-purple-300">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-white text-4xl font-bold tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-white bg-purple-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        About Me
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-white bg-purple-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        Projects
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-white bg-purple-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        Blog
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.instagram.com/gahee_x" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://www.youtube.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/gahee-kim-3b76111b5/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>                        
                </div>
            </div>
        </header>
    );
}