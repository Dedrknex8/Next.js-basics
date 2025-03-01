
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
        <div>
            <h1>Fetched JSON Data:</h1>
            <pre>{JSON.stringify(userslist, null, 2)}</pre>
        </div>
    );
}