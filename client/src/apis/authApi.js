import { REACT_URL } from ".";
import { AuthAction } from "../redux/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";

export const RegisterApi = (data, navigate) => {
  return (dispatch) => {
    REACT_URL.post("/register", data)
      .then((res) => {
        console.log(res.data);
        dispatch(AuthAction(res.data));
        navigate('/login')
        toast.success("Register Successfully");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message);
      });
  };
};

export const LoginApi = (data, navigate) => {
  return (dispatch) => {
    REACT_URL.post("/login", data)
      .then((res) => {
        console.log(res.data);
        dispatch(AuthAction(res.data));
        navigate('/home')
        toast.success("Login Successfully");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.error);
      });
  };
};

export const ForgotApi = (data) => {
  return (dispatch) => {
    REACT_URL.post("/sendmail", data)
      .then((res) => {
        console.log(res.data);
        dispatch(AuthAction(res.data));
        toast.success("Check your email");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.error);
      });
  };
};

