export function getDayOfMonth(today: Date, targetIndex: number) {
  const currentDayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
  const diff = targetIndex - currentDayIndex;
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + diff);
  return targetDate.getDate();
}
