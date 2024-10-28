import { safePromise } from '@/safePromise';

describe('safePromise', () => {
  // Test case: should return Response object when promise resolves
  it('should return a Response object when the promise resolves', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      statusText: 'OK',
    } as unknown as Response;

    const [error, result] = await safePromise(Promise.resolve(mockResponse));

    expect(error).toBeNull();
    expect(result).toBe(mockResponse);
  });

  // Test case: should return error when promise rejects
  it('should return an error when the promise is rejected', async () => {
    const mockError = new Error('Request failed');

    const [error, result] = await safePromise(Promise.reject(mockError));

    expect(error).toBe(mockError);
    expect(result).toBeNull();
  });

  // Test case: should return a valid Response object with correct status
  it('should return a Response object with correct status and statusText', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      statusText: 'OK',
    } as unknown as Response;

    const [error, result] = await safePromise(Promise.resolve(mockResponse));

    expect(error).toBeNull();
    expect(result?.status).toBe(200);
    expect(result?.statusText).toBe('OK');
  });

  // Test case: should handle network errors or unexpected failures
  it('should handle network errors', async () => {
    const networkError = new Error('Network Error');
    const mockRejectedPromise = Promise.reject(networkError);

    const [error, result] = await safePromise(mockRejectedPromise);

    expect(error).toEqual(networkError);
    expect(result).toBeNull();
  });

  // Test case: should handle a non-OK Response status
  it('should return a Response object even when status is not OK', async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    } as unknown as Response;

    const [error, result] = await safePromise(Promise.resolve(mockResponse));

    expect(error).toBeNull();
    expect(result?.ok).toBe(false);
    expect(result?.status).toBe(500);
    expect(result?.statusText).toBe('Internal Server Error');
  });
});
