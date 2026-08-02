"use client";

import { useEffect, useState } from "react";


type Task = {

id:number;

title:string;

date:string;

priority:string;

completed:boolean;

};



export default function TasksPage(){


const [tasks,setTasks] = useState<Task[]>([]);


const [title,setTitle] = useState("");

const [date,setDate] = useState("");

const [priority,setPriority] = useState("Medium");




useEffect(()=>{


const saved = localStorage.getItem("tasks");


if(saved){

setTasks(JSON.parse(saved));

}


},[]);






function updateDashboard(){

window.dispatchEvent(
new Event("dashboardUpdate")
);

}







function addTask(e:React.FormEvent){


e.preventDefault();


if(!title) return;



const newTask:Task={


id:Date.now(),

title,

date,

priority,

completed:false


};



const updated=[

...tasks,

newTask

];



setTasks(updated);



localStorage.setItem(
"tasks",
JSON.stringify(updated)
);



updateDashboard();



setTitle("");

setDate("");

}





function toggleTask(id:number){


const updated =
tasks.map(task=>


task.id===id

?

{
...task,
completed:!task.completed
}

:

task


);



setTasks(updated);



localStorage.setItem(
"tasks",
JSON.stringify(updated)
);



updateDashboard();



}







function deleteTask(id:number){


const updated =
tasks.filter(
task=>task.id!==id
);



setTasks(updated);



localStorage.setItem(
"tasks",
JSON.stringify(updated)
);



updateDashboard();



}







const completed =
tasks.filter(
task=>task.completed
).length;



const progress =
tasks.length
?
Math.round(
(completed/tasks.length)*100
)
:
0;







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

Task Planner

</h1>



<p className="
text-gray-400
mt-2
">

Organize your daily goals.

</p>








{/* Progress */}


<div className="
mt-8
bg-[#171717]
border
border-[#2D2D2D]
rounded-3xl
p-6
">


<h2 className="font-bold">

Progress

</h2>


<div className="
mt-4
bg-black
rounded-full
h-4
">


<div

className="
bg-[#D4AF37]
h-4
rounded-full
"

style={{
width:`${progress}%`
}}

/>


</div>


<p className="
mt-3
text-gray-400
">

{progress}% completed

</p>


</div>









{/* Add Task */}



<div className="
mt-8
max-w-xl
bg-[#171717]
border
border-[#2D2D2D]
rounded-3xl
p-6
">


<form

onSubmit={addTask}

className="space-y-4"

>



<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

placeholder="Task name"

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




<input

type="date"

value={date}

onChange={(e)=>setDate(e.target.value)}

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






<select

value={priority}

onChange={(e)=>setPriority(e.target.value)}

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


<option>
High
</option>


<option>
Medium
</option>


<option>
Low
</option>


</select>





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

Add Task

</button>



</form>


</div>








{/* Tasks List */}



<div className="
mt-10
space-y-4
">



{

tasks.map(task=>(



<div

key={task.id}

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


<h3 className={

task.completed

?

"line-through text-gray-500"

:

"font-bold"

}

>

{task.title}

</h3>


<p className="text-gray-400 text-sm">

📅 {task.date || "No date"}

</p>



<p className="
text-sm
mt-1
">

Priority:
{" "}

{task.priority}

</p>


</div>






<div className="
flex
gap-3
">


<button

onClick={()=>toggleTask(task.id)}

className="
text-green-400
"

>

✓

</button>




<button

onClick={()=>deleteTask(task.id)}

className="
text-red-400
"

>

×


</button>



</div>



</div>



))


}



</div>





</main>

);

}