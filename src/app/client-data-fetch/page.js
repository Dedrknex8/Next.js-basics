"use client";
import { useEffect, useState } from "react";

export default function ClientSideDataFetch() {
    const [loading, setLoading] = useState(false); // useEffect
    const [users, setUsers] = useState([]);

    // Fetch Data
    async function fetchUserList() {
        try {
            setLoading(true); // Set loading before fetching
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json(); //  Await the response

            if (result?.users) {
                setUsers(result.users);
            }
        } catch (error) {
            console.error("Error fetching users:", error); // 
            setUsers([]);
        } finally {
            setLoading(false); //  Ensure loading is false in both success and failure
        }
    }

    // Fetch data on mount
    useEffect(() => {
        fetchUserList();
    }, []); //  Empty dependency array to run only once

    if (loading) return <h3 className="font-extrabold text-3xl">Loading users, please wait...</h3>;

    return (
        <div>
            <h1>Client-side data fetching...</h1>
            <ul>
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id} className="cursor-pointer"> {/*  Fix: Use key prop */}
                            {user.firstName} {user.lastName} {/*  Fix: Correct variable */}
                        </li>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </ul>
        </div>
    );
}
