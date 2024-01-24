import React, { useEffect, useState } from "react";
import Note from "./Note";
import "../note.css";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";

function Notes(props) {
  const [item, setItem] = useState("");
  const [text, settext] = useState("");
  const [note, setNote] = useState([]);

  const textHandler = (e) => {
    setItem(e.target.value);
  };

  const saveHandler = () => {
    setNote((prevState) => [...prevState, { id: uuid(), text: item }]);
    setItem("");
  };

  const deleteHandler = (id) => {
    const filteredNote = note.filter((n) => n.id !== id);
    setNote(filteredNote);
  };

  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(note));
  }, [note]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('Notes'));
    if(getData) {
        setNote(getData);
    }
  }, [])

  return (
    <div className="notes">
      <section id="filters">
        <label htmlFor="item" className="filter_item">
          {" "}
          Filter items{" "}
        </label>
        <select
          id="item"
          value={text}
          onChange={(e) => settext(e.target.value)}
        >
          <option value=""> All Items </option>
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
        </select>
      </section>
      <div className="notes">
        {note.map((n) => (
          <Note key={n.id} id={n.id} text={n.text} deleteNote={deleteHandler} />
        ))}{" "}
      </div>
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        text={item}
      />
    </div>
  );
}

export default Notes;
