const ContentLoader = () => {
  const arr = new Array(9).fill(".");

  return arr.map((i) => (
    <div
      data-testid="content-loader"
      className="p-5 border text-black shadow rounded-md text-transparent select-none bg-gray-200 animate-pulse"
    >
      <div>.</div>
      <div>.</div>
    </div>
  ));
};

export default ContentLoader;
