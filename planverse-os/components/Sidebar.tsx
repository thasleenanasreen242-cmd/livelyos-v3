"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Sidebar(){


const router = useRouter();



function logout(){

localStorage.removeItem("loggedIn");

router.push("/login");

}




return (

<aside className="
hidden
md:flex
w-72
min-h-screen
bg-[#171717]
border-r
border-[#2D2D2D]
p-6
flex-col
">


<h1 className="
text-3xl
font-bold
text-[#D4AF37]
mb-10
">

LivelyOS

</h1>





<nav className="
space-y-3
flex-1
">



<Link

href="/dashboard"

className="
block
px-4
py-3
rounded-xl
hover:bg-[#222]
"

>

🏠 Dashboard

</Link>





<Link

href="/finance"

className="
block
px-4
py-3
rounded-xl
hover:bg-[#222]
"

>

💰 Finance

</Link>





<Link

href="/tasks"

className="
block
px-4
py-3
rounded-xl
hover:bg-[#222]
"

>

✅ Tasks

</Link>





<Link

href="/meals"

className="
block
px-4
py-3
rounded-xl
hover:bg-[#222]
"

>

🍽️ Meals

</Link>





<Link

href="/settings"

className="
block
px-4
py-3
rounded-xl
hover:bg-[#222]
"

>

⚙️ Settings

</Link>




</nav>





<button

onClick={logout}

className="
border
border-red-500
text-red-400
rounded-xl
py-3
hover:bg-red-500
hover:text-white
transition
"

>

Logout

</button>



</aside>

);

}