import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CommentListHook } from '../../Hooks/commentListhook';

export const CommentList = () => {
    const {commentData,loading} = CommentListHook();
  return (
    <div>
    {loading && !commentData && (<div>Loading...</div>)}

    {commentData && commentData.map((item) => (
 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.avatar_url} src={`${''}`} />
        </ListItemAvatar>
        <ListItemText
          primary={`${item.name}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {item.body}
              </Typography>
              {/* {'body'} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    
    </List>
    ))}
    </div>
   
  );
}
