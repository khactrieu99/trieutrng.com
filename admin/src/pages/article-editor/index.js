import { connect } from "react-redux";
import ArticleEditor from "./ArticleEditor";
import { changePage } from "redux/features/PageSlice";
import { createArticle, fetchArticleBySlug, updateCurrentViewSlug, updateArticle } from "redux/features/ArticleSlice"
import { getCurrentViewArticle } from "redux/selectors/ArticleSelectors";
import { getAllTags } from "redux/selectors/TagSelectors";

const mapStateToProps = state => ({
  allTags: getAllTags(state),
  currentViewArticle: getCurrentViewArticle(state)
})

const mapDispatchToProps = {
  changePage,
  createArticle,
  updateArticle,
  fetchArticleBySlug,
  updateCurrentViewSlug
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleEditor)