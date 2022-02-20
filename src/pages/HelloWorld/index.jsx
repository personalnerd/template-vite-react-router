import styled from "styled-components"

const Title = styled.h1`
       color: var(--color-primary);
    text-align: center;
`

export default function HelloWorld() {
  return <Title>Just a Hello World 👋</Title>
}