const Card = ({ item }) => {
  return (
    <div className="border text-black p-5 rounded-md">
      <p className="text-sm font-semibold mb-2 capitalize">{item[0]}</p>
      <p className="text-lg">{item[1]}</p>
    </div>
  );
};

export default Card;
