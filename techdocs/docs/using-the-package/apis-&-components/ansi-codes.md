# ANSI_CODES

The `ANSI_CODES` object holds variables for ANSI color codes and formatting. You can use these in your console log messages to add color.

!!! tip "Tip"
    Be sure to reset after each message using `ANSI_CODES.FORMATTING.RESET` so the following console logs don't inherit the color of your message.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { ANSI_CODES } from "@bcgov/citz-imb-express-utilities";

// CommonJS Syntax
const { ANSI_CODES } = require('@bcgov/citz-imb-express-utilities');
```

## Usage

A basic example of using the `ANSI_CODES` class.

```JavaScript
import { Request, Response } from 'express';
import { ANSI_CODES } from '@bcgov/citz-imb-express-utilities';

import { ENV } from '../../config';
const { ENVIRONMENT, DEBUG } = ENV;

export const Message = `${ANSI_CODES.FOREGROUND.RED}Warning!${ANSI_CODES.FORMATTING.RESET}`;
```

## PROPERTIES

An API reference for the parameters of the `ANSI_CODES` class.

<table>
  <!-- Table columns -->
  <thead>
    <tr>
      <th style="background: #6f19d9; color: white;">Name</th>
      <th style="background: #6f19d9; color: white;">Properties</th>
      <th style="background: #6f19d9; color: white;">Description</th>
    </tr>
  </thead>

  <!-- Table rows -->
  <tbody>
    <tr>
      <td>FOREGROUND</td>
      <td><code>{
    BLACK: '\x1b[30m',
    RED: '\x1b[31m',
    GREEN: '\x1b[32m',
    GOLD: '\x1b[33m',
    BLUE: '\x1b[34m',
    PURPLE: '\x1b[35m',
    CYAN: '\x1b[36m',
    WHITE: '\x1b[37m',
    GREY: '\x1b[1m\x1b[30m',
    PINK: '\x1b[1m\x1b[31m',
    LIME: '\x1b[1m\x1b[32m',
    YELLOW: '\x1b[1m\x1b[33m',
    LIGHT_BLUE: '\x1b[1m\x1b[34m',
    MAGENTA: '\x1b[1m\x1b[35m',
    AQUA: '\x1b[1m\x1b[36m',
  }</code></td>
      <td>Text color.</td>
    </tr>
    <tr>
      <td>BACKGROUND</td>
      <td><code>{
    BLACK: '\x1b[40m',
    RED: '\x1b[41m',
    GREEN: '\x1b[42m',
    GOLD: '\x1b[43m',
    BLUE: '\x1b[44m',
    PURPLE: '\x1b[45m',
    CYAN: '\x1b[46m',
    WHITE: '\x1b[47m',
    GREY: '\x1b[1m\x1b[40m',
    PINK: '\x1b[1m\x1b[41m',
    LIME: '\x1b[1m\x1b[42m',
    YELLOW: '\x1b[1m\x1b[43m',
    LIGHT_BLUE: '\x1b[1m\x1b[44m',
    MAGENTA: '\x1b[1m\x1b[45m',
    AQUA: '\x1b[1m\x1b[46m',
  }</code></td>
      <td>Text background color.</td>
    </tr>
    <tr>
      <td>FORMATTING</td>
      <td><code>{
    RESET: '\x1b[0m',
    BRIGHT: '\x1b[1m',
    DIM: '\x1b[2m',
    UNDERSCORE: '\x1b[4m',
    REVERSE: '\x1b[7m',
    ITALIC: '\x1b[3m',
    STRIKETHROUGH: '\x1b[9m',
  }</code></td>
      <td>Text formatting.</td>
    </tr>
  </tbody>
</table>

<!-- Link References -->
