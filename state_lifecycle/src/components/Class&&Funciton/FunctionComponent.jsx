import { useState, useEffect } from "react";
const FunctionComponent = () => {
  // Count State'i
  const [count, setCount] = useState(0);

  // Bir function component'de lifecycle döngüsü `useEffect` hooku ile izlenir.Bu yapı class component'deki componentDidMount,componentDidUpdate,componentWillUnmount yapılarının yapmış olduğu görevi tek başına üstlenir.

  // useEffect react içerisinde çağırılır.Sonrasında bu yapı içerisinde bir adet call-back function ve bir adet bağımlılık dizisi ister.Bağımlılık dizisi bileşenin güncellenme anını izlemek içindir.Eğer bir bileşenin ekrandan gitme anını izlemek istiyorsak bunu return satırında yaparız.

  // Bileşenin ekrana geldiği anı izle
  useEffect(() => {
    console.log(`Bileşen ekrana geldi-Function`);
  }, []);

  // Bileşenin güncellendiği anı izle
  useEffect(() => {
    console.log(`Bileşen güncellendi-Function`);
  }, [count]);

  // Bileşenin ekrandan gittiği anı izle
  useEffect(() => {
    return console.log(`Bileşen ekrandan gitti-Function`);
  }, []);

  // Bu 3 yapının tek bir noktada kullanımı
  useEffect(() => {
    console.log(`Bileşen ekrana geldi && Güncellendi-Function`);

    return console.log(`Bileşen ekrandan gitti-Function`);
  }, [count]);
  return (
    <div className="container mt-2 border border-4 p-5">
      <h1 className="text-center">Function Component</h1>
      <div className="d-flex justify-content-center gap-2">
        <div>
          <h1 className="text-center">{count} </h1>
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-success mx-3"
          >
            Arttır
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="btn btn-danger mx-3"
            disabled={count === 0}
          >
            Azalt
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunctionComponent;
