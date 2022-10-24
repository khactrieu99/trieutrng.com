import { useNavigate } from "react-router-dom";
import { Container, IconWrapper, Image, ImageWrapper, Text, TextWrapper } from "./style";

function Header(props) {
  const navigate = useNavigate();

  const goHome = () => {
    props.updateCurrentTag("");
    navigate("/");
  }

  return (
    <Container>
      <IconWrapper onClick={() => goHome()} >
        <ImageWrapper>
          <Image src="/portrait.jpg"/>
        </ImageWrapper>
        <TextWrapper>
          <Text>trieutrng.com</Text>
        </TextWrapper>
      </IconWrapper>
    </Container>
  )
}

export default Header;