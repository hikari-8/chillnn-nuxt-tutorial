export type TODO_STATUS = "PENDING" | "DOING" | "DONE";

export type ToDoItem = {
  name: string;
  status: TODO_STATUS;
  createdAt: number;
};
