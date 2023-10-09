// const allowedOrigins = require('./allowedOrigins')

import allowedOrigins from "./allowedOrigins";
import { CorsOptions } from 'cors'
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // console.log("origin", origin);

    if (typeof origin === "undefined" || allowedOrigins.indexOf(origin) !== -1) {
      // Allow requests with undefined origin (e.g., same-origin requests) or if origin is in the allowed list.
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  // origin:["*"],
  optionsSuccessStatus: 200,
  // origin:(origi)
};

export default corsOptions;
