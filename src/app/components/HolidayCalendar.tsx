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
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch holidays");
        return res.json();
      })
      .then((data) => {
        const calendarEvents: HolidayEvent[] = data.map((h: any) => {
          let date = "";
          if (h.recurring && h.month && h.day) {
            const d = new Date(year, h.month - 1, h.day, 12);
            date = d.toISOString().split("T")[0];
          } else if (h.date) {
            const d = new Date(h.date);
            date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12)
              .toISOString()
              .split("T")[0];
          } else {
            date = `${year}-01-01`;
          }
          return {
            title: h.name,
            start: date,
            description: h.description ?? h.notes ?? "",
            type: h.type ?? "",
          };
        });
        setEvents(calendarEvents);
      })
      .catch((err) => console.error("Holiday fetch error:", err));
  }, [year]);

  const handleEventClick = (info: EventClickArg) => {
    const description = info.event.extendedProps.description;
    const type = info.event.extendedProps.type;
    alert(
      `${info.event.title}\n${description ? description + "\n" : ""}${
        type ? "Type: " + type : ""
      }`
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          🎉 Festivals & Holidays
        </h2>

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

        <div className="bg-white shadow-lg rounded-lg p-4">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick}
            height="auto"
          />
        </div>
      </div>
    </section>
  );
}
