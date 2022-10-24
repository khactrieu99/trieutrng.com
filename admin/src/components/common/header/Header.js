import { useNavigate } from "react-router-dom";
import { Container, IconWrapper, Image, ImageWrapper, Text, TextWrapper } from "./style";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <IconWrapper onClick={() => navigate("/article")} >
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