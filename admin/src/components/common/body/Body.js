import MenuBar from "components/common/menu-bar";
import ContentView from "../content-view";
import { Container, ContentViewWrapper, MenuBarWrapper } from "./style";

function Body() {
  return (
    <Container>
      <MenuBarWrapper>
        <MenuBar />
      </MenuBarWrapper>

      <ContentViewWrapper>
        <ContentView/>
      </ContentViewWrapper>
    </Container>
  )
}

export default Body;