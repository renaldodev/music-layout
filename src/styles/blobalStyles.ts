import {createGlobalStyle} from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,500;1,700&display=swap');
:root{
    --bg-color:#fff;
    --primary-color:#fdf;
    --secundary-color:#fee;
    --font-size:max(16px,3vw);
    --font-size-sub:max(2em,4.5vh);
}

@font-face {
    font-family: PF;
    src: url(./fonts/FontsFree-Net-SFProDisplay-Regular-1.ttf);
}

@font-face {
    font-family:SF ;
    src: url(./fonts/FontsFree-Net-SFProDisplay-Ultralight.ttf);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
  background: url("https://i.imgur.com/4MuY3MR.png") no-repeat fixed;
  background-size: cover;
  height: 100vh;
  display:grid;
  place-items:center;
  font-family:'Roboto', sans-serif;
  color:#fff;
}

.active{
    background-color: rgba(0, 0, 0, 0.2);
}
`;