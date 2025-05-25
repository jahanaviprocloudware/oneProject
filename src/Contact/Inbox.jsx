import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import { TextField } from "@mui/material"

export const TextCommentArea = () => {
  const [comment, setComment] = React.useState('');
  const [personName, setPersonName] = React.useState('');
  const onClick = (e) => {
    console.log('Button clicked',{name:personName,body:comment,avatar_url:'https://mui.com/static/images/avatar/1.jpg'});
    sessionStorage.setItem("comment", {name:personName,body:comment,avatar_url:'https://mui.com/static/images/avatar/1.jpg'});
    setComment('');
  };
  return (
    <FormControl>
      <FormLabel>Your comment</FormLabel>
        <div>
                          <TextField
                              hiddenLabel
                              id="filled-hidden-label-normal"
                              placeholder="Enter your Name"
                              variant="filled"
                              value={personName}
        onChange={(event) => {
          setPersonName(event.target.value);
        }}
                          />
                      </div>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        value={personName}
  onChange={(event) => {
    setComment(event.target.value);
  }}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <Button sx={{ ml: 'auto' }} onClick={onClick}>Send</Button>
          </Box>
        }
        sx={[
          {
            minWidth: 300,
            maxWidth: 600,},
        ]}
      />
    </FormControl>
  );
}
