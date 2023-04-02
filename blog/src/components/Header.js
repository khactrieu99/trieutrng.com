import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { TextUnderlinedHover } from "./common/TextComponents";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  margin-bottom: ${props => props.theme.marginBottom};
`

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;

  @media (max-width: 200px) {
    flex-direction: column;
  }
`

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <TextUnderlinedHover 
        fontSize="1.5rem" 
        fontWeight={500}
        onClick={() => navigate("/")}>
          Trieu Truong
        </TextUnderlinedHover>

        <TextUnderlinedHover 
        fontSize="1rem" 
        fontWeight={500}
        onClick={() => navigate("/about")}>
          about
        </TextUnderlinedHover>
      </Wrapper>
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
)(Header)