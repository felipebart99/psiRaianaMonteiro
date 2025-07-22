const phoneNumber = "558488708809";
const message = "Olá, gostaria de mais informações sobre seu atendimento.";
const encodedMessage = encodeURIComponent(message);

export const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
