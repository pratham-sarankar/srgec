import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected({ children }) {
    const navigate = useNavigate();
    // logic to check if user is authenticated or not.
    // if not authenticated, redirect the user to login page.
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login")
        }
    }, [])
    return <>
        {children}
    </>
}