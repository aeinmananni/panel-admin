import  { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import fa from "date-fns/locale/fa";
import enUS from "date-fns/locale/en-US"; 
import "react-datepicker/dist/react-datepicker.css";

registerLocale("fa", fa);
registerLocale("en-US", enUS);

const MultiLanguageCalendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [locale, setLocale] = useState("fa");

  return (
    <div>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="fa">فارسی</option>
        <option value="en-US">انگلیسی</option>
      </select>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale={locale} 
      />
    </div>
  );
};

export default MultiLanguageCalendar;
