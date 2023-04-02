import { useNavigate } from "react-router-dom";
import { GetTextApartFromNowToMillis, ParseUTCTimeToMillis } from "util/timeUtils";
import { CloseBtn, Container, Content, ContentContainer, Description, ETag, ETagWrapper, Extra, ExtraTags, ExtraTime, Thumbnail, Title } from "./style";
import useConfirmPopup from "hooks/useConfirmPopup";

function Article(props) {
  const { doOpen } = useConfirmPopup();
  const navigate = useNavigate();
  const { id, title, slug, description, banner, tags, created_at } = props.data;

  const goToEditor = () => {
    navigate(`/article/${slug}`)
  }

  const removeArticle = async () => {
    const isConfirmed = await doOpen(`Are you sure to remove article: "${title.toUpperCase()}"? This action can not be undo!`);
    if (isConfirmed) {
      props.removeArticle(id)
    }
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
                      <ETag key={tag}>
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

        <CloseBtn onClick={removeArticle}/>

      </Container>
  )
}

export default Article;