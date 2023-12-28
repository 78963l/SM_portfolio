import styled from "styled-components";
import SmileSvg from "../asset/images/smile.svg";

const Navbar = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  background: white;
  .left {
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 25px;
    font-weight: 800;
    &_logo {
      width: 30px;
      height: 30px;
      margin: 30px;
    }
    &_title {
      color: black;
    }
  }
  .right {
    display: flex;
    color: black;
    margin: 10px;
    ul {
      display: flex;

      li {
        margin-right: 30px;
      }
    }
  }
`;

export default function Header() {
  return (
    <>
      <Navbar>
        <div className="left">
          <SmileSvg className="left_logo" />
          <div className="left_title">SM 포트폴리오</div>
        </div>
        <div className="right">
          <div className="logo">
            <ul>
              <li>홈</li>
              <li>프로젝트</li>
              <li>연락하기</li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}
