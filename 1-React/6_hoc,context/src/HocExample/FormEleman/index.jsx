const FormEleman = ({ children, label }) => {
  return (
    <div className="d-flex flex-column gap-2 w-50  mt-3">
      <label className="fw-bold">{label}</label>
      {children}
    </div>
  );
};

export default FormEleman;
