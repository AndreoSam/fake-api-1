import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const SingleUsers = () => {
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

  let { id } = useParams();
  console.log("Sub ID: ", id);

  let sincat = state.filter((obj) => obj.id == id);
  console.log("Single Category: ", sincat);

  return (
    <div>
      {sincat.map((user) => (
        <Col key={user.id} lg={3}>
          <Card style={{ width: "40rem", margin: "auto" }}>
            <Card.Img
              style={{ width: "40rem", margin: "auto" }}
              variant="top"
              src={user.avatar}
            />
            <Card.Body>
              <Card.Text>
                <b>Name:</b> {user.name} <br />
                <b>Email Address:</b> {user.email} <br />
                <b>Password:</b> {user.password} <br />
                <b>Job Description:</b> {user.role} <br />
                <b>Creation At:</b> {user.creationAt} <br />
                <b>Updated At:</b> {user.updatedAt} <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      ))}
    </div>
  );
};

export default SingleUsers;
