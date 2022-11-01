const capacitiesUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertCapacity = (value: number, baseUnit: string, conversionUnit: string): number => {
  const fromIndex = capacitiesUnits.indexOf(baseUnit);
  const toIndex = capacitiesUnits.indexOf(conversionUnit);
  const exponent = (toIndex - fromIndex);
  
  return value * Math.pow(10, exponent);

}