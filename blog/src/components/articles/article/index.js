import { connect } from "react-redux";
import Article from "./Article";
import { updateCurrentTag } from "redux/features/ArticleSlice";

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  updateCurrentTag
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)