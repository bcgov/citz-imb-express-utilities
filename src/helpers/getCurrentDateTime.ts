import type { GetCurrentDateTime, PacificTimeZone, UTCComponents } from '../types';

// Get current UTC date and time components
const getCurrentUTCComponents = (): UTCComponents => {
  const now = new Date();
  return {
    utcYear: now.getUTCFullYear(),
    utcMonth: now.getUTCMonth(), // getUTCMonth() is zero-indexed
    utcDate: now.getUTCDate(),
    utcHours: now.getUTCHours(),
    utcMinutes: now.getUTCMinutes(),
    utcSeconds: now.getUTCSeconds(),
  };
};

// Format date
const formatDate = (year: number, month: number, date: number): string => {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
};

// Format time
const formatTime = (hours: number, minutes: number, seconds: number): string => {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

// Determine if it's daylight saving time (DST)
const isDaylightSavingTime = (month: number): boolean => {
  return month > 2 && month < 11; // Simplified DST check, usually from March to November
};

// Calculate Pacific time components
const getPacificTimeComponents = (
  utcHours: number,
  utcDate: number,
  utcMonth: number,
  utcYear: number,
  isDST: boolean,
): {
  pacificHours: number;
  pacificDate: number;
  pacificMonth: number;
  pacificYear: number;
  pacificTimeZone: PacificTimeZone;
} => {
  let pacificHours = utcHours - 8; // Standard Time offset for Pacific (PST)

  if (isDST) pacificHours += 1;

  const pacificTimeZone: PacificTimeZone = isDST ? 'PDT' : 'PST';

  let pacificDate = utcDate;
  let pacificMonth = utcMonth;
  let pacificYear = utcYear;
  if (pacificHours < 0) {
    pacificHours += 24;
    pacificDate -= 1;
    if (pacificDate < 1) {
      pacificMonth -= 1;
      if (pacificMonth < 0) {
        pacificMonth = 11; // December of the previous year
        pacificYear -= 1;
      }
      pacificDate = new Date(pacificYear, pacificMonth + 1, 0).getDate(); // Last day of the previous month
    }
  }

  return { pacificHours, pacificDate, pacificMonth, pacificYear, pacificTimeZone };
};

export const getCurrentDateTime = (): GetCurrentDateTime => {
  const { utcYear, utcMonth, utcDate, utcHours, utcMinutes, utcSeconds } =
    getCurrentUTCComponents();

  const formattedDateUTC = formatDate(utcYear, utcMonth, utcDate);
  const formattedTimeUTC = formatTime(utcHours, utcMinutes, utcSeconds);

  const isDST = isDaylightSavingTime(utcMonth);
  const { pacificHours, pacificDate, pacificMonth, pacificYear, pacificTimeZone } =
    getPacificTimeComponents(utcHours, utcDate, utcMonth, utcYear, isDST);

  const formattedDatePacific = formatDate(pacificYear, pacificMonth, pacificDate);
  const formattedTimePacific = formatTime(pacificHours, utcMinutes, utcSeconds);

  return {
    formattedDateUTC,
    formattedTimeUTC,
    formattedDatePacific,
    formattedTimePacific,
    pacificTimeZone,
  };
};
