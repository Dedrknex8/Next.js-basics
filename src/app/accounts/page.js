import { redirect } from "next/navigation";


export default function Account(){
//    assume user profile is null
    const userProfileInfo = null;
    if (userProfileInfo === null) {
        redirect('profile') //this will redirect to profile page directly
    }
    return
    <div>
        <h1>This is account page</h1>
    </div>
}