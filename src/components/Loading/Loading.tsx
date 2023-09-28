import React from "react";
import { Alert, Col, Row, Space, Spin } from "antd";

const Loading: React.FC = () => (
  <Row
    align={"middle"}
    justify={"center"}
    style={{ width: "100%", minHeight: "100vh" }}
  >
    <Spin tip="Loading..." size="large"/>
  </Row>
);

export default Loading;
