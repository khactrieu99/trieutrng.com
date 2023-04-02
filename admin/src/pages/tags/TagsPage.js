import Input from "components/tags/input";
import TagList from "components/tags/tag-list";
import { memo, useEffect } from "react";
import { Container, InputContainerWrapper, TagListWrapper } from "./style";
import useAuth from "hooks/useAuth";

function TagsPage(props) {
  const {sessionExists} = useAuth();

  useEffect(() => {
    props.changePage("tag");
  });

  useEffect(() => {
    props.fetchTags();
  }, [, props.loggedIn])

  return (
    <Container>
      {
        sessionExists() && 
        <>
          <InputContainerWrapper>
            <Input/>
          </InputContainerWrapper>

          <TagListWrapper>
            <TagList/>
          </TagListWrapper>
        </>
      }
    </Container>
  )
}

export default memo(TagsPage);