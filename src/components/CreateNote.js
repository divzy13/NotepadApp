import React from "react";

function CreateNote({textHandler, saveHandler, text}) {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."
        maxLength="100"
        value={text}
        onChange={textHandler}
      ></textarea>
      <div className="note__footer">
        <span className="label"> left</span>
        <button className="note__save" onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}

export default CreateNote;
