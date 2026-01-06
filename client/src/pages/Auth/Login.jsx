import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../../Redux/slices/authSlice";
import LoginImage from "../../assets/images/Login.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (isError) {
      alert(message);
    }


    dispatch(reset());
  }, [user, isError, message, dispatch, navigate]);

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <div className="bg-white shadow-lg rounded overflow-hidden">
              <Row className="g-0">

                <Col
                  lg="7"
                  className="d-flex align-items-center justify-content-center bg-light"
                >
                  <div className="w-75 h-75 d-flex align-items-center justify-content-center border rounded bg-white">
                    <img
                      src={LoginImage}
                      alt="Login Illustration"
                      className="img-fluid"
                      style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                  </div>
                </Col>

                <Col lg="5" className="bg-warning p-5 text-white">
                  <div className="text-center mb-4">
                    <div
                      className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="ri-user-line text-warning fs-3"></i>
                    </div>
                  </div>

                  <h3 className="text-center mb-4 fw-bold">Login</h3>

                  <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-3">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="mb-4">
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <Button
                      color="light"
                      className="w-100 fw-semibold mb-3"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>

                    {isError && (
                      <p className="text-danger text-center">{message}</p>
                    )}
                  </Form>

                  <p className="text-center mb-0">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-white fw-semibold">
                      Create
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

export default Login;
