import { TextField, Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("authToken");
  }, []);

  const onClick = useCallback(() => {
    if (typeof name == "string" && password.includes("&")) {
      sessionStorage.setItem("authToken", "some_token");
      navigate("/home");
    }
  }, [name, navigate, password]);
  return (
    <div className="container backgorund">
      <div className="col-12 vh-100 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-end gap">
          <div className="headingColor">
            <h1>Login</h1>
          </div>
          <div>
            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="Enter your Name"
              variant="filled"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="Enter your password"
              variant="filled"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="backgorundbtnColor"
              onClick={onClick}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
