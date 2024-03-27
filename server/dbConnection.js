// import { createClient } from "redis";

// export async function connectToRedis() {
//   const client = createClient();

//   // Return a promise that resolves when the client is connected
//   return new Promise((resolve, reject) => {
//     client.on("connect", () => {
//       console.log("Connected to Redis");
//       resolve(client); // Resolve the promise with the client object
//     });

//     client.on("error", (err) => {
//       console.error("Error connecting to Redis:", err);
//       reject(err); // Reject the promise with the error
//     });
//   });
// }

// connectToRedis();
