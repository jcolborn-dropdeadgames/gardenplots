import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  a {
    margin: 0 2%;
  }
`;

function App() {
  return (
    <>
      <StyledDiv>
        <header>
          <h1>Gardenplots.io</h1>
          <Link to="/">Home</Link>
          <Link to="/garden">Garden</Link>
          <Link to="/planning">Planning</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </header>
      </StyledDiv>
      <div></div>
    </>
  );
}

export default App;
