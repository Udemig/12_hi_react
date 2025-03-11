import React, { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import FormModal from "../../components/FormModal";
import TaskTable from "../../components/TaskTable";

const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="vh-100 ">
      <Container>
        <Stack className="align-items-end my-4">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>

        <TaskTable />
      </Container>

      <FormModal show={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Crud;
