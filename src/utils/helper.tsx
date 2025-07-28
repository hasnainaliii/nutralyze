import RNFS from 'react-native-fs';

export function getDayOfMonth(today: Date, targetIndex: number) {
  const currentDayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
  const diff = targetIndex - currentDayIndex;
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + diff);
  return targetDate.getDate();
}

export async function convertImageToBase64(uri: string): Promise<string> {
  const filePath = uri.replace('file://', '');
  const base64 = await RNFS.readFile(filePath, 'base64');
  return base64;
}
