import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --red: #e52e4d;
  --blue: #5429CC;
  --green: #33CC95;
  --blue-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969CB3;
  --shape: #FFFFFF;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
//REM = 1rem = 16px
html{
  @media (max-width: 1080px) {
    font-size: 93.75%; //15px
  }

  @media (max-width: 720px) {
    font-size: 87.5% //14px
  }
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased
}

body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button{
  cursor: pointer;
}

[disable]{
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay{
  position: fixed;
  background: rgb(0,0,0,0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
.react-modal-content{
  position: relative;
  width: 100%;
  max-width: 576px;
  background: var(--background);
  border-radius: 0.25rem;
  padding: 3rem;
}
`