import React from "react";
import styled from "styled-components";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Controller } from "./components/Controller";
import { AlgoDisplay } from "./components/AlgoDisplay";


const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

const Sort = () => {
  return (
    <Container>
      <NavBar />
      <Controller />
      <AlgoDisplay />
      <Footer />
    </Container>
  );
};

export default Sort;
