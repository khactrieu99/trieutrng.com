import { memo, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllArticle } from "redux/selectors/ArticleSelectors";
import { fetchArticles } from 'redux/features/ArticleSlice';
import styled from "styled-components";
import PostItem from "components/home/PostItem";

const Container = styled.div`

`

function HomePage(props) {
  const navigate = useNavigate();
  const allArticles = useMemo(() => props.allArticles, [props.allArticles]);

  useEffect(() => {
    props.fetchArticles()
  }, [])

  useEffect(() => {
    console.log(allArticles)
  })

  return (
    <Container>
      {
        allArticles &&
        allArticles.map(item => 
          <PostItem key={item.id} data={item} />
        )
      }
    </Container>
  )
}

const mapStateToProps = state => ({
  allArticles: getAllArticle(state),
})

const mapDispatchToProps = {
  fetchArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)