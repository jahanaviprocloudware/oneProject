import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

export const TextCommentArea = (props) => {
  const { setIsCommentUpdated } = props;

  const validate = (values) => {
    let errors = {};
    if (!values.personName) {
      errors.personName = "Required";
    } else if (!/^[a-zA-Z\s]+$/i.test(values.personName)) {
      errors.personName =
        "Invalid Name, don't use numbers or special characters";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      personName: "",
      comment: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setIsCommentUpdated(true);
      const newComment = { name: values.personName, body: values.comment };
      const existingComment = JSON.parse(localStorage.getItem("comment")) || [];
      existingComment.push(newComment);
      localStorage.setItem("comment", JSON.stringify(existingComment));
      resetForm();
    },
  });

  return (
    <FormControl component="form" onSubmit={formik.handleSubmit}>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", marginBottom: 2, color: "text.primary" }}
      >
        Leave a comment for me
      </Typography>
      <FormLabel>Your comment</FormLabel>
      <div>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Enter your Name"
          variant="filled"
          error={formik.touched.personName && Boolean(formik.errors.personName)}
          helperText={formik.touched.personName && formik.errors.personName}
          value={formik.values.personName}
          name="personName"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        name="comment"
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        endDecorator={
          <Box
            sx={{
              display: "flex",
              gap: "var(--Textarea-paddingBlock)",
              pt: "var(--Textarea-paddingBlock)",
              borderTop: "1px solid",
              borderColor: "divider",
              flex: "auto",
            }}
          >
            <Button sx={{ ml: "auto" }} type="submit">
              Send
            </Button>
          </Box>
        }
        sx={[
          {
            minWidth: 300,
            maxWidth: 600,
          },
        ]}
      />
    </FormControl>
  );
};
