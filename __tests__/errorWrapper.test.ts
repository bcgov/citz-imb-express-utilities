import { Request, Response, NextFunction } from 'express';
import { HttpError } from '@/classes';
import { HTTP_STATUS_CODES } from '@/constants';
import { errorWrapper } from '@/errorWrapper';

// Test suite for the errorWrapper function
describe('errorWrapper', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let mockHandler: jest.Mock;

  // Set up mock objects before each test
  beforeEach(() => {
    mockRequest = {
      method: 'GET',
      originalUrl: '/test',
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
    mockHandler = jest.fn();
  });

  // Test case: Ensure the provided handler is called
  it('should call the provided handler', async () => {
    await errorWrapper(mockHandler)(mockRequest as Request, mockResponse as Response, mockNext);
    expect(mockHandler).toHaveBeenCalled();
  });

  // Test case: Ensure HttpError instances are caught and handled properly
  it('should catch and handle HttpError instances', async () => {
    const error = new HttpError(HTTP_STATUS_CODES.BAD_REQUEST, 'Custom error message');
    mockHandler.mockRejectedValueOnce(error);

    await errorWrapper(mockHandler)(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(HTTP_STATUS_CODES.BAD_REQUEST);
    expect(mockResponse.json).toHaveBeenCalledWith({
      method: mockRequest.method,
      originalUrl: mockRequest.originalUrl,
      message: 'Custom error message',
    });
  });

  // Test case: Ensure other Error instances are caught and handled properly
  it('should catch and handle other Error instances', async () => {
    const error = new Error('Generic error');
    mockHandler.mockRejectedValueOnce(error);

    await errorWrapper(mockHandler)(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
    expect(mockResponse.json).toHaveBeenCalledWith({
      method: mockRequest.method,
      originalUrl: mockRequest.originalUrl,
      message: 'Generic error',
    });
  });

  // Test case: Ensure custom log function is called if provided
  it('should call custom log function if provided', async () => {
    const error = new HttpError(HTTP_STATUS_CODES.BAD_REQUEST, 'Custom error message');
    mockHandler.mockRejectedValueOnce(error);

    const customLogFunction = jest.fn();
    const options = { customLogFunction };

    await errorWrapper(mockHandler, options)(
      mockRequest as Request,
      mockResponse as Response,
      mockNext,
    );

    expect(customLogFunction).toHaveBeenCalledWith({
      method: mockRequest.method,
      originalUrl: mockRequest.originalUrl,
      statusCode: HTTP_STATUS_CODES.BAD_REQUEST,
      message: 'Custom error message',
    });
  });

  // Test case: Ensure custom JSON response is used if provided
  it('should use custom JSON response if provided', async () => {
    const error = new HttpError(HTTP_STATUS_CODES.BAD_REQUEST, 'Custom error message');
    mockHandler.mockRejectedValueOnce(error);

    const customJsonResponse = jest.fn().mockReturnValue({
      customKey: 'customValue',
    });
    const options = { customJsonResponse };

    await errorWrapper(mockHandler, options)(
      mockRequest as Request,
      mockResponse as Response,
      mockNext,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(HTTP_STATUS_CODES.BAD_REQUEST);
    expect(mockResponse.json).toHaveBeenCalledWith({
      customKey: 'customValue',
    });
  });
});
