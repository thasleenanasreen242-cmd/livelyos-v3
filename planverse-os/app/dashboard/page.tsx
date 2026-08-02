"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function DashboardPage(){

const [name,setName] = useState("User");

const [income,setIncome] = useState(0);

const [expense,setExpense] = useState(0);

const [tasks,setTasks] = useState(0);

const [completedTasks,setCompletedTasks] = useState(0);

const [meals,setMeals] = useState(0);





const taskPercentage =

tasks

?

Math.round(
(completedTasks / tasks) * 100
)

:

0;







useEffect(()=>{


function loadDashboard(){



// User

const user =
localStorage.getItem("user");


if(user){

const data = JSON.parse(user);

setName(
data.name || "User"
);

}







// Finance


const transactions =
localStorage.getItem("transactions");


if(transactions){


const data = JSON.parse(transactions);



setIncome(

data

.filter(
(item:any)=>
item.type==="income"
)

.reduce(
(sum:number,item:any)=>
sum + Number(item.amount),
0
)

);



setExpense(

data

.filter(
(item:any)=>
item.type==="expense"
)

.reduce(
(sum:number,item:any)=>
sum + Number(item.amount),
0
)

);


}








// Tasks


const taskData =
localStorage.getItem("tasks");


if(taskData){


const taskList =
JSON.parse(taskData);



setTasks(
taskList.length
);



setCompletedTasks(

taskList.filter(
(task:any)=>task.completed
).length

);



}








// Meals


const mealData =
localStorage.getItem("meals");


if(mealData){


setMeals(

JSON.parse(mealData).length

);


}




}







loadDashboard();




window.addEventListener(
"dashboardUpdate",
loadDashboard
);




return()=>{


window.removeEventListener(
"dashboardUpdate",
loadDashboard
);


};



},[]);









return (

<main className="
min-h-screen
bg-black
text-white
flex
">


<Sidebar />





<section className="
flex-1
p-6
md:p-10
">





<h1 className="
text-4xl
font-bold
">

Welcome back, {name} 👋

</h1>



<p className="
text-gray-400
mt-2
">

Your complete life management dashboard.

</p>







<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-6
gap-5
mt-10
">





<Card

icon="💰"

title="Income"

value={`₹${income}`}

/>





<Card

icon="📉"

title="Expenses"

value={`₹${expense}`}

/>






<Card

icon="🏦"

title="Savings"

value={`₹${income-expense}`}

/>







<Card

icon="✅"

title="Tasks"

value={`${tasks}`}

/>







<Card

icon="🎯"

title="Progress"

value={`${taskPercentage}%`}

/>







<Card

icon="🍽️"

title="Meals"

value={`${meals}`}

/>





</div>









<div className="
mt-12
">


<h2 className="
text-2xl
font-bold
mb-5
">

Quick Access

</h2>





<div className="
grid
md:grid-cols-4
gap-5
">



<Action
title="Finance"
href="/finance"
/>



<Action
title="Tasks"
href="/tasks"
/>



<Action
title="Meals"
href="/meals"
/>



<Action
title="Settings"
href="/settings"
/>



</div>


</div>





</section>



</main>

);

}








function Card({

icon,

title,

value

}:{

icon:string;

title:string;

value:string;

}){


return (

<div className="
bg-[#171717]
border
border-[#2D2D2D]
rounded-3xl
p-6
hover:border-[#D4AF37]
transition
">


<div className="
text-3xl
">

{icon}

</div>



<p className="
text-gray-400
mt-4
">

{title}

</p>



<h3 className="
text-2xl
font-bold
mt-2
">

{value}

</h3>



</div>

);


}









function Action({

title,

href

}:{

title:string;

href:string;

}){


return (

<Link href={href}>


<div className="
bg-[#171717]
border
border-[#2D2D2D]
rounded-2xl
p-6
hover:border-[#D4AF37]
transition
cursor-pointer
">


<h3 className="font-bold">

{title}

</h3>



<p className="
text-gray-400
mt-2
">

Open →

</p>



</div>


</Link>


);

}