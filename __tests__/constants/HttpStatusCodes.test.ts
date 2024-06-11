import { HTTP_STATUS_CODES } from '@/constants';

// Test suite for the HTTP_STATUS_CODES enum
describe('HTTP_STATUS_CODES', () => {
  // Test case: Verify that each status code is defined and has the correct value
  it('should have the correct HTTP status codes', () => {
    expect(HTTP_STATUS_CODES.OK).toBe(200);
    expect(HTTP_STATUS_CODES.CREATED).toBe(201);
    expect(HTTP_STATUS_CODES.ACCEPTED).toBe(202);
    expect(HTTP_STATUS_CODES.NO_CONTENT).toBe(204);
    expect(HTTP_STATUS_CODES.NOT_MODIFIED).toBe(304);
    expect(HTTP_STATUS_CODES.BAD_REQUEST).toBe(400);
    expect(HTTP_STATUS_CODES.UNAUTHORIZED).toBe(401);
    expect(HTTP_STATUS_CODES.FORBIDDEN).toBe(403);
    expect(HTTP_STATUS_CODES.NOT_FOUND).toBe(404);
    expect(HTTP_STATUS_CODES.IM_A_TEAPOT).toBe(418);
    expect(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).toBe(500);
    expect(HTTP_STATUS_CODES.NOT_IMPLEMENTED).toBe(501);
    expect(HTTP_STATUS_CODES.SERVICE_UNAVAIBLABLE).toBe(503);
  });
});
