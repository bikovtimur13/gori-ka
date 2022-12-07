export type taskType = {
  taskNum: number;
  taskTitle: string;
  taskDescription: string;
  priority: number;
};

export type userType = {
  id: number;
  email: string;
  name: string;
  dateOfBirth: number;
  male: number;
  tasks: Array<taskType>;
};
