async function fetchUserDeatils(currentUserId){
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);

        const result = apiResponse.json();

        return result;

    } catch (error) {
        throw new Error(error)
    }
}

export default async function userdetail({ params }){
    
    const userdetails = await fetchUserDeatils(params.details)
    return(
        <div>
        <h1>welcome to user page</h1>
        <p>{userdetails?.firstName} {userdetails?.lastName}</p>
        <p>username:{userdetails?.username}&Password : {userdetails?.password}</p>
        </div>
    )
}