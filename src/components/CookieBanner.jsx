import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country !== "UA") {
          // Якщо користувач не з України
          setShowBanner(true);
        }
      })
      .catch(() => setShowBanner(true)); // Якщо API не працює, краще показати банер
  }, []);

  if (!showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton={false}
      buttonText="Прийняти"
      declineButtonText="Відхилити"
      cookieName="userConsent"
      style={{ background: "#222", color: "#fff" }}
      buttonStyle={{
        background: "#1769aa",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "4px",
      }}
      declineButtonStyle={{
        background: "#777",
        color: "#fff",
        fontSize: "14px",
      }}
      expires={150}
    >
      YouTube використовує cookies для забезпечення роботи відео. Перегляд відео
      означає вашу згоду на cookies.
    </CookieConsent>
  );
};

export default CookieBanner;

// import React, { useEffect, useState } from "react";

// const CookieBanner = () => {
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const response = await fetch("https://ipapi.co/json/");
//         const data = await response.json();
//         if (data.country !== "UA") {
//           setShowBanner(true);
//         }
//       } catch (error) {
//         console.error("Не вдалося отримати дані про країну", error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   if (!showBanner) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: 0,
//         left: 0,
//         width: "100%",
//         background: "#222",
//         color: "#fff",
//         padding: "10px",
//         textAlign: "center",
//       }}
//     >
//       <p>
//         Цей сайт використовує файли cookie для покращення користувацького
//         досвіду.
//       </p>
//       <button
//         onClick={() => setShowBanner(false)}
//         style={{
//           marginLeft: "10px",
//           padding: "5px 10px",
//           borderRadius: "4px",
//           background: "#1769aa",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Зрозуміло
//       </button>
//     </div>
//   );
// };

// export default CookieBanner;
