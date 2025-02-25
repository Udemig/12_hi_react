import React from "react";
const Count = ({ count }) => {
  /*
     Bir react bileşeni ekrana geldikten sonra içerisindeki statein değişmesi ve kendisine geçilen bir prop varsa bunun değişmesi durumunda tekrardan render olur.Bu durum eğer ki parent component içerisindeki child elemanlarında gereksiz yere render edilmesine sebep olur ve uygulamamızın performansını düşürür.Bunu React.memo() ile çözeriz.React.memo() sarmaladığı bir elemanın prop değerlerinde değişiklik olmadığı sürece tekrar render olmasını engeller.     
              
              
              
              */
  console.log(`Count bileşeni render oldu`);

  return (
    <div className="mt-4">
      <h1>Count: {count}</h1>
    </div>
  );
};

export default React.memo(Count);
