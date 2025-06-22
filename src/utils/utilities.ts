export function customFormatNumber(input: number): string {
  // Ensure two decimal places
  const fixed = input.toFixed(2); // e.g., "117677.00"
  const [integerPart, decimalPart] = fixed.split('.');

  // Start splitting from the right, into chunks of 3, 2, and remaining
  const len = integerPart.length;

  let part3 = '',
    part2 = '',
    part1 = '';

  if (len > 5) {
    part3 = integerPart.slice(-3); // last 3 digits
    part2 = integerPart.slice(-5, -3); // next 2 digits
    part1 = integerPart.slice(0, len - 5); // rest
  } else if (len > 3) {
    part3 = integerPart.slice(-3);
    part2 = integerPart.slice(0, len - 3);
  } else {
    part3 = integerPart;
  }

  // Build the formatted string
  const parts = [part1, part2, part3].filter(Boolean);
  return `${parts.join(' ')}.${decimalPart}`;
}
