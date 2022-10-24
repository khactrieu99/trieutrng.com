import { connect } from "react-redux";
import { removeTag } from "redux/features/TagSlice";
import { getLoadingStatus } from "redux/selectors/LoadingSelector";
import { getAllTags } from "redux/selectors/TagSelectors";
import TagList from "./TagList";

const mapStateToProps = state => ({
  allTags: getAllTags(state),
  loadingStatus: getLoadingStatus(state)
})

const mapDispatchToProps = {
  removeTag
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagList)