import React, { useEffect, useState } from "react";
import Note from "./Note";
import "../note.css";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import {getTenRandomCatImages} from "../services/cat";

function Notes(props) {
  const [item, setItem] = useState("");
  const [text, settext] = useState("");
  const [note, setNote] = useState([]);
  const [cat, setCat] = useState([]);

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

  // useEffect(() => {
  //   getTenRandomCatImages().then((response) => setCat(response));
  // },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTenRandomCatImages();
        setCat(result);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchData();
  }, []);


  function renderCat(c) {
    return (
      <div key={c.id}>
        <img
          key={c.id}
          src={c.url}
          alt={`Cat ${c.id}`}
          style={{ width: `${c.width}px`, height: `${c.height}px` }}
        />
          <h3>Width {c.width}</h3>
          <h3>Height {c.height}</h3>
      </div>
    );
  };

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
      <section>
        {cat && Array.isArray(cat) && cat.length > 0 && cat.map(renderCat)}
      </section>
    </div>
  );
}

export default Notes;
