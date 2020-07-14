import {createGlobalStyle} from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,500;1,700&display=swap');
:root{
    --bg-color:#fff;
    --primary-color:#fdf;
    --gray:#fee;
    --font-size:max(16px,3vw);
    --font-size-sub:max(2em,4.5vh);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
  background: url("https://i.imgur.com/4MuY3MR.png") no-repeat fixed;
  background-size: cover;
  font-family:'Roboto', sans-serif;
  color:#fff;
  overflow:hidden;
}

`;