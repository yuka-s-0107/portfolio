import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from "@fullcalendar/list";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { v4 as uuidv4 } from "uuid";

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
  const [isEdit, setIsEdit] = React.useState(false); //編集か否か
  const [id, setId] = React.useState("");

  //新規登録画面
  const handleOpen = (arg) => {
    setDataStr(arg.dateStr);
    setIsEdit(false);
    setOpen(true);
  };

  const handleClose = () => {
    setEvent("");
    setOpen(false);
  }; //外側を押したらmodalを閉じる

  const [event, setEvent] = useState(""); //入力値（event）
  const [eventList, setEventList] = useState([]); //予定リスト（eventList）

  const handleChangeEvent = (e) => {
    setEvent(e.target.value);
  };

  const handleDateClick = () => {
    if (isEdit) {
      console.log("id:", id);
      setEventList((list) =>
        list.map((e) => (e.id === id ? { ...e, title: event } : e))
      );
    } else {
      setEventList((list) => [
        ...list,
        { id: uuidv4(), title: event, date: `${dataStr}` },
      ]);
    }

    setEvent(""); //textareaを空にする
    setOpen(false); //modalを閉じる
  };

  //編集画面
  const handleEventClick = (info) => {
    console.log(info.event.title);
    console.log(info.event.date);
    console.log(info.event.id);

    setEvent(info.event.title);
    setId(info.event.id);
    setIsEdit(true);
    setOpen(true);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listWeek",
        }}
        initialView="dayGridMonth"
        dateClick={handleOpen}
        events={eventList}
        eventClick={handleEventClick}
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

          <Textarea minRows={2} value={event} onChange={handleChangeEvent} />

          <div>
            <Button variant="text" type="button" onClick={handleDateClick}>
              save
            </Button>

            {/* <Stack direction="row" spacing={1}> */}

            <IconButton>
              <DeleteIcon />
            </IconButton>

            {/* </Stack> */}
          </div>
        </Box>
      </Modal>
    </>
  );
}
