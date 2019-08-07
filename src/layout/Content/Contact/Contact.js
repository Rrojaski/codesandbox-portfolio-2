import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Section from "../../../components/Section/Section";
import { Link as ReactLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import Form from "../../../components/Form/Form";
import Input from "../../../components/Form/Input/Input";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <Grid>
            <Row>
              <Col xs={11} lg={11}>
                <Row>
                  <Col xs={12} md={6}>
                    <Title color="#ffb637" largeFont>
                      Hello!
                    </Title>
                    <Paragraph>
                      There is going to be a form here to email
                    </Paragraph>
                    <ReactLink to="/">
                      <Button margin="20px 0">Return</Button>
                    </ReactLink>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form>
                      <Row>
                        <Col xs={6}>
                          <Input placeholder="Name" required />
                        </Col>
                        <Col xs={6}>
                          <Input placeholder="Email" type="email" required />
                        </Col>
                      </Row>
                      <Input placeholder="Subject" required />
                      <Input largeText placeholder="Message" required />
                      <Input
                        pointer
                        color="#fff"
                        backColor="linear-gradient(to top, #1d37be 0%, #1b5cde 100%)"
                        noMargin
                        type="submit"
                        value="send"
                      />
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>
      </React.Fragment>
    );
  }
}

export default Contact;
