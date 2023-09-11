import { useState } from "react";
import {
  ITaskCompleted,
  ITaskInProgress,
  TASK_STATUS,
  TaskId,
} from "./interfaces";
import axios from "axios";
import { useInterval } from "./hooks/useInterval";

export const useApp = () => {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [running, setRunning] = useState<boolean | null>(null);
  const [progressValue, setProgressValue] = useState<number | null>(null);

  const handleClick = async () => {
    try {
      const { data } = await axios.post<TaskId>(
        `${import.meta.env.VITE_BASE_SERVER_URL}create_task`,
        {
          delay: "30",
        }
      );
      setRunning(true);
      setTaskId(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePollProgress = async () => {
    try {
      if (!taskId) return;

      const { data } = await axios.get<ITaskInProgress | ITaskCompleted>(
        `${import.meta.env.VITE_BASE_SERVER_URL}check_task/${taskId}`
      );

      if (data.status === TASK_STATUS.COMPLETED) {
        setProgressValue(null);
        setRunning(false);
        setTaskId(null);
        return;
      }

      setProgressValue(data.progress_percentage);
    } catch (error) {
      setProgressValue(null);
      setRunning(false);
      setTaskId(null);
      console.log(error);
    }
  };

  useInterval(handlePollProgress, running ? 2000 : null);

  return {
    running,
    progressValue,
    handleClick,
  };
};
