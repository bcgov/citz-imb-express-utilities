# Major Release 1.0.0

!!! info "Info"
    The Major Releases pages are here to describe what the major releases of this package are for, what they offer, their dependencies, and how to upgrade from the previous version.

Release 1.0.0 is the first stable release of the package. It provides utility functions for Express APIs, aimed at reducing code complexity, enhancing data integrity and security, and promoting consistency and scalability.

## Dependencies

- NodeJS 20
- Express 4

## Features

- Modules for health ([healthModule]) check and config ([configModule]) endpoints.
- [errorWrapper] for route handlers (controllers).
- Zod schema validation functions.
- Server startup information log function ([serverStartupLogs]).
- Standardized JSON response object ([getStandardResponse]).
- Sanitization function ([sanitize]) to scrub malicious code from input strings.
- [HttpError], can be thrown with message and HTTP status code.
- [HTTP_STATUS_CODES], enums for HTTP status codes.
- [ANSI_CODES] for console colors and formatting.

<!-- Link References -->
[healthModule]: ../../using-the-package/apis-&-components/modules/health
[configModule]: ../../using-the-package/apis-&-components/modules/config
[errorWrapper]: ../../using-the-package/apis-&-components/error-wrapper
[HttpError]: ../../using-the-package/apis-&-components/http-error
[getStandardResponse]: ../../using-the-package/apis-&-components/standard-response
[ANSI_CODES]: ../../using-the-package/apis-&-components/ansi-codes
[serverStartupLogs]: ../../using-the-package/apis-&-components/server-startup-logs
[HTTP_STATUS_CODES]: ../../using-the-package/apis-&-components/http-status-codes
