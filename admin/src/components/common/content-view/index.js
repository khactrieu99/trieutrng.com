import { connect } from "react-redux";
import { getCurrentPage } from "redux/selectors/PageSelectors";
import ContentView from "./ContentView";
import { getLoggedIn } from "redux/selectors/AuthSelector";

const mapStateToProps = state => ({
  page: getCurrentPage(state),
  loggedIn: getLoggedIn(state)
})

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentView)