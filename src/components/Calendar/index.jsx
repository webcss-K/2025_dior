import React from 'react';

// style
import Style from './index.module.scss';

// Calendar
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = (props) => {
const events = [
    {
      title: "도스튼 프로그램 0/12",
      start: "2025-04-03T04:00:00",
      end: "2025-04-06T05:00:00",
      className: "label-on",
    },
    {
      title: "부띠크 방문 0/12",
      start: "2025-04-03T05:00:00",
      end: "2025-04-03T06:00:00",
      className: "fullcalendar-custom-event-tasks",
    },
    {
      title: "CAFÉ DIOR 0/24",
      start: "2025-04-03T15:00:00",
      end: "2025-04-03T16:00:00",
      className: "fullcalendar-custom-event-reminders label-on",
    },
    {
      title: "CAFÉ DIOR 0/24",
      start: "2025-04-05T17:00:00",
      end: "2025-04-05T18:00:00",
      className: "fullcalendar-custom-event-reminders",
    },
    {
      title: "부띠크 방문 0/12",
      start: "2025-04-22T04:00:00",
      end: "2025-04-022T05:00:00",
      className: "fullcalendar-custom-event-tasks label-on",
    },
    {
      title: "CAFÉ DIOR 0/24",
      start: "2025-04-22T13:00:00",
      end: "2025-04-22T14:00:00",
      className: "fullcalendar-custom-event-reminders",
    },
  ];

  return (
    <>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </>
  )
}

export default Calendar;