import React, { useEffect, useState } from "react";
import ContainerFluid from "../../components/ContainerFluid";
import { useSocket } from "../../store/socket";
import ChatList from "../../sections/Chat/ChatList";
import ChatBody from "../../sections/Chat/ChatBody";
import { useDispatch } from "react-redux";
import { useMedia } from "../../store/hooks/meida";

const Chat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "LIST_CHATS_DATA_CLEAR",
    });
  }, []);
  const [mobileActive, setMobileActive] = useState(true);
  const minWidth500 = useMedia("(min-width:500px)");
  const minHeight500 = useMedia("(min-height:500px)");

  return useSocket().store.connected ? (
    <ContainerFluid>
      <div className="d-flex h-100 rounded">
        {minWidth500 && minHeight500 ? (
          <>
            <ChatList />
            <ChatBody />
          </>
        ) : mobileActive ? (
          <ChatList setMobile={setMobileActive} />
        ) : (
          <ChatBody setMobile={setMobileActive} />
        )}
      </div>
    </ContainerFluid>
  ) : (
    <div className="text-white text-align-center m-20 font-size-24">
      Сервер временно не доступен
    </div>
  );
};

export default Chat;
