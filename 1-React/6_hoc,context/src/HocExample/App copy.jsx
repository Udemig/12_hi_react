import FormEleman from "./FormEleman";

const App = () => {
  return (
    <div className="mt-5 container">
      <form>
        <FormEleman label="İsim:">
          <input
            type="text"
            className="form-control"
            placeholder="Soyisim giriniz..."
          />
        </FormEleman>
        <FormEleman label="Mesajınız:">
          <textarea
            rows="4"
            style={{ minHeight: "100px", maxHeight: "200px", height: "auto" }}
            className="form-control"
          ></textarea>
        </FormEleman>
      </form>
    </div>
  );
};

export default App;
