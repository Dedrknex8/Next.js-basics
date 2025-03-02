import Link from "next/link";

async function fecthUserdata() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/users')
        const result = await apiResponse.json();
        
        return result.users;
    } catch (error) {
        throw new Error(error)
    }
}


export default async function ServerFetch(){
    const userslist = await fecthUserdata();

    
    return (
        <div className="p-10 flex flex-col ">
            <h1>Server Side data fetching ...</h1>
            <ul>
                {
                    userslist && userslist.length>0
                    ?userslist.map((user)=>(
                        <Link href={`/server-data-fetch/${user.id}`}>
                            <li className="cursor-pointer">
                            {user.firstName}
                            </li>
                        </Link>
                    ))
                    :null
                }
            </ul>
        </div>
    );
}