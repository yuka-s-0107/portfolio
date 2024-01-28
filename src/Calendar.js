import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import jaLocale from "@fullcalendar/core/locales/ja";
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

  const [event, setEvent] = useState("")(localStorage.getItem(id) || ""); //入力値（event）
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
    localStorage.setItem(id, event);
    setEvent(""); //textareaを空にする
    setOpen(false); //modalを閉じる
  };

  //編集
  const handleEventClick = (info) => {
    console.log(info.event.title);
    console.log(info.event.date);
    console.log(info.event.id);

    setEvent(info.event.title);
    setId(info.event.id);
    setIsEdit(true);
    setOpen(true);
  };

  //削除
  const handleRemove = () => {
    setEventList(eventList.filter((e) => e.id !== id));
    setEvent(""); //textareaを空にする
    setOpen(false); //modalを閉じる
  };

  useEffect(() => {
    const event = JSON.parse(localStorage.getItem("event"));
    if (event) {
      setEvent(event);
    }
  }, []);

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          locales={[jaLocale]}
          locale="ja"
        />
      </div>
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
          <Textarea minRows={2} value={event} onChange={handleChangeEvent} />

          <div>
            <Button variant="text" type="button" onClick={handleDateClick}>
              save
            </Button>

            <IconButton onClick={handleRemove}>
              <DeleteIcon />
            </IconButton>
          </div>
        </Box>
      </Modal>

      <div>{event}</div>
    </>
  );
}
