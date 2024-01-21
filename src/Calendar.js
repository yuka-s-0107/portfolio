import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

let maxId = 0;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Calendar() {
  const [open, setOpen] = React.useState(false); //日付欄を開ける（open）
  const [dataStr, setDataStr] = React.useState(""); //日付の取得（dataStr）

  const handleOpen = (arg) => {
    setDataStr(arg.dateStr);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const [event, setEvent] = useState(""); //入力値（event）
  const [eventList, setEventList] = useState([]); //予定リスト（eventList）

  const handleChangeEvent = (e) => {
    setEvent(e.target.value);
  };

  const handleDateClick = () => {
    setEventList((list) => [
      ...list,
      { id: ++maxId, title: event, date: `${dataStr}` },
    ]);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleOpen}
        events={eventList}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <TextField
            id="standard-basic"
            label="schedule"
            variant="standard"
            input
            type="text"
            value={event}
            onChange={handleChangeEvent}
          />
          <div>
            <Button variant="text" type="button" onClick={handleDateClick}>
              save
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
