import { config } from "dotenv";
config();

export const start = async () => {
  console.log('start....');
}

console.log('process.env.ENV', process.env.ENV);

if (process.env.ENV === "production") {
  (async () => {
    await start();
  })();
}