import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
img{
    display: block;
    max-width: 100%;
    height: auto;
}

html{
    box-sizing: border-box;
}

body{
    background-color: ${({theme})=>theme.colors.bodyColor} ;
}

*,
*::before,
*::after{
    box-sizing: inherit;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.link {
    text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p{
    margin: 0;
}
`