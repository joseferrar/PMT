export function Datewish(date) {
  var hrs = date.getHours();

  if (hrs < 12) return "Good Morning";
  else if (hrs >= 12 && hrs <= 17) return "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) return "Good Evening";
}
