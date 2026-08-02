"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function SettingsPage(){

const router = useRouter();


const [name,setName] = useState("");

const [email,setEmail] = useState("");



useEffect(()=>{


const user = localStorage.getItem("user");


if(user){

const data = JSON.parse(user);


setName(data.name || "");

setEmail(data.email || "");

}


},[]);






function saveProfile(){


const updatedUser = {

name,

email

};



localStorage.setItem(
"user",
JSON.stringify(updatedUser)
);



window.dispatchEvent(
new Event("dashboardUpdate")
);



alert("Profile updated");

}





function logout(){


localStorage.removeItem("loggedIn");


router.push("/login");


}





return (

<main className="
min-h-screen
bg-black
text-white
p-6
md:p-10
">


<h1 className="
text-4xl
font-bold
text-[#D4AF37]
">

Settings

</h1>


<p className="
text-gray-400
mt-2
">

Manage your LivelyOS profile.

</p>







<div className="
mt-10
max-w-xl
bg-[#171717]
border
border-[#2D2D2D]
rounded-3xl
p-8
">



<h2 className="
text-2xl
font-bold
mb-6
">

Profile

</h2>




<label className="
text-gray-400
">

Name

</label>


<input

value={name}

onChange={(e)=>setName(e.target.value)}

className="
w-full
mt-2
mb-5
bg-black
border
border-gray-700
rounded-xl
px-4
py-3
"

/>






<label className="
text-gray-400
">

Email

</label>


<input

value={email}

readOnly

className="
w-full
mt-2
mb-6
bg-black
border
border-gray-700
rounded-xl
px-4
py-3
text-gray-400
"

/>






<button

onClick={saveProfile}

className="
w-full
bg-[#D4AF37]
text-black
font-bold
rounded-xl
py-3
mb-4
"

>

Save Changes

</button>







<button

onClick={logout}

className="
w-full
border
border-red-500
text-red-400
rounded-xl
py-3
"

>

Logout

</button>



</div>





</main>

);

}