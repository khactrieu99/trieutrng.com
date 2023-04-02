import { connect } from "react-redux";
import { getCurrentPage } from "redux/selectors/PageSelectors";
import { changePage } from "redux/features/PageSlice";
import MenuBar from "./MenuBar";
import { getLoggedIn } from "redux/selectors/AuthSelector";

const mapStateToProps = state => ({
  page: getCurrentPage(state),
  loggedIn: getLoggedIn(state)
})

const mapDispatchToProps = {
  changePage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar)