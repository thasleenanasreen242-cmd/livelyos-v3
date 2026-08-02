export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
};

export function getTransactions(): Transaction[] {
  if (typeof window === "undefined") return [];

  return JSON.parse(
    localStorage.getItem("transactions") || "[]"
  );
}

export function saveTransactions(data: Transaction[]) {
  localStorage.setItem(
    "transactions",
    JSON.stringify(data)
  );

    window.dispatchEvent(
      new Event("dashboardUpdate")
    );
}

// ----------------------------

export function getTasks() {
  if (typeof window === "undefined") return [];

  return JSON.parse(
    localStorage.getItem("tasks") || "[]"
  );
}

export function saveTasks(data: any[]) {
  localStorage.setItem(
    "tasks",
    JSON.stringify(data)
  );

  window.dispatchEvent(
    new Event("dashboardUpdate")
  );
}

// ----------------------------

export function getMeals() {
  if (typeof window === "undefined") return [];

  return JSON.parse(
    localStorage.getItem("meals") || "[]"
  );
}

export function saveMeals(data: any[]) {
  localStorage.setItem(
    "meals",
    JSON.stringify(data)
  );

  window.dispatchEvent(
    new Event("dashboardUpdate")
  );
}