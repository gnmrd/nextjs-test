export default function formatDate(input: string) {
  const [year, month, day] = input.split('-');
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const monthName = monthNames[parseInt(month, 10) - 1];

  // Return the formatted date
  return `${monthName} ${day}, ${year}`;
}