"use client";

const CallBtn = () => {
  return (
    <div className="flex flex-col gap-2 items-center client-component">
      <button
        onClick={() => {
          alert("Bizi arıyorsunuz");
        }}
      >
        Bizi Ara
      </button>

      <span className="client">Client Component</span>
    </div>
  );
};

export default CallBtn;
