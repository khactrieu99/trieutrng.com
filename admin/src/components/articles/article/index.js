import { connect } from "react-redux";
import { removeArticle } from "redux/features/ArticleSlice";
import Article from "./Article";

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  removeArticle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)