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
import { addStory } from "api/getstory";

const WriteStory = () => {
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
    
    let userDetails = localStorage.getItem("auth");
    userDetails = JSON.parse(userDetails);
    const dataToSave = {
        ...data,
        user_id: userDetails._id,
      };
    console.log(dataToSave)
    const postStory = await addStory(dataToSave);
    console.log(postStory);
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
          <Container className="pt-lg-10">
            <Row className="justify-content-center">
              <Col lg="10">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-10 py-lg-10">
                    <div className="text-center text-muted mb-4">
                      <small>
                        <b>Write Your Story</b>
                      </small>
                    </div>
                    <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                      <FormGroup>
                        <label htmlFor="title">Title</label>
                        <Controller
                          name="title"
                          control={control}
                          rules={{ required: "Title is required" }}
                          render={({ field }) => (
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Title"
                                type="text"
                                {...field}
                              />
                            </InputGroup>
                          )}
                        />
                        {errors.title && (
                          <span className="text-danger">
                            {errors.title.message}
                          </span>
                        )}
                      </FormGroup>

                        <FormGroup>
                          <label htmlFor="story">Full Story</label>
                          <Controller
                            name="story"
                            control={control}
                            rules={{ required: "Full Story is required" }}
                            render={({ field }) => (
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  id="story"
                                  rows="10"
                                  {...field}
                                ></textarea>
                              </div>
                            )}
                          />
                          {errors.story && (
                            <span className="text-danger">
                              {errors.story.message}
                            </span>
                          )}
                        </FormGroup>

                      <FormGroup>
                        <label htmlFor="tags">Tags</label>
                        <Controller
                          name="tags"
                          control={control}
                          rules={{ required: "Tags are required" }}
                          render={({ field }) => (
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-tag" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Tags"
                                type="text"
                                {...field}
                              />
                            </InputGroup>
                          )}
                        />
                        {errors.tags && (
                          <span className="text-danger">
                            {errors.tags.message}
                          </span>
                        )}
                      </FormGroup>

                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="submit">
                          Post Story
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

export default WriteStory;
