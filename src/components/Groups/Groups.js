import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import profile from "../../profile";
import "./Groups.scss";

export default class Followers extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {profile.followers.map(function(follower, i) {
              // moment.locale('en');
              return (
                <a key={i} href="#0" className="group-link">
                  <div className="group">
                    <Media className="postArea mt-3 p-3">
                      <Media left top className="postImgDiv mr-3 ml-3">
                        <Media className="postImg" object src={follower.img} />
                      </Media>
                      <Media body>
                        <Media heading>
                          <p className="group_name">{follower.name}</p>
                        </Media>
                      </Media>
                    </Media>
                  </div>
                </a>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
