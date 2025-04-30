import { ChangeEvent, FormEvent, MouseEvent } from "react";

const Form = () => {
  // her eventin tipi farklıdır
  // onMouseLeave,onMouseEnter > PointerEvent
  // onChange > ChangeEvent
  // onSubmit > FormEvent
  // event tiplerine generic olarak olayın gerçekleştiiği html elementinin tipini vermeliyiz
  // HTML-{{İSİM}}-Element syntaxı ile element tipini belirleyebiliyoruz

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // input değişince
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // butona tıklanınca
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input onChange={handleChange} type="email" />

      <br />

      <label>Şifre</label>
      <input type="password" />

      <button onClick={handleClick}>Gönder</button>
    </form>
  );
};

export default Form;
