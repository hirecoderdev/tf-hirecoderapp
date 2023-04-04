import { CONFIG_TASK_DATA } from "./actionType";

export const configTaskData = (status) => (dispatch) =>
  dispatch({
    type: CONFIG_TASK_DATA,
    data: status,
  });
