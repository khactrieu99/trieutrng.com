import useAuth from "hooks/useAuth";
import { Container, NormalElement, ActiveElement } from "./style";



function MenuBar(props) {
  const {authenticated, sessionExists} = useAuth();

  const onElementClick = (type) => {
    props.changePage(type);
  }

  return (
    <Container>
      { 
        sessionExists() && 
        props.elements.map(element => (
          props.page === element ?
          <ActiveElement 
            key={element}
            to={`/${element}`}
            onClick={() => onElementClick(element)}>
              {`# ${element}`}
          </ActiveElement>
          :
          <NormalElement 
            key={element}
            to={`/${element}`}
            onClick={() => onElementClick(element)}>
              {`# ${element}`}
          </NormalElement>
        ))
      }
    </Container>
  )
}

MenuBar.defaultProps = {
  elements: ["tag", "article"]
}

export default MenuBar;