import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { history } from "../../../../history";
import { ReactComponent as AddFile } from "../../../../assets/icons/chat/add-file.svg";
import { ReactComponent as Back } from "../../../../assets/icons/chat/back.svg";
import { ReactComponent as Send } from "../../../../assets/icons/chat/send.svg";
import { ReactComponent as AddImage } from "../../../../assets/icons/chat/add-image.svg";
import { ReactComponent as SendFilled } from "../../../../assets/icons/chat/send-filled.svg";
import { ReactComponent as AddImageFilled } from "../../../../assets/icons/chat/add-image-filled.svg";
import "../../../../assets/css/chat.css";
import Message from "./Message";

const Chat = () => {
  const messeges = [
    {
      id: 1,
      type: "start",
      message: "Привет, как дела?",
      date: "15/05/1999",
    },
    {
      id: 2,
      type: "end",
      message: "Привет",
      date: "15/05/1999",
    },
    {
      id: 3,
      type: "end",
      message: "хорошо ты как?",
      date: "15/05/1999",
    },
    {
      id: 4,
      type: "start",
      message: "хорошо, спасибо",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message:
        "Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "end",
      message:
        "Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
    {
      id: 5,
      type: "start",
      message: "Иди нахуй!!!",
      date: "15/05/1999",
    },
  ];
  const { userID } = useParams();
  const messagesEndRef = React.createRef();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [drag, setDrag] = useState(false);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
    setScrolled(true);
  }, []);
  return (
    <div className="chat-body d-flex flex-column justify-content-between br-3">
      <div className="chat-info flex-column border-bottom">
        <div className="chat-info-username d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Back
              className="chat__icon pointer"
              onClick={() => history.push("/orders")}
              title="Назад"
            />
            <img
              src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
              alt="Adil Kairolla"
              className="chat-avatar br-3"
            />
            <span className="ml-2">Adil Kairolla</span>
          </div>
          <div className="text-muted">в сети</div>
        </div>
      </div>
      {drag ? (
        <div
          className="chat-message-drag-content"
          onDragLeave={() => setDrag(false)}
        >
          <AddFile className="child" />
          <div className="child">lol</div>
        </div>
      ) : (
        <div
          className={`chat-message-content ${!scrolled && "invisible"}`}
          onDragOver={() => setDrag(true)}
        >
          {messeges.map((message) => (
            <Message message={message} />
          ))}
          <div style={{ float: "left", clear: "both" }} ref={messagesEndRef} />
        </div>
      )}

      <div className="chat-send-message border-top">
        <div className="btn" onClick={() => console.log(messagesEndRef)}>
          <div
            onMouseEnter={() => setActive("add-image")}
            onMouseLeave={() => setActive("")}
            title="Добавить изображение"
          >
            {active === "add-image" ? (
              <AddImageFilled
                className="chat__icon pointer"
                onClick={() => history.push("/orders")}
              />
            ) : (
              <AddImage
                className="chat__icon pointer"
                onClick={() => history.push("/orders")}
              />
            )}
          </div>
        </div>
        <input
          type="text"
          placeholder="Напишите новое сообщение"
          className="chat-send-message__input br-3"
        />
        <div className="btn" onClick={() => console.log(messagesEndRef)}>
          <div
            onMouseEnter={() => setActive("send")}
            onMouseLeave={() => setActive("")}
            title="Отправить сообщение"
          >
            {active === "send" ? (
              <SendFilled
                className="chat__icon pointer"
                onClick={() => history.push("/orders")}
              />
            ) : (
              <Send
                className="chat__icon pointer"
                onClick={() => history.push("/orders")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
