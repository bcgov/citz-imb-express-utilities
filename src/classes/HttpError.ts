import { HttpStatusCode } from 'src/constants';

export class HttpError extends Error {
  statusCode: HttpStatusCode | number;
  constructor(statusCode: HttpStatusCode | number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
