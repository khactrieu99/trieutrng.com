import { connect } from "react-redux";
import { createTag } from "redux/features/TagSlice";
import Input from "./Input";

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  createTag
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)