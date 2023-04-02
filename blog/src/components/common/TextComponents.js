const { default: styled } = require("styled-components");

export const TextComponent = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.textColor || props.theme.textColor};
  letter-spacing: ${props => props.letterSpacing || props.theme.letterSpacing || "normal"};
`

export const TextHover = styled(TextComponent)`
  cursor: pointer;
  padding: 1px 0;
  &:hover {
    background: ${props => props.theme.mainColor};
    color: #fff;
  }
`

export const TextUnderlinedHover = styled(TextHover)`
  border-bottom: 3px solid ${props => props.theme.mainColor};
`