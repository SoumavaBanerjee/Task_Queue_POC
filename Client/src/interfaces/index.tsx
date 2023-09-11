export type TaskId = {
  id: string;
};

export enum TASK_STATUS {
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export type ITaskInProgress = {
  status: TASK_STATUS.IN_PROGRESS;
  current: number;
  total: number;
  progress_percentage: number;
};

export type ITaskCompleted = {
  status: TASK_STATUS.COMPLETED;
  result: unknown;
};
