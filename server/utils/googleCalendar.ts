export function createGoogleCalendarLink({
  title,
  description,
  location = '',
  startDateTime,
  endDateTime,
}: {
  title: string;
  description: string;
  location?: string;
  startDateTime: string; // ISO format
  endDateTime: string;   // ISO format
}) {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: title,
    details: description,
    location,
    dates: `${formatDateTime(startDateTime)}/${formatDateTime(endDateTime)}`
  });

  return `${base}&${params.toString()}`;
}

function formatDateTime(date: string) {
  return new Date(date).toISOString().replace(/-|:|\.\d\d\d/g, "");
}
