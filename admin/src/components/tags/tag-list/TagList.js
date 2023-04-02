import useConfirmPopup from "hooks/useConfirmPopup";
import { memo, useMemo } from "react";
import { Container, TagItem } from "./style";
import useAuth from "hooks/useAuth";

function TagList(props) {
  const {sessionExists} = useAuth()
  const { doOpen } = useConfirmPopup();
  const allTags = useMemo(() => props.allTags, [props.allTags]);

  const removeTag = async (tag) => {
    const isConfirmed = await doOpen(`Are you sure to remove #${tag}? This action can not be undo!`);
    if (isConfirmed) {
      props.removeTag(tag)
    }
  }

  return (
    <Container>
      { 
        allTags.map(tag => 
          <TagItem key={tag}
            onClick={() => removeTag(tag)}> 
            {`# ${tag}`} 
          </TagItem>  
        )
      }
    </Container>
  )
}

export default memo(TagList);