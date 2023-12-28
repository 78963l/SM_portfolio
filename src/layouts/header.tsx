import styled, { keyframes } from "styled-components";
import SmileSvg from "../asset/images/smile.svg";

export default function Header() {
  const test = () => {
    alert("개발중입니다");
  };

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
              <li>
                <button
                  onClick={() => {
                    test();
                  }}
                >
                  홈
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    test();
                  }}
                >
                  프로젝트
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    test();
                  }}
                >
                  연락하기
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}

const colorChange = keyframes`
	//단계 별로 변화를 주는 코드
	0%{
      fill:green;
      opacity: 1;
    }
    
    30%{
      fill:orange;
      opacity: 0.5;
    }
    
    50%{
    	fill:blue;
      opacity: 1;
    }
    
    70%{
    	fill:grey;
      opacity: 0.5;
    }
    
    100%{
    	top: 20px;
    	fill:black;
      opacity: 1;
    }
`;

const Navbar = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 1;
  .left {
    display: flex;
    align-items: center;
    margin-left: 20px;
    &_logo {
      width: 40px;
      height: 40px;
      margin: 20px;
      animation: ${colorChange} 5s 1s infinite;
    }
    &_title {
      font-size: 25px;
      font-weight: 800;
      color: black;
    }
  }
  .right {
    display: flex;
    color: black;
    margin: 10px;
    font-size: 16px;
    ul {
      display: flex;

      li {
        margin-right: 30px;
      }
    }
  }
`;
