import { ANSI_CODES } from './constants';
import { getCurrentDateTime } from './helpers';

const { FOREGROUND, FORMATTING } = ANSI_CODES;
const { NODE_ENV } = process.env;
const NODE_VERSION = process.version;
const MEMORY_USAGE = process.memoryUsage();
const CPU_USAGE = process.cpuUsage();

const formatBytes = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;
const formatCPUUsage = (microseconds: number) => `${(microseconds / 1000000).toFixed(2)} seconds`;

export const serverStartupLogs = (port?: number | string) => {
  // Server startup message
  if (port) {
    console.info(
      `${FOREGROUND.LIGHT_BLUE}Express Server started on port ${FORMATTING.RESET}${port}${FOREGROUND.LIGHT_BLUE}${FORMATTING.RESET}.`,
    );
  } else {
    console.info(`${FOREGROUND.LIGHT_BLUE}Express Server started${FORMATTING.RESET}.`);
  }

  // Node version
  console.info(
    `${FOREGROUND.YELLOW}[NODE]${FORMATTING.RESET} Current version of node.js: ${NODE_VERSION}`,
  );

  // Node env
  console.info(
    `${FOREGROUND.YELLOW}[NODE]${FORMATTING.RESET} Current NODE_ENV environment: ${NODE_ENV}`,
  );

  // Memory usage
  console.info(`${FOREGROUND.YELLOW}[MEMORY]${FORMATTING.RESET} Startup memory usage:`);
  console.log(`  RSS: ${formatBytes(MEMORY_USAGE.rss)}`);
  console.log(`  Heap Total: ${formatBytes(MEMORY_USAGE.heapTotal)}`);
  console.log(`  Heap Used: ${formatBytes(MEMORY_USAGE.heapUsed)}`);

  // CPU usage
  console.info(`${FOREGROUND.YELLOW}[CPU]${FORMATTING.RESET} Startup cpu usage:`);
  console.log(`  User: ${formatCPUUsage(CPU_USAGE.user)}`);
  console.log(`  System: ${formatCPUUsage(CPU_USAGE.system)}`);

  // UTC Date and time
  console.info(
    `${FOREGROUND.YELLOW}[UTC]${FORMATTING.RESET} Current date and time: ${getCurrentDateTime().formattedDateUTC}, ${getCurrentDateTime().formattedTimeUTC}`,
  );

  // PT Date and time
  console.info(
    `${FOREGROUND.YELLOW}[${getCurrentDateTime().pacificTimeZone}]${FORMATTING.RESET} Current date and time: ${getCurrentDateTime().formattedDatePacific}, ${getCurrentDateTime().formattedTimePacific}`,
  );
};
