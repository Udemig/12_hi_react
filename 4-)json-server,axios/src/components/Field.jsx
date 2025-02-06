const Field = ({ label, name, value }) => {
  return (
    <div className="field">
      <label>{label} </label>
      <input type="text" name={name} defaultValue={value} />
      {/* Value bir inputa değer atamak için kullanılır.Bu şekilde verilen değer değiştirilemez.Bunu düzeltmek için ise defaultValue kullanılır */}
    </div>
  );
};

export default Field;
