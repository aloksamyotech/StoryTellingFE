/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { getAllStory } from "api/getstory";
import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Container, Row, Col, Badge } from "reactstrap";

const StoryPage = () => {
  const [story, setStory] = useState();
  const [tags, setTags] = useState();

  const getStory = async () => {
    let data = await getAllStory();
    setStory(data.data);
  };

  useEffect(() => {
    getStory();
  }, []);
  return (
    <>
      <section className="section section-lg section-nucleo-icons pb-250">
        <Container>
          {story &&
            story.map((item) => {
              return (
                <Row className="justify-content-center mt-5" key={item._id}>
                  <Col className="text-center" lg="8">
                    <h2 className="display-4">{item.title}</h2>
                    <Badge className="text-uppercase" color="info" pill>
                      {item.tags[0]}
                    </Badge>
                    <Badge className="text-uppercase" color="primary" pill>
                      {item.tags[1]}
                    </Badge>
                    <p className="lead">
                      {item.story20 + " "}.........
                      <a style={{ cursor: "pointer" }}>Read more</a>
                    </p>
                    <div className="btn-wrapper">
                      <Button
                        color="primary"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page"
                      >
                        Read Full Story
                      </Button>
                    </div>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </section>
    </>
  );
};

export default StoryPage;
