import React from "react";
import "./WhatsAppButton.css"; // Estilos separados

const WhatsAppButton = () => {
  const phoneNumber = "558488708809";
  const message = "Olá, gostaria de mais informações sobre seu atendimento.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
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
