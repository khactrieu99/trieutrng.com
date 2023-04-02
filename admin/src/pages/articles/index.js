import { connect } from "react-redux";
import { getAllArticle } from "redux/selectors/ArticleSelectors";
import { changePage } from "redux/features/PageSlice";
import { updateCurrentViewSlug } from "redux/features/ArticleSlice";
import ArticlesPage from "./ArticlesPage";
import { fetchArticles } from 'redux/features/ArticleSlice';
import { getLoggedIn } from "redux/selectors/AuthSelector";

const mapStateToProps = state => ({
  allArticles: getAllArticle(state),
  loggedIn: getLoggedIn(state)
})

const mapDispatchToProps = {
  changePage,
  updateCurrentViewSlug,
  fetchArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage)