import { useNavigate } from "react-router-dom";
import { Container, IconWrapper, Image, ImageWrapper, Text, TextWrapper } from "./style";
import { doLogout } from "api/Auth";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

function Header(props) {
  const navigate = useNavigate();
  const {sessionExists} = useAuth();

  useEffect(() => {
    if (sessionExists()) {
      navigate("/article");
    } else {
      navigate("/login");
    }
  }, [props.loggedIn])

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

      {
        sessionExists() &&
        <button onClick={props.logout}>Logout</button>
      }

    </Container>
  )
}

export default Header;