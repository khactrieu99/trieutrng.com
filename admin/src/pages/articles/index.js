import { connect } from "react-redux";
import { getAllArticle } from "redux/selectors/ArticleSelectors";
import { changePage } from "redux/features/PageSlice";
import { updateCurrentViewSlug } from "redux/features/ArticleSlice";
import ArticlesPage from "./ArticlesPage";

const mapStateToProps = state => ({
  allArticles: getAllArticle(state),
  
})

const mapDispatchToProps = {
  changePage,
  updateCurrentViewSlug
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage)