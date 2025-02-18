import moment from "moment";
import "moment/locale/tr";

const dateFormatter = (timeMatch) => {
  let formattedTime;
  if (timeMatch) {
    const timeValue = parseInt(timeMatch[1], 10); // 4 gibi sayıyı al
    const timeUnit = timeMatch[2]; // hour, minute, day gibi birimi al

    // Şu anki zamandan belirtilen saat/dakika/gün kadar geri git
    let pastTime;
    if (timeUnit === "hour") {
      pastTime = moment().subtract(timeValue, "hours");
    } else if (timeUnit === "minute") {
      pastTime = moment().subtract(timeValue, "minutes");
    } else if (timeUnit === "day") {
      pastTime = moment().subtract(timeValue, "days");
    }

    // Türkçe olarak "4 saat önce", "3 gün önce" formatına çevirelim
    formattedTime = pastTime.locale("tr").fromNow();
  }

  return formattedTime;
};

export { dateFormatter };
