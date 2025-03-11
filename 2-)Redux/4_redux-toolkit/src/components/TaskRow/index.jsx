import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/slices/crudSlices";
import FormModal from "../FormModal";
const TaskRow = ({ task, index }) => {
  // Form Modal'ın aç-kapa durumunu belirleyecek state
  const [isShow, setIsShow] = useState(false);
  // Dispatch kurulumu
  const dispatch = useDispatch();
  // Task tarihini daha okunur formatta döndüren fonksiyon
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("Tr", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    return formattedDate;
  };

  // Task'i silecek fonksiyon
  const handleDelete = (id) => {
    const res = confirm("Task'i silmek istediğinizden emin misiniz ?");

    // Silme işlemi iptal ediliyse fonksiyonu durdur
    if (!res) return;

    // Silme işlemi için reducer'a haber ver

    dispatch(deleteTask(id));
  };
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{task.title}</td>
        <td>{task.author}</td>
        <td>{task.assigned}</td>
        <td>{formatDate(task.end_date)}</td>
        <td className="d-flex gap-1">
          <Button
            onClick={() => handleDelete(task.id)}
            size="sm"
            variant="danger"
          >
            <FaTrash />
          </Button>
          <Button onClick={() => setIsShow(true)} size="sm">
            <FaEdit />
          </Button>
        </td>
      </tr>

      <FormModal
        show={isShow}
        handleClose={() => setIsShow(false)}
        task={task}
      />
    </>
  );
};

export default TaskRow;
