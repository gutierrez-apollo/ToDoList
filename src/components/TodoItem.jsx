import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Paper } from '@mui/material';

export default function TodoItem({ todo, deleteTodo }) {

  return (
    <Paper style={{ padding: "0.5em 0em" }}>

    <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
        <HighlightOffIcon style={{ color: "red" }} />
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton role={undefined} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText primary={todo.text} />
    </ListItemButton>
    </ListItem>
  </Paper>
  );
}
