import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'carrierCodes.json');

export const readCarrierCodes = (): string[] => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(data);
  return parsed || {};
};

// Write new codes to the file
export const writeCarrierCodes = (newCodes: { [key: string]: string }): void => {
  const existingCodes = readCarrierCodes();
  const updatedCodes = { ...existingCodes, ...newCodes };
  fs.writeFileSync(filePath, JSON.stringify(updatedCodes, null, 2));
};
