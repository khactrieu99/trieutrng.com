import ArticleCreator from "pages/article-creator";
import ArticleEditor from "pages/article-editor";
import ArticlesPage from "pages/articles";
import TagsPage from "pages/tags";
import { Route, Routes } from "react-router-dom";
import { Container } from "./style";

function ContentView(props) {
  return (
    <Container>
      <Routes>
        <Route path="/tag" element={<TagsPage/>} />
        <Route path="/article" element={<ArticlesPage/>} />
        <Route path="/article/create" element={<ArticleCreator />} />
        <Route path="/article/:slug" element={<ArticleEditor />} />
      </Routes>
    </Container>
  )
}

export default ContentView;