import { connect } from "react-redux";
import { getCurrentPage } from "redux/selectors/PageSelectors";
import ContentView from "./ContentView";

const mapStateToProps = state => ({
  page: getCurrentPage(state)
})

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentView)