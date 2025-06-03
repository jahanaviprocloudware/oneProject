import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CommentListHook } from "../../Hooks/commentListhook";
import { Loader } from "./../../Loader/Loader";

export const CommentList = (props) => {
  const { isCommentUpdated, setIsCommentUpdated } = props;
  const [commentListData, setCommentListData] = React.useState([]);
  const { commentData, loading } = CommentListHook();

  React.useEffect(() => {
    const existingComment = JSON.parse(localStorage.getItem("comment")) || [];
    if (
      existingComment &&
      commentData &&
      existingComment.length > 0 &&
      commentData.length > 0
    ) {
      setCommentListData([...commentData, ...existingComment]);
    } else if (
      commentData &&
      existingComment &&
      commentData.length > 0 &&
      existingComment.length === 0
    ) {
      setCommentListData(commentData);
    }
    setIsCommentUpdated(false);
  }, [commentData, isCommentUpdated]);

  const capitalizeWords = str => {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  return (
    <div>
      {loading && !commentData && (
        <div>
          <Loader />
        </div>
      )}
      <div style={{ maxHeight: 400, overflowY: "auto", width: "100%" }}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {commentListData &&
            commentListData.map((item, idx) => (
              <React.Fragment key={idx}>
                <ListItem alignItems="flex-start flex-wrap">
                  <ListItemAvatar>
                    <Avatar
                      alt={item.avatar_url || item?.name.charAt(0).toUpperCase()}
                      src={
                        item.avatar_url || item?.name.charAt(0).toUpperCase()
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${capitalizeWords(item.name)}`}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}
                        >
                          {item.body}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
        </List>
      </div>
    </div>
  );
};
