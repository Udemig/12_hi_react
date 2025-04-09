import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { inputs } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/slices/crudSlices";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormModal = ({ show, handleClose, task }) => {
  const [endDate, setEndDate] = useState(task ? new Date(task.end_date) : null);
  // Dispatch kurulumu
  const dispatch = useDispatch();
  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemeyi engelle
    e.preventDefault();

    // Form Data class'ından örnek al
    const formData = new FormData(e.target);

    // Form data ile alınan veriyi objeye çevir
    const taskData = Object.fromEntries(formData.entries());

    // DatePicker'dan alınan tarihi ISO formatına çevirip taskData'ya aktardık
    taskData.end_date = endDate.toISOString();

    console.log(taskData);

    // reducer'a haber et

    // ! Eğer task varsa bu modal düzenleme modundadır.O zaman ilgili task'i düzenle ama eğer task yoksa ekleme modundadır o halde task ekle

    if (!task) {
      dispatch(addTask(taskData));
    } else {
      // Güncelleme işlemi
      dispatch(updateTask(taskData));
    }

    // Modal'ı kapat
    handleClose();
  };
  return (
    <Modal
      className="text-dark"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {task ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Form */}
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          {inputs.map((item, key) => (
            <Form.Group key={key}>
              <Form.Label className={item.type === "date" && "d-block"}>
                {item.label}
              </Form.Label>
              {item.type === "date" ? (
                <DatePicker
                  defaultValue={task && task[item.name]}
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="form-control w-100"
                  dateFormat="dd-MM-yyyy"
                  placeholderText="dd.mm.yyyy"
                />
              ) : (
                <Form.Control
                  defaultValue={task && task[item.name]}
                  name={item.name}
                  type={item.type || "text"}
                  required
                  placeholder="İsim giriniz..."
                  className="shadow"
                />
              )}
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button type="submit" variant="primary">
              {task ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
