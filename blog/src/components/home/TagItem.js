import { TextUnderlinedHover } from "components/common/TextComponents";
import { connect } from "react-redux"
import styled from "styled-components"

const Container = styled.div`
  margin-right: 10px;
`

function TagItem(props) {
  const name = props.name;

  return (
    <Container>
      <TextUnderlinedHover 
      fontSize="0.75rem"
      fontWeight={700}>
        {`#${name}`}
      </TextUnderlinedHover>
    </Container>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagItem)