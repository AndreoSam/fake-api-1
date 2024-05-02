import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import "./AllUsers.css";

const AllUsers = () => {
  const api_url = "https://api.escuelajs.co/api/v1/users";
  let [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        // console.log("Axios Resolved: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        // console.log("Axios Error: ", err);
      });
  }, [setState, api_url]);

  return (
    <Container>
      <Row>
        {state.map((user) => (
          <React.Fragment key={user.id}>
            <Card className="user_details" style={{ width: "25rem" }}>
              <Card.Img
                style={{ width: "6rem" }}
                variant="top"
                src={user.avatar}
              />
              <div>
                <b>Name:</b> {user.name}
                <br />
                <b>Email:</b> {user.email}
                <br />
                <b>Role:</b> {user.role}
                <br />
                <b>Password:</b> {user.password}
                <br />
                <b>Created on:</b> {user.creationAt}
                <br />
                <b>Updated on:</b> {user.updatedAt}
                <br />
                <Link to={`singleusers/${user.id}`}><Button>Details</Button></Link>
              </div>
            </Card>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};
export default AllUsers;
