"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";

interface HolidayEvent {
  title: string;
  start: string;
  description?: string;
  type?: string;
}

export default function HolidayCalendar() {
  const [events, setEvents] = useState<HolidayEvent[]>([]);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    fetch(`http://localhost:5000/api/holidays`)
      .then((res) => res.json())
      .then((data) => {
        // If the backend sends { holidays: [...] } use that,
        // otherwise assume data itself is the array.
        const holidayList = Array.isArray(data) ? data : data.holidays;

        const calendarEvents: HolidayEvent[] = holidayList.map((h: any) => {
          let date = "";

          if (h.recurring && h.month && h.day) {
            const d = new Date(year, h.month - 1, h.day, 12); // Set to noon
            date = d.toISOString().split("T")[0];
          } else if (!h.recurring && h.date) {
            const localDate = new Date(h.date).toLocaleString(); // Converts to local time
            date = new Date(localDate).toISOString().split("T")[0]; // Convert back to ISO for calendar
          } else {
            date = `${year}-01-01`;
          }

          return {
            title: h.name,
            start: date,
            description:
              h.description ?? (h.notes ? `Approximate / manual update needed: ${h.notes}` : ""),
            type: h.type,
          };
        });

        setEvents(calendarEvents);
      })
      .catch((err) => console.error("Failed to fetch holidays:", err));
  }, [year]);

  const handleEventClick = (info: EventClickArg) => {
    const description = info.event.extendedProps.description as string | undefined;
    const type = info.event.extendedProps.type as string | undefined;

    alert(
      `${info.event.title}\n` +
        (description ? `${description}\n` : "") +
        (type ? `Type: ${type}` : "")
    );
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Festivals & Holidays</h1>

      {/* Year selector */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setYear((prev) => prev - 1)}
          className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
        >
          Previous
        </button>
        <div className="bg-gray-100 px-4 py-1">{year}</div>
        <button
          onClick={() => setYear((prev) => prev + 1)}
          className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
        >
          Next
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-2">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
          height="auto"
        />
      </div>
    </div>
  );
}