import React from "react";
import "./WhatsAppButton.css";
import { whatsAppLink } from "./WhatsAppLink"; // ajuste o caminho conforme sua pasta

const WhatsAppButton = () => {
  return (
    <a
      href={whatsAppLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco no WhatsApp"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
