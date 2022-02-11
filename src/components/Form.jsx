import { Paper, TextField } from "@mui/material"
import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Form({addTodo}) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        const todoObj = { text: text, id: id };
        setId(id + 1);
        addTodo(todoObj);
        document.getElementById("standard-basic").value = null;
    };

    return (
        <div>
            <Paper style={{ padding: "1em" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <TextField id="standard-basic" label="Tarefa" variant="standard" onChange={(e) => setText(e.target.value)} fullWidth />
                    <AddCircleOutlineIcon onClick={ () => todoCreate(text)} style={{ marginTop: "1em", color: "#4169e1", cursor: "pointer" }} />
                </div>
            </Paper>
        </div>
    );
}