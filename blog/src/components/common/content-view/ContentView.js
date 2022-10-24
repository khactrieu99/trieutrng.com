import ArticlesPage from "pages/articles";
import { Route, Routes } from "react-router-dom";
import { Container } from "./style";

function ContentView(props) {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<ArticlesPage/>} />
      </Routes>
    </Container>
  )
}

export default ContentView;