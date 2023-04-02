import { connect } from "react-redux";
import Login from "./Login";
import { login } from "redux/features/AuthSlice";
import { getLoggedIn } from "redux/selectors/AuthSelector";

const mapStateToProps = state => ({
  loggedIn: getLoggedIn(state)
})

const mapDispatchToProps = {
  login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)