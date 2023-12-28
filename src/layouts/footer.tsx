import { styled } from "styled-components";
import Github from "../asset/images/github.svg";

const Navbar = styled.footer`
  display: flex;
  position: absolute;
  width: 100%;
  height: 140px;
  bottom: 0px;
  background-color: lightgrey;
  color: black;
  align-items: center;
  justify-content: space-between;
  .left {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 80px;
    font-size: 15px;
    line-height: 1.5;
  }
  .right {
    display: flex;
    margin: 80px;
    &_logo {
      width: 100%;
      height: 100%;
    }
    button {
      width: 30px;
      height: 30px;
    }
  }
`;

export default function Footer() {
  // github 페이지 띄우기
  const githubPageOpen = () => {
    window.open("https://github.com/78963l");
  };

  return (
    <Navbar>
      <div className="left">
        <div className="left_title">SM 포트폴리오</div>
        <div className="left_explan">
          Copyright 2024. SM. All Rights Reserved.
        </div>
      </div>
      <div className="right">
        <button
          onClick={() => {
            githubPageOpen();
          }}
        >
          <Github className="right_logo" />
        </button>
      </div>
    </Navbar>
  );
}
