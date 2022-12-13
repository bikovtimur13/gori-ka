export type taskProps = {
  task: {
    taskNum: number;
    taskTitle: string;
    taskDescription: string;
    priority: number;
  };
};

export type userProps = {
  user: {
    id: number;
    email: string;
    name: string;
    dateOfBirth: number;
    male: number;
    tasks: Array<taskProps>;
  };
};

export type metaType = {
  title: string;
  description: string;
  favicon: string;
};
