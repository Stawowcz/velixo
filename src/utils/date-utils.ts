export class DateUtils {
  public static normalizeDate(value: string): string {
    const parts = value.split(".");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${parseInt(month)}/${parseInt(day)}/${year}`;
    }
    return value;
  }

  public static todayFormatted(format: "us" | "eu" = "us"): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    if (format === "eu") {
      return `${dd}.${mm}.${yyyy}`;
    }
    return `${mm}/${dd}/${yyyy}`;
  }
}
