import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
// -----------------------------------------------------------------------------
import { routes } from './routes';
var cors = require('cors')
// -----------------------------------------------------------------------------

const app = express();
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

app.listen(3002, () => console.log("Server is running at port 3002."))