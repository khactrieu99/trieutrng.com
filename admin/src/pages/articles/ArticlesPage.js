import Article from "components/articles/article";
import { memo, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleContainer, Container, CreateButton, CreateButtonWrapper } from "./style";
import useAuth from "hooks/useAuth";

function ArticlesPage(props) {
  const {sessionExists} = useAuth();
  const navigate = useNavigate();

  const allArticles = useMemo(() => props.allArticles, [props.allArticles]);

  useEffect(() => {
    props.changePage("article");
  }, []);

  useEffect(() => {
    props.fetchArticles();
  }, [, props.loggedIn])

  return (
    <>
      <Container> 
        {
          sessionExists() &&
          allArticles &&
          allArticles.map(item => 
            <ArticleContainer key={item.slug}>
              <Article data={item}/>
            </ArticleContainer>
          )
        }
      </Container>
      
      <CreateButtonWrapper onClick={() => navigate("/article/create")}>
        <CreateButton backgroundImg="/text-icon.png"/>
      </CreateButtonWrapper>
    </>
  )
}

export default memo(ArticlesPage);