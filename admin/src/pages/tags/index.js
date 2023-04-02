import { connect } from "react-redux";
import { changePage } from "redux/features/PageSlice";
import TagsPage from "./TagsPage";
import { fetchTags } from 'redux/features/TagSlice';
import { getLoggedIn } from "redux/selectors/AuthSelector";

const mapStateToProps = state => ({
  loggedIn: getLoggedIn(state)
})

const mapDispatchToProps = {
  changePage,
  fetchTags
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsPage)