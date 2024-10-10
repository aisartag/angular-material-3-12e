export interface Owner {
  firstName: string;
  lastName: string;
}

export interface Todo {
  id: number;
  description: string;
  completed: boolean;
  pwner: Owner;
}
