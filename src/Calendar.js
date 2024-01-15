//別ファイル（これ）にしたらエラー出た。→App.jsに直接組み込んだ方は出せた。

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    );
  }
}
