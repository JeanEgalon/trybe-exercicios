const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMass = (value: number, baseUnit: string, conversionUnit: string): number => {
  const fromIndex = massUnits.indexOf(baseUnit);
  const toIndex = massUnits.indexOf(conversionUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(100, exponent);
}