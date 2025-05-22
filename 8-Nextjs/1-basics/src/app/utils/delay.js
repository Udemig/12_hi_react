// çağrıldığında bizi 1sn bekleticek fonksiyon
const delay = (ms = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default delay;
