import React, { useState } from "react";
import axios from "axios";
import "./FormInput.css";

const FormInput = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
    errors: { fullname: "", email: "", password: "" },
  });

  const api_url = "https://jsonplaceholder.typicode.com/users";

  const verifyFullname = RegExp("^[a-zA-Z]+(?:[-'a-zA-Z]+)*$");
  const verifyEmail = RegExp("^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$");
  const verifyPassword = RegExp(
    "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$"
  );

  let changeHandler = (event) => {
    // console.log("Event: ", event, event.target.value, event.target.name);
    let { name, value } = event.target;
    let err = data.errors;
    switch (name) {
      case "fullname":
        err.fullname = !verifyFullname.test(value) ? "*Wrong pattern" : "";
        break;

      case "email":
        err.email = !verifyEmail.test(value) ? "*Wrong email format" : "";
        break;

      case "password":
        err.password = !verifyPassword.test(value) ? "*Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)." : "";
        break;
        
      default:
        console.log("Not Applicable");
    }
    setData({ ...data, [name]: value, errors: err });
    console.log("Validation error", data.errors);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted Value: ", data);

    let user = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    axios
      .post(api_url, user)
      .then((res) => {
      // console.log("Axios Response: ", res)
  })
      .catch((err) => {
      // console.log("Axios Error: ", err)
  });

    if (data.confirm_password === data.password) {
      data.errors.password = "Password Matched";
    } else {
      data.errors.password = "Password Mismatched";
    }
    console.log(data.errors.password);
  };

  return (
    <div className="formInput">
      <form onSubmit={submitHandler} className="form_element">
        <h1>Register</h1>
        <label>
          <b>Fullname: </b>
        </label>
        <br />
        <input
          type="text"
          name="fullname"
          placeholder="Enter name"
          onChange={changeHandler}
        />
        <br />
        {data.errors.fullname.length > 0 ? <p>{data.errors.fullname}</p> : ""}
        <label>
          <b>Email: </b>
        </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={changeHandler}
        />
        <br />
        {data.errors.email.length > 0 ? <p>{data.errors.email}</p> : ""}
        <label>
          <b>Password: </b>
        </label>
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={changeHandler}
        />
        <br />
        {data.errors.password.length > 0 ? <p>{data.errors.password}</p> : ""}
        <br />
        <label>
          <b>Confirm Password: </b>
        </label>
        <br />
        <input
          type="text"
          name="confirm_password"
          placeholder="Enter confirm password"
          onChange={changeHandler}
        />
        <br />
        <br />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormInput;
