import ArticleCreator from "pages/article-creator";
import ArticleEditor from "pages/article-editor";
import ArticlesPage from "pages/articles";
import TagsPage from "pages/tags";
import { Route, Routes, useNavigate, redirect } from "react-router-dom";
import { Container } from "./style";
import Login from "pages/login";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

function ContentView(props) {
  const navigate = useNavigate();
  const {authenticated, sessionExists} = useAuth();

  useEffect(() => {
    if (!sessionExists()) {
      navigate("/login");
    } else {
      navigate("/article");
    }
  }, [, props.loggedIn])

  return (
    <Container>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/tag" element={<TagsPage/>} />
        <Route path="/article" element={<ArticlesPage/>} />
        <Route path="/article/create" element={<ArticleCreator />} />
        <Route path="/article/:slug" element={<ArticleEditor />} />
      </Routes>
    </Container>
  )
}

export default ContentView;