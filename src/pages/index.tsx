import Head from "next/head";
import Layout from "@/layouts/layout";
import styled from "styled-components";

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  .left {
    width: 45%;
    padding-left: 5%;
    &_description-main {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 60px;
      p {
        margin-bottom: 25px;
      }
    }
    &_description-sub {
      font-size: 25px;
      line-height: 1.5;
      p {
        margin-bottom: 20px;
      }
    }
    &_description-btn {
      margin-top: 95px;
      width: 200px;
      height: 60px;
      button {
        font-size: 20px;
        color: white;
        background-color: #9a87eb;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  .right {
    width: 55%;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SM 포트폴리오</title>
      </Head>
      <ContentWrap>
        <div className="left">
          <div className="left_description-main">
            <p>안녕하세요! 👋</p>
            <p>도전을 즐기는 개발자의 포트폴리오 입니다.</p>
          </div>
          <div className="left_description-sub">
            <p>
              하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.
              <br />
              -사무엘존슨
            </p>
            <p>
              먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.
              <br />– 엘사 맥스웰
            </p>
            <p>
              겨울이 오면 봄이 멀지 않으리.
              <br />
              -셸리
            </p>
            <p>
              먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.
              <br />– 엘사 맥스웰
            </p>
            <p>
              만족할 줄 아는 사람은진정한 부자이고, 탐욕스러운 사람은진실로
              가난한 사람이다.
              <br />- 솔론
            </p>
          </div>
          <div className="left_description-btn">
            <button>프로젝트 보러가기</button>
          </div>
        </div>
        <div className="right">test</div>
      </ContentWrap>
    </Layout>
  );
}
