import React from "react";
import ProfileSocial from "./ProfileSocial";

const ProfileInfo = (props) => {
  const { profile } = props;
  return (
    <div className="p-10 d-flex">
      <div>
        <img
          width={120}
          src="https://sun9-17.userapi.com/c846322/v846322123/1ba0c6/VM4FMkSQUz4.jpg?ava=1"
          alt="Adil genius"
          className="rounded"
        />
      </div>
      <div className="d-flex pl-15 flex-column w-100">
        <div className="d-flex justify-content-between">
          <div className="font-size-24">
            {profile?.first_name} {profile?.last_name}
          </div>
          <div className="pr-10 text-muted">
            {profile?.is_active ? "В сети" : "Не в сети"}
          </div>
        </div>
        <div>{profile?.profile.bio}</div>
        <ProfileSocial />
      </div>
    </div>
  );
};

export default ProfileInfo;
