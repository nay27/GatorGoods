import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";

const theme = {
  purple: "#231161",
  text: "#eeeeee",
  yellow: "#c99700",
  maxWidth: "1000px",
  cardBS: "0 0 3px lightgray"
};

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <>
      <Header query={props.query} />
      <ContentContainer>{props.children}</ContentContainer>
    </>
  </ThemeProvider>
);

export default Page;
