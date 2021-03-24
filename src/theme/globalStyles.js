import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
    height: 100vh;
}

* {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    text-decoration: none;

}

h1, h2, h3, h4, h5 {
  font-family: 'Lato', sans-serif;
  font-weight: 600;
}

h1, h2 {
  color: #1A3B79;
}

p {
  font-family: 'Lato', sans-serif;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 26px;
}

h3{
  font-size: 20px;
}

h4{
  font-size: 16px;
}

a {
  font-size: 16px;
  color: rgba(0, 0, 0, 65%);
  transition: all 0.2s ease;
}

a:hover {
  color: #1A3B79
}

a:active {
  color: #1A3B79;
}

` 

export default GlobalStyle;
