import React from "react";

const Buttonup = () => {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="absolute bottom-3 right-3 bg-primary rounded-xl"
      >
        {/* icono en svg flecha hacia arriba */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m7 14l5-5l5 5H7Z" />
        </svg>
      </button>
    </div>
  );
};

export default Buttonup;
