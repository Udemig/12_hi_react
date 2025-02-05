import { useRef, useState } from "react";
const FormExample = () => {
  // useRef ile bir referans oluştur
  const emailRef = useRef();
  const passwordRef = useRef();

  // Hata stateleri
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);

  const handleSubmit = (e) => {
    // Sayfa yenilemesini iptal et
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email) {
      setEmailError("Email alanı zorunludur");
    } else {
      setEmailError(null);
    }

    if (!password) {
      setPassError("Şifre alanı zorunludur");
    } else {
      setPassError(null);
    }
  };

  console.log(emailError);
  console.log(passError);

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-5 mt-5 p-4 border border-2 rounded"
    >
      <div>
        <label>Email:</label>
        <input ref={emailRef} type="email" className="form-control mt-1" />
      </div>
      {emailError && (
        <p className="bg-danger-subtle p-2 text-dark fs-5 fw-bold rounded">
          Email alanı zorunludur
        </p>
      )}

      <div>
        <label>Password:</label>
        <input
          ref={passwordRef}
          type="password"
          className="form-control mt-1"
        />
      </div>
      {passError && (
        <p className="bg-danger-subtle p-2 text-dark fs-5 fw-bold rounded">
          Şifre alanı zorunludur
        </p>
      )}

      <button className="btn btn-success" type="submit">
        Send
      </button>
    </form>
  );
};

export default FormExample;
