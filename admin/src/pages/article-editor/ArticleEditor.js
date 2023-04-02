import useConfirmPopup from "hooks/useConfirmPopup";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, ContentEditorWrapper, DropdownSelector, FormFieldWrapper, FormWrapper, InputWrapper, Label, MDEditorStyled, SelectWrapper, SubmitButton, TagItem, TagsWrapper, TextArea, TextInput, TextWrapper, ToolBar } from "./style";
import { set as lodashSet } from "lodash";

function ArticleEditor(props) {
  const { doOpen } = useConfirmPopup();
  const navigate = useNavigate();

  const { slug } = useParams();
  const articleData = useMemo(() => 
    props.currentViewArticle && {...props.currentViewArticle}, 
    [props.currentViewArticle]
  );

  const [mdContent, setMDContent] = useState("");
  const [tags, setTags] = useState([]);
  const [isEdited, setIsEdited] = useState(false);

  const goBack = async () => {
    if(isEdited) {
      const isComfirmed = await doOpen("Are you sure to get back? All your change will be lost!");
      if(!isComfirmed) {
        return;
      }
    }
    navigate("/article");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(!isEdited) {
      return;
    }
    const requestData = {
      ...articleData,
      tags: tags.join(",").trim(),
      content: mdContent
    };
    props.updateArticle(requestData);
    disableUpdate();
  }

  const onSelectTag = (e) => {
    setTags([
      ...tags,
      e.target.value
    ])
    setUpdatable();
  }

  const onTagClick = (tag) => {
    const newTagList = tags.filter(t => t !== tag);
    setTags(newTagList);
    setUpdatable();
  }

  const onTextChange = (e) => {
    e.preventDefault();
    setUpdatable();
    lodashSet(articleData, e.target.name, e.target.value || "");
  }

  const onMarkdownChange = (md) => {
    setMDContent(md);
    setUpdatable()
  }

  const setUpdatable = () => {
    if(!isEdited) {
      setIsEdited(true);
    }
  }

  const disableUpdate = () => {
    if(isEdited) {
      setIsEdited(false);
    }
  }

  useEffect(() => {
    props.updateCurrentViewSlug(slug);
    props.changePage("article");

    return () => {
      props.updateCurrentViewSlug("");
    }
  }, []);

  useEffect(() => {
    if (articleData && !articleData.content) {
      props.fetchArticleBySlug(slug);
    }
    if(articleData && articleData.content) {
      setMDContent(articleData.content);
    }
    if(articleData && articleData.tags) {
      setTags(articleData.tags || []);
    }
  }, [articleData]);

  return (
    <Container>

      <ToolBar>
        <TextWrapper onClick={goBack}>
          {"\u2190"} {"Back to articles"}
        </TextWrapper>
      </ToolBar>

      <FormWrapper>
        <FormFieldWrapper>
          <InputWrapper>
            <Label htmlFor="a-title"or>Title</Label>
            <TextInput id="a-title" name="title" defaultValue={articleData && articleData.title} onChange={onTextChange}/>
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="a-slug">Slug</Label>
            <TextInput id="a-slug" name="slug" defaultValue={articleData && articleData.slug} onChange={onTextChange}/>
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="a-banner">Banner</Label>
            <TextInput id="a-banner" name="banner" defaultValue={articleData && articleData.banner} onChange={onTextChange}/>
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="a-desc">Description</Label>
            <TextArea id="a-desc" name="description" defaultValue={articleData && articleData.description} onChange={onTextChange}/>
          </InputWrapper>

          <InputWrapper>
            <SelectWrapper>
              <Label htmlFor="a-tags">Tags</Label>
              <DropdownSelector id="a-tags" onChange={onSelectTag}>
                <option hidden>Choose tag</option>
                {
                  props.allTags.map(tag => {
                    if (tags.includes(tag)) {
                      return;
                    }
                    return (
                      <option value={tag} key={`sel-${tag}`}>{tag}</option>
                    )
                  })
                }
              </DropdownSelector>
            </SelectWrapper>

            <TagsWrapper>
              {
                tags.map(tag => (
                  <TagItem key={`list-${tag}`} onClick={() => onTagClick(tag)}>
                    {tag}
                  </TagItem>
                ))
              }
            </TagsWrapper>
          </InputWrapper>

          <SubmitButton onClick={onSubmit} enable={isEdited}>Update</SubmitButton>

        </FormFieldWrapper>

        <ContentEditorWrapper>
          <MDEditorStyled
            value={mdContent}
            onChange={onMarkdownChange}
          />
        </ContentEditorWrapper>
      </FormWrapper>

    </Container>  
  )
}

export default ArticleEditor;