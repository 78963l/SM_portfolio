import styled from "styled-components";

const Navbar = styled.nav`
  .navbar {
    &_logo {
      width: 300px;
      height: 100px;
    }
  }
`;

export default function Header() {
  return (
    <>
      <Navbar>
        <div className="navbar_logo">header</div>
      </Navbar>
    </>
  );
}
