import { Div } from "./div";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import {
  AddIcon,
  ChatIcon,
  UnlockIcon,
  CheckCircleIcon,
  DragHandleIcon,
} from "@chakra-ui/icons";
import "./sidebar.css";
import {CardDetails} from "./card"

export const Drawer = () => {
  return (
    <Div>
      <div
        style={{
          width: "80px",
          height: "400px",
          boxShadow: "rgba(105, 99, 99, 0.15) 1.95px 3px 2.6px",
          textAlign: "center",
          marginTop: "5%",
         
        
        }}
      >
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <div className="main_four_icon">
          <div className="four_icon">
            <CheckCircleIcon />
          </div>
          <div className="four_icon">
            <DragHandleIcon />
          </div>
          <div className="four_icon">
            <UnlockIcon />
          </div>
          <div className="four_icon">
            {" "}
            <ChatIcon />
          </div>
        </div>
        <div className="main_four_icon">
          <AddIcon />
        </div>
      </div>
      <div>
        <CardDetails/>
      </div>
    </Div>
  );
};
