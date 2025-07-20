export function parseEventDateTime(date: string, time: string): string {
  try {
    //console.log("⏰ Parsing DateTime:", { date, time });

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) throw new Error("❌ Invalid date string");

    const [month, day, year] = [
      parsedDate.getMonth(),
      parsedDate.getDate(),
      parsedDate.getFullYear(),
    ];

    // Handle vague time like "All Day"
    if (!time || time.toLowerCase().includes("continuous") || time.toLowerCase().includes("available")) {
      return new Date(year, month, day, 9, 0).toISOString(); // 9 AM local time
    }

    const timeMatch = time.split(" ")[0]; // "9:00"
    const meridian = time.split(" ")[1]?.toUpperCase();

    let [hour, minute] = timeMatch.split(":").map(Number);
    if (meridian === "PM" && hour !== 12) hour += 12;
    if (meridian === "AM" && hour === 12) hour = 0;

    const localDateTime = new Date(year, month, day, hour, minute); // No 'Z'!
    if (isNaN(localDateTime.getTime())) throw new Error("❌ Invalid datetime");

    return localDateTime.toISOString();
  } catch (error) {
    //console.error("🔥 Date parse failed, defaulting to 9AM local time", error);
    const fallback = new Date();
    fallback.setHours(9, 0, 0, 0);
    return fallback.toISOString();
  }
}
