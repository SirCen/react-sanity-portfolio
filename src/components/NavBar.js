import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-4xl font-bold tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-white bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        About Me
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-white bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        Projects
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-white bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-white">
                        Blog
                    </NavLink>
                </nav>
                <div>
                    
                </div>
            </div>
        </header>
    );
}