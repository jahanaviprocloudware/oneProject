import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { createdAnewdataHook } from "../Hooks/createdAnewdataHook";

export const FormWithUser = (props) => {
  const { formValues, setFormvalues } = props;
  const navigate = useNavigate();
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.name) {
      errors.name = "Required";
    } else if (!/^[a-zA-Z\s]+$/i.test(values.name)) {
      errors.name = "Invalid Name, dont use numbers or special characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: formValues?.email || "",
      name: formValues?.name || "",
    },
    validate,
    onSubmit: async (values) => {
      await createdAnewdataHook(
        formValues?.isEdit
          ? {
              userName: values?.name,
              userEmail: values?.email,
              userId: formValues?.userId,
              isUpdated: formValues?.isEdit,
            }
          : { userName: values?.name, userEmail: values?.email }
      );
      navigate(
        formValues?.isEdit === "table" || !formValues ? "/userInfo" : "/about"
      );
      setFormvalues &&
        setFormvalues({
          name: values.name,
          email: values.email,
          isEdit: "",
          userId: formValues?.userId || Date.now(),
        });
    },
  });

  return (
    <div>
      {formValues?.isEdit ? (
        <div>
          <h1>Edit User</h1>
        </div>
      ) : (
        <div>
          <h1>Contact Us</h1>
        </div>
      )}
      {formValues?.isEdit && (
        <div>
          <h6>
            Data is pre-fixed you can't see any changes on screen. you can check
            the api calls from network tabs
          </h6>
        </div>
      )}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik?.touched?.name && Boolean(formik?.errors?.name)}
          helperText={formik.touched?.name && formik.errors?.name}
          margin="normal"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.touched?.email && Boolean(formik.errors?.email)}
          helperText={formik.touched?.email && formik.errors?.email}
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
