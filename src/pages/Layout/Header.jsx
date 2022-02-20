import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-primary);
  a {
    color: var(--color-primary);
  }
`

export default function Header() {
  return (
    <Nav>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/helloworld">Hello World</Link>
    </Nav>
  )
}