import React, { useEffect } from "react";
import { connect } from "react-redux";
import { configTaskData } from "../action/task";
import get from "lodash/get";
import userData from "./data";
import { useDispatch } from "react-redux";


const UpdateStore = ({ configTaskData, taskData }) => {
  const dispatch = useDispatch();
  //Added JSon data in tasklist
  const [taskList, setTaskList] = React.useState(userData);

  const showData = () => {
    console.log(taskData);
  }
  //update store on the rendering of the component
  useEffect(() => {
    dispatch(configTaskData(taskList));
  }, [])
  return (
    <>
      {/* Show data */}
      <button onClick={() => showData()}>Show data</button>
    </>
  )
};

const mapStateToProps = (state) => ({
  taskData: get(state, "task.taskList"),
});

export default connect(mapStateToProps, {
  configTaskData,
})(UpdateStore);
