import { connect } from "react-redux";
import { changePage } from "redux/features/PageSlice";
import { createArticle} from "redux/features/ArticleSlice"
import { getAllTags } from "redux/selectors/TagSelectors";
import ArticleCreator from "./ArticleCreator";

const mapStateToProps = state => ({
  allTags: getAllTags(state),
})

const mapDispatchToProps = {
  changePage,
  createArticle,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleCreator)