import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RegisterImg from "../../assets/images/Register.png";
import { registerUser, reset } from "../../Redux/slices/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // Form state
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  // input change handler
  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // submit handler (API CALL)
  const handleClick = (e) => {
    e.preventDefault();

    dispatch(
      registerUser({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      })
    );
  };

  // handle success / error
  useEffect(() => {
    if (isError) {
      alert(message);
    }

    

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <section className="py-22 bg-gray-100">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <div className="bg-white shadow-lg rounded overflow-hidden">
              <Row className="g-0">

                {/* LEFT SIDE (IMAGE) */}
                <Col
                  lg="7"
                  className="d-flex align-items-center justify-content-center bg-light"
                >
                  <div className="w-75 h-75 d-flex align-items-center justify-content-center border rounded bg-white">
                    <img
                      src={RegisterImg}
                      alt="Register Illustration"
                      className="img-fluid"
                      style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                  </div>
                </Col>

                {/* RIGHT SIDE (REGISTER FORM) */}
                <Col lg="5" className="bg-warning p-5 text-white">

                  {/* USER ICON */}
                  <div className="text-center mb-4">
                    <div
                      className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="ri-user-add-line text-warning fs-3"></i>
                    </div>
                  </div>

                  <h3 className="text-center mb-4 fw-bold">Register</h3>

                  <Form onSubmit={handleClick}>
                    {/* USERNAME */}
                    <FormGroup className="mb-3">
                      <Input
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    {/* EMAIL */}
                    <FormGroup className="mb-3">
                      <Input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    {/* PASSWORD */}
                    <FormGroup className="mb-4">
                      <Input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    {/* REGISTER BUTTON */}
                    <Button
                      type="submit"
                      color="dark"
                      className="w-100 fw-semibold mb-3"
                      disabled={isLoading}
                    >
                      {isLoading ? "Registering..." : "Register"}
                    </Button>
                  </Form>

                  {/* LOGIN LINK */}
                  <p className="text-center mb-0">
                    Already have an account?{" "}
                    <Link to="/login" className="text-white fw-semibold">
                      Login
                    </Link>
                  </p>

                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
