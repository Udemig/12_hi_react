import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import TaskRow from "../TaskRow";

const TaskTable = () => {
  // Store'daki task'a abone ol
  const { tasks } = useSelector((store) => store.taskReducer);

  return (
    <Table variant="dark" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Görev</th>
          <th>Yazan</th>
          <th>Atanan</th>
          <th>Tarih</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskRow key={task.id} task={task} index={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
