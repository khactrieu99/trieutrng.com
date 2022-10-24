import Article from "components/articles/article";
import { memo, useMemo } from "react";
import { ArticleContainer, Container } from "./style";

function ArticlesPage(props) {
  const listArticles = useMemo(() => props.currentArticles, [props.currentArticles]);

  return (
    <>
      <Container> 
        {
          listArticles &&
          listArticles.map(item => 
            <ArticleContainer key={item.slug}>
              <Article data={item}/>
            </ArticleContainer>
          )
        }
      </Container>
    </>
  )
}

export default memo(ArticlesPage);