import { safePromise } from '@/safePromise';

describe('safePromise', () => {
  // Test case: should return JSON data when response is valid JSON
  it('should return JSON data when response content-type is application/json', async () => {
    const mockJson = { key: 'value' };
    const mockResponse = {
      headers: {
        get: jest.fn(() => 'application/json'),
      },
      json: jest.fn().mockResolvedValue(mockJson),
    } as unknown as Response;

    const [error, result] = await safePromise<typeof mockJson>(Promise.resolve(mockResponse));
    
    expect(error).toBeNull();
    expect(result).toEqual(mockJson);
    expect(mockResponse.headers.get).toHaveBeenCalledWith('content-type');
    expect(mockResponse.json).toHaveBeenCalled();
  });

  // Test case: should return null when content-type is not application/json
  it('should return null when response content-type is not application/json', async () => {
    const mockResponse = {
      headers: {
        get: jest.fn(() => 'text/html'),
      },
      json: jest.fn(),
    } as unknown as Response;

    const [error, result] = await safePromise(Promise.resolve(mockResponse));

    expect(error).toBeNull();
    expect(result).toBeNull();
    expect(mockResponse.headers.get).toHaveBeenCalledWith('content-type');
    expect(mockResponse.json).not.toHaveBeenCalled();
  });

  // Test case: should return error when promise rejects
  it('should return error when the promise is rejected', async () => {
    const mockError = new Error('Something went wrong');
    const [error, result] = await safePromise(Promise.reject(mockError));

    expect(error).toBe(mockError);
    expect(result).toBeNull();
  });

  // Test case: should handle network errors or other unexpected failures
  it('should handle network errors', async () => {
    const networkError = new Error('Network Error');
    const mockRejectedPromise = Promise.reject(networkError);

    const [error, result] = await safePromise(mockRejectedPromise);

    expect(error).toEqual(networkError);
    expect(result).toBeNull();
  });
});
