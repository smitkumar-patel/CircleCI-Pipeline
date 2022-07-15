import "dotenv/config";

import { data } from "./mock-data/mock-data.js";

const NON_SECRET_VAR = process.env.NON_SECRET_VAR;

console.log(data);

console.log(NON_SECRET_VAR);

console.log("CHECK");
