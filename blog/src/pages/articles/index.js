import { connect } from "react-redux";
import { getAllArticle, getCurrentArticles } from "redux/selectors/ArticleSelectors";
import { updateCurrentViewSlug } from "redux/features/ArticleSlice";
import ArticlesPage from "./ArticlesPage";

const mapStateToProps = state => ({
  currentArticles: getCurrentArticles(state)
})

const mapDispatchToProps = {
  updateCurrentViewSlug
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage)