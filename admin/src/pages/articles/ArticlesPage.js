import Article from "components/articles/article";
import { memo, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleContainer, Container, CreateButton, CreateButtonWrapper } from "./style";

function ArticlesPage(props) {
  const navigate = useNavigate();

  const allArticles = useMemo(() => props.allArticles, [props.allArticles]);

  useEffect(() => {
    props.changePage("article");
  }, []);

  return (
    <>
      <Container> 
        {
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