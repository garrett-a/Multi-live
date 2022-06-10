// import * as React from "react";
// import { useEffect, useState } from "react";

// export default function FreeSolo() {
//   const [streams, setStreams] = useState([]);

//   useEffect(() => {
//     const fetchStreams = async () => {
//       const response = await fetch("https://api.twitch.tv/helix/streams", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
//           "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
//           "Content-Type": "application/json",
//         },
//       });
//       const responseData = await response.json();
//       console.log(responseData);
//       const streamData = [];

//       setStreams(responseData);
//       console.log();
//     };

//     fetchStreams();
//   }, []);

//   return (

//   );
// }
