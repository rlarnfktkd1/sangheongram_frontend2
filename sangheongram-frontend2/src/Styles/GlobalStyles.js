// 글로벌 스타일

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans&display=swap');
    * {
        box-sizing:border-box;
    }
    body {
        /* font-family: 'Nanum Gothic', sans-serif; */
        font-family: 'Open Sans', sans-serif;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.blackColor};
        font-size: 14px;
    }
    a{
        color:${props => props.theme.darkBlueColor};
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    input:focus {
        outline:none
    }
`;
