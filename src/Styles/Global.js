import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

.container {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0px;
  color: #1F1E1E;
  font-family: 'Inter', sans-serif;
}

a {
  text-decoration: none;
  color:inherit;
}

h1,
h2,
h3,
p {
  margin: 0px;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}
`;

export default GlobalStyle;
