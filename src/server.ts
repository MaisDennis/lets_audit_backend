import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import rateLimit from 'express-rate-limit'
// -----------------------------------------------------------------------------
import { routes } from './routes';
var cors = require('cors')
// -----------------------------------------------------------------------------

const app = express();

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 15 minutes
	max: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

app.use(cors())

app.use(express.json())

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error."
  })
})

app.listen(3333, () => console.log("Server is running at port 3333."))
// app.listen(3002, () => console.log("Server is running at port 3002."))