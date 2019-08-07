import React, { Component } from "react";
import Head from "../../components/Head/Head";
import { Grid, Row, Col } from "react-flexbox-grid";
import Image from "../../components/Image/Image";
import Helmet from "../../images/Helmet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = {
  color: '#fff',
  fontSize: '40px',
  fontWeight: '400',
}

const HelmetStyle ={
  display: 'inline-block',
}

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <Grid>
            <Row between="xs">
              <Col xs={6}>
                <Image style={HelmetStyle} sizex="40px" src={Helmet} />
              </Col>
              <Col xs={6}>
                <Row end="xs">
                  <FontAwesomeIcon style={Menu} icon={faBars} />
                </Row>
              </Col>
            </Row>
          </Grid>
        </Head>
      </React.Fragment>
    );
  }
}

export default Header;
