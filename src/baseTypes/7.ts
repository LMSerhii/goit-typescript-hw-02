/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum daysOfWeek {
  MONDEY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SAURDAY,
  SUNDAY,
}

function isWeekend(day: daysOfWeek): boolean {
  return day === daysOfWeek.SAURDAY || day === daysOfWeek.SUNDAY;
}
