"use client";

import { useEffect, useState } from "react";


type Meal = {
  id:number;
  day:string;
  type:string;
  food:string;
};


const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];


const mealTypes = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack"
];



export default function MealsPage(){


const [meals,setMeals] = useState<Meal[]>([]);

const [day,setDay] = useState("Monday");

const [type,setType] = useState("Breakfast");

const [food,setFood] = useState("");





useEffect(()=>{


const saved = localStorage.getItem("meals");


if(saved){

setMeals(JSON.parse(saved));

}


},[]);






function updateDashboard(){

window.dispatchEvent(
new Event("dashboardUpdate")
);

}








function addMeal(e:React.FormEvent){


e.preventDefault();


if(!food){

return;

}



const newMeal:Meal={

id:Date.now(),

day,

type,

food

};



const updated=[

...meals,

newMeal

];



setMeals(updated);



localStorage.setItem(

"meals",

JSON.stringify(updated)

);



updateDashboard();



setFood("");

}





function deleteMeal(id:number){



const updated =
meals.filter(
item=>item.id!==id
);



setMeals(updated);



localStorage.setItem(

"meals",

JSON.stringify(updated)

);



updateDashboard();



}







function getMeal(
day:string,
type:string
){


return meals.find(

item=>

item.day===day &&

item.type===type

);


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

Weekly Meal Planner

</h1>



<p className="
text-gray-400
mt-2
">

Plan breakfast, lunch, dinner and snacks.

</p>







{/* Add Meal */}



<div className="
mt-8
max-w-xl
bg-[#171717]
border
border-[#2D2D2D]
rounded-3xl
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

Add Meal

</h2>



<form

onSubmit={addMeal}

className="space-y-4"

>




<select

value={day}

onChange={(e)=>setDay(e.target.value)}

className="
w-full
bg-black
border
border-gray-700
rounded-xl
px-4
py-3
"

>


{

days.map(item=>(

<option key={item}>
{item}
</option>

))

}


</select>







<select

value={type}

onChange={(e)=>setType(e.target.value)}

className="
w-full
bg-black
border
border-gray-700
rounded-xl
px-4
py-3
"

>


{

mealTypes.map(item=>(

<option key={item}>
{item}
</option>

))

}


</select>






<input

value={food}

onChange={(e)=>setFood(e.target.value)}

placeholder="Food name"

className="
w-full
bg-black
border
border-gray-700
rounded-xl
px-4
py-3
"

/>







<button

className="
w-full
bg-[#D4AF37]
text-black
font-bold
rounded-xl
py-3
"

>

Add Meal

</button>



</form>



</div>








{/* Weekly Calendar */}



<div className="
mt-12
">


<h2 className="
text-2xl
font-bold
mb-5
">

Weekly Calendar

</h2>





<div className="
grid
md:grid-cols-7
gap-4
">


{

days.map(dayName=>(


<div

key={dayName}

className="
bg-[#171717]
border
border-[#2D2D2D]
rounded-2xl
p-4
"

>


<h3 className="
text-[#D4AF37]
font-bold
mb-4
">

{dayName}

</h3>






{

mealTypes.map(mealType=>{


const meal =
getMeal(
dayName,
mealType
);



return (

<div
key={mealType}
className="mb-3"
>


<p className="
text-gray-400
text-sm
">

{mealType}

</p>


<p>

{
meal
?
meal.food
:
"-"
}

</p>


</div>


)


})

}



</div>


))

}



</div>



</div>








{/* Meal List */}



<div className="
mt-12
">


<h2 className="
text-2xl
font-bold
mb-5
">

All Meals

</h2>





<div className="
space-y-4
">


{

meals.map(item=>(



<div

key={item.id}

className="
bg-[#171717]
border
border-[#2D2D2D]
rounded-2xl
p-5
flex
justify-between
items-center
"

>


<div>


<h3 className="font-bold">

{item.day} - {item.type}

</h3>


<p className="
text-gray-400
">

{item.food}

</p>


</div>




<button

onClick={()=>deleteMeal(item.id)}

className="
text-red-400
"

>

Delete

</button>




</div>


))


}



</div>



</div>





</main>

);

}