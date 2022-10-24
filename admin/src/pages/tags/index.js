import { connect } from "react-redux";
import { changePage } from "redux/features/PageSlice";
import TagsPage from "./TagsPage";

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  changePage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsPage)