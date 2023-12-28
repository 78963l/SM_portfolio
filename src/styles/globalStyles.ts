import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import fontNanumsquare from "@/asset/fonts/nanumsquareround.css";
import fontPretendard from "@/asset/fonts/pretendardvariable.css";
import fontGmarketSans from "@/asset/fonts/GmarketSans.css";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${fontNanumsquare};
    ${fontPretendard};
    ${fontGmarketSans};
    *, *::before, *::after {
        font-family: 'Pretendard' !important;
        font-weight: 400;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        width : 100%;
        height: 100%;
    }
    body{
        max-width: 100%;
        height: 100%;
        background-image: none;
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
    };
    #__next {
        width: 100%;
        height: 100%;
    }
    ul, ol {
    list-style: none;
    };
    a {
    text-decoration: none;
    };
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
        border : none;
        background : none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    label{
        cursor: pointer;
    }
    strong{
        font-weight: 800 !important;
    }
    em{
        font-style: italic !important;
    }

    //테이블 상하 중앙 정렬
    thead, tbody, tfoot { vertical-align: middle }
    td, th, tr { vertical-align: inherit }
`;

export default GlobalStyles;
