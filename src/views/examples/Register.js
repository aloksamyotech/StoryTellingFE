import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { registerUser } from "api/auth";

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.querySelector("#main").scrollTop = 0;
  }, []);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // Handle form submission here
    const registerData = await registerUser(data);
    console.log(registerData);
    if (registerData.status == 400) {
      alert(registerData.message);
    } else if (registerData.status == 201) {
      alert(registerData.message);
      navigate("/login-page");
    }
  };

  return (
    <>
      <DemoNavbar />
      <main id="main">
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon mr-4"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={
                              require("assets/img/icons/common/github.svg")
                                .default
                            }
                          />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={
                              require("assets/img/icons/common/google.svg")
                                .default
                            }
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                      <FormGroup>
                        <Controller
                          name="name"
                          control={control}
                          rules={{ required: "Name is required" }}
                          render={({ field }) => (
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Name"
                                type="text"
                                {...field}
                              />
                            </InputGroup>
                          )}
                        />
                        {errors.name && (
                          <span className="text-danger">
                            {errors.name.message}
                          </span>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Controller
                          name="email"
                          control={control}
                          rules={{ required: "Email is required" }}
                          render={({ field }) => (
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email"
                                type="email"
                                {...field}
                              />
                            </InputGroup>
                          )}
                        />
                        {errors.email && (
                          <span className="text-danger">
                            {errors.email.message}
                          </span>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Controller
                          name="password"
                          control={control}
                          rules={{
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                            },
                          }}
                          render={({ field }) => (
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="off"
                                {...field}
                              />
                            </InputGroup>
                          )}
                        />
                        {errors.password && (
                          <span className="text-danger">
                            {errors.password.message}
                          </span>
                        )}
                      </FormGroup>
                      <div className="text-muted font-italic">
                        <small>
                          password strength:{" "}
                          <span className="text-success font-weight-700">
                            strong
                          </span>
                        </small>
                      </div>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                              <span>
                                I agree with the{" "}
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="submit">
                          Create account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Register;
