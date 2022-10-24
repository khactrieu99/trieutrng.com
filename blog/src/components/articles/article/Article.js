import { useNavigate } from "react-router-dom";
import { GetTextApartFromNowToMillis, ParseUTCTimeToMillis } from "util/timeUtils";
import { Container, Content, ContentContainer, Description, ETag, ETagWrapper, Extra, ExtraTags, ExtraTime, Thumbnail, Title } from "./style";

function Article(props) {
  const navigate = useNavigate();
  const { id, title, slug, description, banner, tags, created_at } = props.data;

  const goToEditor = () => {
    navigate(`/article/${slug}`)
  }

  const getAllArticleWithTag = (tag) => {
    props.updateCurrentTag(tag);
  }

  return (
    <Container>
        <ContentContainer>
          <Content>
            <Title onClick={goToEditor}>{title}</Title>
            <Description>{description}</Description>
            <Extra>
              <ExtraTime>
                {GetTextApartFromNowToMillis(ParseUTCTimeToMillis(created_at))}
              </ExtraTime>

              <ExtraTags>
                <ETagWrapper>
                {
                  tags &&
                  tags.map(tag => 
                    <ETag key={tag} 
                      onClick={() => getAllArticleWithTag(tag)}>
                      {`# ${tag}`}
                    </ETag>
                  )
                }
                </ETagWrapper>
              </ExtraTags>
            </Extra>
          </Content>
        </ContentContainer>

        <Thumbnail onClick={goToEditor} backgroundImg={banner}/>
    </Container>
  )
}

export default Article;