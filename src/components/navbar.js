import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./login/logoutButton";



export default function NavBar(props) {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated);

    const navbarMode = isAuthenticated ? '' : 'Auth';

    return (
        <div className={`navbar${navbarMode}`}>
            <p>title</p>
            <NavLink to="/galleryFeed">Gallery Feed</NavLink>
            <NavLink to="/aboutMe">About Me</NavLink>
            {isAuthenticated === true ? (
                <div>
                    logged in navbar
                    <NavLink to="/galleryEditor">Gallery Editor</NavLink>
                    <LogoutButton />                
                </div>
            ): (
                <div>
                    not logged in navbar
                </div>
            )}
        </div>
    )
}