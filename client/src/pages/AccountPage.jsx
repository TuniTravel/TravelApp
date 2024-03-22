import { useContext } from "react"
import { UserContext } from "../UserContext.jsx"
import { Link,Navigate, useParams } from "react-router-dom";
import PlacesPage from "./PlacesPage.jsx";


export default function AccountPage(){
    const {ready,user,setUser}=useContext(UserContext);
    const [redirect,setRedirect]=useState(null);
   let {subpage}=useParams();
    if (subpage===undefined){
        subpage='profile';
    }
    async function logout(){
       await axios.post('/logout');
       setRedirect('/');
       setUser(null);
    }

    if (!ready){
        return 'Loading...';
    }

    if (ready  && !user){
        return <Navigate to={'/login'}></Navigate>
    }
    
   function linkClasses(type=null){
    let classes=' infline-flex gap-1 py-2 px-6 rounded-full';
    if (type === subpage){
        classes+='bg-primary text-white ';
    }else{
        classes+='bg-gray-200';
    }
      return classes;
   }
   if (redirect){
    return <Navigate to={redirect}></Navigate>
   }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2" >
                <Link className={linkClasses('profile')} to={'/account'}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Profile
                </Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Bookings
                </Link>
                <Link className={linkClasses('places')} to={'/account/places'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                 </svg>
                 Accomodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                Logged in as {user.name} ({user.email})<br />
                <button onClick={logout} className="primary max-w-sm mt-2"Logout></button>
                {subpage=== 'places' && (
                    <PlacesPage/>
                )}
                
                </div>
            )}
        </div>
    );
}