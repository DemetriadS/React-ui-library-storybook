import React from "react";
import App from "./App";
import { Tabs, Container } from "./components";

const AppWrapper = () => {
  return (
    <Container>
      <Tabs value={0}>
        <App />
      </Tabs>
    </Container>
  );
};

export default AppWrapper;
