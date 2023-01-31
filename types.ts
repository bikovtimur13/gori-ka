export type taskType = {
  task: {
    taskNum: number;
    taskTitle: string;
    taskDescription: string;
    priority: number;
  };
};

export type userType = {
  user: {
    id: number;
    email: string;
    name: string;
    dateOfBirth: number;
    male: number;
    tasks: Array<taskType>;
  };
};

export type metaType = {
  title: string;
  description: string;
  favicon: string;
};
