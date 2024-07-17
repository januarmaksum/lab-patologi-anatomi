"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/id";
dayjs.locale("id");

export default function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="flex justify-between fixed bottom-0 left-0 w-full bg-white border-t border-t-gray-300 px-10 py-1">
      <div>&copy; Instalasi SIMRS RSABHK - {dayjs().year()}</div>
      <div>
        {currentDateTime.format("dddd")},{" "}
        {currentDateTime.format("DD MMMM YYYY")},{" "}
        {currentDateTime.format("HH")}
        <span className="blinkColon">:</span>
        {currentDateTime.format("mm")}
      </div>
    </footer>
  );
}
