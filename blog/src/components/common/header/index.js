import { connect } from "react-redux";
import Header from "./Header";
import { updateCurrentTag } from "redux/features/ArticleSlice";

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  updateCurrentTag
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)