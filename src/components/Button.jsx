import { memo } from "react"
import styled from "styled-components"
const title = 'change color theme - light and dark'

const Button = memo(({children, handleClick})=>{
    return (
        <StyledButton onClick={handleClick} title={title}>{children}</StyledButton>
    )
})
export default Button

const StyledButton = styled.button`
    border:none;
    background:none;
    cursor:pointer;
`