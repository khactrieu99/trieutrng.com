import Input from "components/tags/input";
import TagList from "components/tags/tag-list";
import { memo, useEffect } from "react";
import { Container, InputContainerWrapper, TagListWrapper } from "./style";

function TagsPage(props) {
  useEffect(() => {
    props.changePage("tag");
  });

  return (
    <Container>
      <InputContainerWrapper>
        <Input/>
      </InputContainerWrapper>

      <TagListWrapper>
        <TagList/>
      </TagListWrapper>
    </Container>
  )
}

export default memo(TagsPage);