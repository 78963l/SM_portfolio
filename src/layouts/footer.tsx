import { styled } from "styled-components";
import Github from "../asset/images/github.svg";

const Navbar = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  height: 110px;
  bottom: 0px;
  background-color: white;
  color: black;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    margin: 40px;
  }
  .right {
    display: flex;
    margin: 40px;
  }
`;

export default function Footer() {
  return (
    <Navbar>
      <div className="left">
        <div className="left_title">SM 포트폴리오</div>
        <div className="left_explan">
          Copyright 2024. SM. All Rights Reserved.
        </div>
      </div>
      <div className="right">
        <Github />
      </div>
    </Navbar>
  );
}
