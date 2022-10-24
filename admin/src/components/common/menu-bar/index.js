import { connect } from "react-redux";
import { getCurrentPage } from "redux/selectors/PageSelectors";
import { changePage } from "redux/features/PageSlice";
import MenuBar from "./MenuBar";

const mapStateToProps = state => ({
  page: getCurrentPage(state)
})

const mapDispatchToProps = {
  changePage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar)