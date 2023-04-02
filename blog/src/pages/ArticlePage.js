import { TextComponent, TextHover } from "components/common/TextComponents";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { updateCurrentViewSlug, fetchArticleBySlug } from 'redux/features/ArticleSlice';
import { getCurrentArticle, getCurrentSlug } from "redux/selectors/ArticleSelectors";
import styled, { useTheme } from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const Container = styled.div`

`

const Wrapper = styled.div`
  margin-bottom: 5px;
`

const ImageWrapper = styled.div`
  & img {
    max-height: 500px;
    height: 100%;
    width: 100%;
  }
`

const TextComponentInline = styled(TextComponent)`
  display: inline;
`

const IndentSymbol = styled(TextComponentInline)`
  margin-right: 10px;
  color: ${props => props.theme.mainColor};
`

const MarkdownWrapper = styled(ReactMarkdown)`

`

function ArticlePage(props) {
  const theme = useTheme();
  const { slug } = useParams();
  const data = props.currentArticle;

  useEffect(() => {
    props.updateCurrentViewSlug(slug);
  }, [])

  useEffect(() => {
    props.fetchArticleBySlug(slug);
  }, [])

  return (
    <Container>

      <Wrapper>
        <IndentSymbol
        fontSize="1.2rem"
        fontWeight={500}>
          #
        </IndentSymbol>
        <TextComponentInline 
        fontSize="1.2rem"
        fontWeight={500}
        >
          {data && data.title}
        </TextComponentInline>
      </Wrapper>

      <Wrapper>
        <TextComponent
        fontSize="0.9rem"
        fontWeight={500}
        textColor={theme.blurColor}
        >
          {data && data.created_at}
        </TextComponent>
      </Wrapper>

      {/* {
        data && data.banner && (data.banner !== "") &&
          <Wrapper>
            <ImageWrapper>
              <img src={data.banner} atl=""/>
            </ImageWrapper>
          </Wrapper>
      } */}

      <MarkdownWrapper
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
  
            return !inline && match ? (
              <SyntaxHighlighter
                style={style}
                PreTag="div"
                language={match[1]}
                children={String(children).replace(/\n$/, "")}
                {...props}
              />
            ) : (
              <code className={className ? className : ""} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {data && data.content}
      </MarkdownWrapper>

    </Container>
  )
}

const mapStateToProps = state => ({
  currentSlug: getCurrentSlug(state),
  currentArticle: getCurrentArticle(state)
})

const mapDispatchToProps = {
  updateCurrentViewSlug,
  fetchArticleBySlug
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePage)