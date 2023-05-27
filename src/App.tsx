import styled from "styled-components";
import AlgoDisplay from "./components/AlgoDisplay";
import Controller from "./components/Controller";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Controller />
      <AlgoDisplay />
      <Footer />
    </Container>
  );
}

export default App;
