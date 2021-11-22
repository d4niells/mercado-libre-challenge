import httpStatusCodes from 'http-status-codes';

export interface APIError {
  message: string;
  code: number;
  description?: string;
}

export interface APIErrorResponse extends Omit<APIError, 'codeAsString'> {
  error: string;
}

export default class ApiError {
  public static format(error: APIError): APIErrorResponse {
    return {
      code: error.code,
      message: error.message,
      error: httpStatusCodes.getStatusText(error.code),
      ...(error.description && { description: error.description }),
    };
  }
}
