import React from "react";
import styled from "styled-components";
import ChartWrapper from "./ChartWrapper";

const AppContent = styled.div`
  background: #efefe9;
`;

const Header = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 20px solid palevioletred;
  color: black;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  return (
    <AppContent>
      <Header>Welcome, Developer! Here's a D3.js example!</Header>
      <ChartWrapper />
    </AppContent>
  );
}
export default App;
