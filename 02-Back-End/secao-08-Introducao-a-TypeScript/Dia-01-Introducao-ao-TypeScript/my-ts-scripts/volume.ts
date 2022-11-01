const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

const convertVol = (value: number, baseUnit: string, conversionUnit: string): number => {
  const fromIndex = massUnits.indexOf(baseUnit);
  const toIndex = massUnits.indexOf(conversionUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(1000, exponent);
}