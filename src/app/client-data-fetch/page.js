"use client";
import { useEffect, useState } from "react";
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientSideDataFetch() {
   /*  const [loading, setLoading] = useState(false); // useEffect
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

    if (loading) return <h3 className="font-extrabold text-3xl">Loading users, please wait...</h3>; */

    //Starting swr from here
    const { data, error, isLoading } = useSWR(`https://dummyjson.com/users`, fetcher)
    
    if(error){
        return(
        <h3 className="font-extrabold text-3xl flex flex-row items-center justify-center bg-red-100 text-red-600 p-4 rounded-lg shadow-md">
                <p className="text-red-700 dark:text-red-400">Error</p> fetching users, please try again...
            </h3>
        );
    }

    if (isLoading)
        return (
            <h3 className="font-extrabold text-3xl text-center text-gray-700 p-4 animate-pulse">
                Loading users, please wait...
            </h3>
        );

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
                Client-side Data Fetching
            </h1>
            <ul className="space-y-4">
                {data?.users.length > 0 ? (
                    data.users.map((user) => (
                        <li
                            key={user.id}
                            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col sm:flex-row sm:justify-between items-center shadow-sm transition-transform transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <div className="text-lg font-medium text-gray-900 dark:text-gray-200">
                                {user.firstName} {user.lastName}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{user.email}</span>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No users found.</p>
                )}
            </ul>
        </div>
    );
}