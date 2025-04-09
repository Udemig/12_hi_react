import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir ?</h3>

        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>
      </div>

      <p className={isOpen ? "show" : "hide"}>
        Unit test, bir yazılımın en küçük birimlerini (genellikle fonksiyon veya metotları) izole ederek doğruluğunu
        test etmeye yönelik yapılan testlerdir. Bu testler, her bir birimin beklenen çıktıyı verip vermediğini kontrol
        eder, böylece hata tespiti daha erken yapılabilir.
      </p>
    </div>
  );
};

export default Accordion;
