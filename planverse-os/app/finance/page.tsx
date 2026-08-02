"use client";

import { useEffect, useState } from "react";


type Transaction = {
  id:number;
  title:string;
  amount:number;
  type:"income"|"expense";
};


export default function FinancePage(){

const [transactions,setTransactions] = useState<Transaction[]>([]);

const [title,setTitle] = useState("");

const [amount,setAmount] = useState("");

const [type,setType] = useState<"income"|"expense">("expense");




useEffect(()=>{

const saved = localStorage.getItem("transactions");

if(saved){

setTransactions(JSON.parse(saved));

}

},[]);





function updateDashboard() {

  window.dispatchEvent(new Event("dashboardUpdate"));

  // Also notify other tabs/windows
  window.dispatchEvent(new StorageEvent("storage"));
}







function addTransaction(e:React.FormEvent){

e.preventDefault();


if(!title || !amount){

return;

}



const newTransaction:Transaction={

id:Date.now(),

title,

amount:Number(amount),

type

};



const updated=[

...transactions,

newTransaction

];



setTransactions(updated);



localStorage.setItem(
"transactions",
JSON.stringify(updated)
);



updateDashboard();



setTitle("");

setAmount("");

}







function deleteTransaction(id:number){


const updated =
transactions.filter(
item=>item.id!==id
);



setTransactions(updated);



localStorage.setItem(
"transactions",
JSON.stringify(updated)
);



updateDashboard();



}






const income =
transactions

.filter(
item=>item.type==="income"
)

.reduce(
(sum,item)=>sum+item.amount,
0
);




const expense =
transactions

.filter(
item=>item.type==="expense"
)

.reduce(
(sum,item)=>sum+item.amount,
0
);



const balance =
income-expense;







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
Finance Manager
</h1>


<p className="text-gray-400 mt-2">
Track your income and expenses.
</p>





<div className="
grid
md:grid-cols-3
gap-5
mt-8
">


<Card
title="Income"
value={`₹${income}`}
/>


<Card
title="Expenses"
value={`₹${expense}`}
/>


<Card
title="Balance"
value={`₹${balance}`}
/>



</div>







<div className="
mt-10
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
Add Transaction
</h2>



<form
onSubmit={addTransaction}
className="space-y-4"
>


<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

placeholder="Example: Salary, Food"

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

type="number"

value={amount}

onChange={(e)=>setAmount(e.target.value)}

placeholder="Amount"

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

value={type}

onChange={(e)=>
setType(
e.target.value as "income"|"expense"
)
}

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

<option value="income">
Income
</option>


<option value="expense">
Expense
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

Add Transaction

</button>



</form>



</div>







<div className="mt-10">


<h2 className="
text-2xl
font-bold
mb-5
">
Transactions
</h2>




<div className="space-y-4">


{

transactions.map(item=>(


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
"

>


<div>

<h3 className="font-bold">
{item.title}
</h3>


<p className="text-gray-400">
{item.type}
</p>


</div>



<div className="text-right">


<p className={
item.type==="income"
?
"text-green-400 font-bold"
:
"text-red-400 font-bold"
}
>

₹{item.amount}

</p>



<button

onClick={()=>deleteTransaction(item.id)}

className="
text-red-400
text-sm
"

>

Delete

</button>



</div>


</div>



))


}



</div>


</div>



</main>

);

}






function Card({

title,

value

}:{
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
">


<p className="text-gray-400">
{title}
</p>


<h2 className="
text-3xl
font-bold
mt-3
">

{value}

</h2>


</div>

);


}