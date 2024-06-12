import { HTTP_STATUS_CODES } from '@/constants';

// Test suite for the HTTP_STATUS_CODES enum
describe('HTTP_STATUS_CODES', () => {
  // Test case: Verify that each status code is defined and has the correct value
  it('should have the correct HTTP status codes', () => {
    expect(HTTP_STATUS_CODES.OK).toBe(200);
    expect(HTTP_STATUS_CODES.CREATED).toBe(201);
    expect(HTTP_STATUS_CODES.ACCEPTED).toBe(202);
    expect(HTTP_STATUS_CODES.NO_CONTENT).toBe(204);
    expect(HTTP_STATUS_CODES.RESET_CONTENT).toBe(205);
    expect(HTTP_STATUS_CODES.MOVED_PERMANENTLY).toBe(301);
    expect(HTTP_STATUS_CODES.FOUND).toBe(302);
    expect(HTTP_STATUS_CODES.SEE_OTHER).toBe(303);
    expect(HTTP_STATUS_CODES.NOT_MODIFIED).toBe(304);
    expect(HTTP_STATUS_CODES.TEMPORARY_REDIRECT).toBe(307);
    expect(HTTP_STATUS_CODES.PERMANENT_REDIRECT).toBe(308);
    expect(HTTP_STATUS_CODES.BAD_REQUEST).toBe(400);
    expect(HTTP_STATUS_CODES.UNAUTHORIZED).toBe(401);
    expect(HTTP_STATUS_CODES.PAYMENT_REQUIRED).toBe(402);
    expect(HTTP_STATUS_CODES.FORBIDDEN).toBe(403);
    expect(HTTP_STATUS_CODES.NOT_FOUND).toBe(404);
    expect(HTTP_STATUS_CODES.METHOD_NOT_ALLOWED).toBe(405);
    expect(HTTP_STATUS_CODES.CONFLICT).toBe(409);
    expect(HTTP_STATUS_CODES.GONE).toBe(410);
    expect(HTTP_STATUS_CODES.LENGTH_REQUIRED).toBe(411);
    expect(HTTP_STATUS_CODES.PRECONDITION_FAILED).toBe(412);
    expect(HTTP_STATUS_CODES.PAYLOAD_TOO_LARGE).toBe(413);
    expect(HTTP_STATUS_CODES.URI_TOO_LONG).toBe(414);
    expect(HTTP_STATUS_CODES.UNSUPPORTED_MEDIA_TYPE).toBe(415);
    expect(HTTP_STATUS_CODES.IM_A_TEAPOT).toBe(418);
    expect(HTTP_STATUS_CODES.MISDIRECTED_REQUEST).toBe(421);
    expect(HTTP_STATUS_CODES.TOO_MANY_REQUESTS).toBe(429);
    expect(HTTP_STATUS_CODES.REQUEST_HEADER_FIELDS_TOO_LARGE).toBe(431);
    expect(HTTP_STATUS_CODES.UNAVAILABLE_FOR_LEGAL_REASONS).toBe(451);
    expect(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).toBe(500);
    expect(HTTP_STATUS_CODES.NOT_IMPLEMENTED).toBe(501);
    expect(HTTP_STATUS_CODES.BAD_GATEWAY).toBe(502);
    expect(HTTP_STATUS_CODES.SERVICE_UNAVAIBLABLE).toBe(503);
    expect(HTTP_STATUS_CODES.GATEWAY_TIMEOUT).toBe(504);
    expect(HTTP_STATUS_CODES.NOT_EXTENDED).toBe(510);
  });
});
