import React from "react";

const ProfileDrawer = (props) => {
  return (
    <div
      className={`modal fade`}
      style={{
        display: `${props.value ? "block" : "none"}`,
        backgroundColor: `${props.value ?? "rgba(0,0,0,0.5)"}`,
      }}
    >
      <div className="profileDrawer">
        <button></button>
        <div>
          <img
            src=""
            alt="ProfilePicture"
            className="profilePicture"
            height={200}
            width={200}
          />
        </div>
        <p className="h5">Unish Rajkarnikar</p>
      </div>

      {/* <div
            className={modal fade ${modelShow ?? 'show'}}
            style={{
                display: ${modelShow ?? 'block'},
                backgroundColor: ${modelShow ?? 'rgba(0,0,0,0.5)'},
            }}
        > */}
    </div>
  );
};

export default ProfileDrawer;
