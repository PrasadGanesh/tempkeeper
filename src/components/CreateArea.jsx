import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add'
import { Zoom } from "@material-ui/core";
import { Fab } from "@material-ui/core";

function CreateArea(props) {
  const [clicked, setClicked] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        
        {(clicked)?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        <textarea
          name="content"
          onClick={()=>{setClicked(true)}}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={(clicked)?"3":"1"}
        />
        <Zoom in={clicked}>

        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
