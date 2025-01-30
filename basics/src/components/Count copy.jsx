const Count = () => {
  let counter = 0;
  const increase = () => {
    counter++;
    console.log(counter);
  };
  const descrease = () => {
    counter--;
    console.log(counter);
  };

  console.log(counter);

  return (
    <div className="w-100 h-100 bg-secondary pt-3">
      <div className="d-flex flex-column gap-3 text-center">
        <h1>Count</h1>
        <h1>{counter} </h1>
        <div>
          <button onClick={() => increase()} className="btn btn-success mx-4">
            Arttır
          </button>
          <button onClick={() => descrease()} className="btn btn-danger mx-4">
            Azalt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
