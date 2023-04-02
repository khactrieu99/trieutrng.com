import { TextComponent, TextHover } from "components/common/TextComponents";
import { connect } from "react-redux"
import styled, { useTheme } from "styled-components"
import TagItem from "./TagItem";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin-bottom: ${props => props.theme.marginBottom};
`

const Wrapper = styled.div`
  margin-bottom: 5px;
`

const TextHoverInline = styled(TextHover)`
  display: inline;
`

const TextComponentInline = styled(TextComponent)`
  display: inline;
`

const IndentSymbol = styled(TextComponentInline)`
  margin-right: 10px;
  color: ${props => props.theme.mainColor};
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function PostItem(props) {
  const navigate = useNavigate();
  const theme = useTheme();

  const { id, title, slug, description, banner, tags, created_at } = props.data;

  return (
    <Container>
      <Wrapper>
        <IndentSymbol
        fontSize="1.2rem"
        fontWeight={500}>
          #
        </IndentSymbol>
        <TextHoverInline 
        fontSize="1.2rem"
        fontWeight={500}
        onClick={() => navigate(`/${slug}`)}
        >
          {title}
        </TextHoverInline>
      </Wrapper>

      <Wrapper>
        <TextComponent
        fontSize="0.9rem"
        fontWeight={500}
        textColor={theme.blurColor}
        >
          {created_at}
        </TextComponent>
      </Wrapper>

      <Wrapper>
        <TextComponent>
          {description}
        </TextComponent>
      </Wrapper>

      <Wrapper>
        <TagsWrapper>
          {
            tags &&
            tags.map(tag => <TagItem key={tag} name={tag} />)
          }
        </TagsWrapper>
      </Wrapper>
    </Container>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem)