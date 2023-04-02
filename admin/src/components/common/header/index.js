import { connect } from "react-redux";
import Header from "./Header";
import { getLoggedIn } from "redux/selectors/AuthSelector";
import { logout } from "redux/features/AuthSlice";

const mapStateToProps = state => ({
  loggedIn: getLoggedIn(state)
})

const mapDispatchToProps = {
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)