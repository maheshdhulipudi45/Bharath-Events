// import { MessageCircle } from "lucide-react";

// const WhatsappFloat = () => {

//   const phoneNumber = "919618678345"; // your WhatsApp number

//   const message = "Hello, I want to know about Bharath Tent House services.";

//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <a
//       href={whatsappURL}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
//     >
//       <MessageCircle size={28} />
//     </a>
//   );
// };

// export default WhatsappFloat;


import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {

  const phoneNumber = "919949708345";

  const message = "Hello, I want to know about Bharath Tent House services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappFloat;