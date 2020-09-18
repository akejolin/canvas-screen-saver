const code=`@charset "UTF-8";
/* Base Styles
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* NOTE
html is set to 62.5% so that all the REM measurements throughout Skeleton
are based on 10px sizing. So basically 1.5rem = 15px :) */
html {
  font-size: 72.5%;
}

body {
  font-size: 1.5em;
  /* currently ems cause chrome bug misinterpreting rems on body element */
  line-height: 1.6;
  font-weight: 400;
  /*
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  */
  font-family: 'Playfair Display', serif;
  background-color: black;
  color: white;
}

.bg-primary {
  background-color: #E5DDDE;
}

.bg-negative {
  background-color: #4B4747;
}

.highlight-box {
  background-color: #F8C3B3;
  padding: .6em;
  margin: .6em .0em;
}

.color-first {
  color: #654A4E;
}

.bg-pink {
  background-color: #B78888;
}

.bg-dark-brown {
  background-color: #3F322A;
}

.bg-grey-red {
  background-color: #6D3737;
}

.no-margin {
  margin: 0;
}

.tag-label {
  background-color: #654A4E;
  color: white;
  padding: 8px;
  margin: 5px 0px;
  white-space: nowrap;
  border-radius: .4rem;
}

.tags-container {
  white-space: wrap;
  line-height: 4rem;
}

.tags-container :first-child {
  margin-left: 0;
}

.card {
  border: .95rem solid #fff;
  box-shadow: rgba(145, 106, 112, 0.25) 0 6px 24px;
  transition: box-shadow 0.4s ease-out;
  background-color: white;
  font-size: 1em;
  line-height: 1.8;
  font-weight: normal;
  margin-bottom: 3rem;
}

.card h5 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.card .category-title {
  margin-right: .3rem;
}

.category-title {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-family: sans-serif, Arial, Helvetica;
  font-weight: bold;
  color: #654A4E;
  margin-bottom: 0rem;
}

nav.main {
  text-transform: uppercase;
  font-size: .9rem;
  font-family: sans-serif, Arial, Helvetica;
  font-weight: bold;
  margin-bottom: 2rem;
}

nav.main > a {
  margin: 16px .5rem 16px .5rem;
}

nav.main a, nav.main a:link, nav.main a:visited, nav.main a:active, nav.main a:hover {
  color: #654A4E;
}

nav.main a, nav.main a:link, nav.main a:visited, nav.main a:active {
  text-decoration: none;
}

nav.main a:hover {
  text-decoration: underline;
}

#footer {
  margin: 3rem 0rem 4rem 0rem;
  text-align: center;
}

#footer hr {
  margin: 1rem 0rem 1rem 0rem;
}

#footer a {
  margin: 0rem 1rem;
}

.std-margins {
  margin: 10% 50%;
  min-width: 50%;
}

.quote-text {
  font-size: 3em;
}

section {
  height: 80vh;
  flex-grow: 0;
}

/*
* Skeleton V2.0.4
* Copyright 2014, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 12/29/2014
*/
/* Table of contents
––––––––––––––––––––––––––––––––––––––––––––––––––
- Grid
- Base Styles
- Typography
- Links
- Buttons
- Forms
- Lists
- Code
- Tables
- Spacing
- Utilities
- Clearing
- Media Queries
*/
/* Grid
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.site-box {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.column,
.columns {
  width: 100%;
  float: left;
  box-sizing: border-box;
}

/* For devices larger than 400px */
@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0;
  }
  .site-box {
    width: 100%;
    padding: 20px;
  }
}

/* For devices larger than 550px */
@media (min-width: 550px) {
  .container {
    width: 80%;
  }
  .site-box {
    width: 100%;
    padding: 10%;
  }
  .column,
  .columns {
    margin-left: 4%;
  }
  .column:first-child,
  .columns:first-child {
    margin-left: 0;
  }
  .one.column,
  .one.columns {
    width: 4.66666666667%;
  }
  .two.columns {
    width: 13.3333333333%;
  }
  .three.columns {
    width: 22%;
  }
  .four.columns {
    width: 30.6666666667%;
  }
  .five.columns {
    width: 39.3333333333%;
  }
  .six.columns {
    width: 48%;
  }
  .seven.columns {
    width: 56.6666666667%;
  }
  .eight.columns {
    width: 65.3333333333%;
  }
  .nine.columns {
    width: 74.0%;
  }
  .ten.columns {
    width: 82.6666666667%;
  }
  .eleven.columns {
    width: 91.3333333333%;
  }
  .twelve.columns {
    width: 100%;
    margin-left: 0;
  }
  .one-third.column {
    width: 30.6666666667%;
  }
  .two-thirds.column {
    width: 65.3333333333%;
  }
  .one-half.column {
    width: 48%;
  }
  /* Offsets */
  .offset-by-one.column,
  .offset-by-one.columns {
    margin-left: 8.66666666667%;
  }
  .offset-by-two.column,
  .offset-by-two.columns {
    margin-left: 17.3333333333%;
  }
  .offset-by-three.column,
  .offset-by-three.columns {
    margin-left: 26%;
  }
  .offset-by-four.column,
  .offset-by-four.columns {
    margin-left: 34.6666666667%;
  }
  .offset-by-five.column,
  .offset-by-five.columns {
    margin-left: 43.3333333333%;
  }
  .offset-by-six.column,
  .offset-by-six.columns {
    margin-left: 52%;
  }
  .offset-by-seven.column,
  .offset-by-seven.columns {
    margin-left: 60.6666666667%;
  }
  .offset-by-eight.column,
  .offset-by-eight.columns {
    margin-left: 69.3333333333%;
  }
  .offset-by-nine.column,
  .offset-by-nine.columns {
    margin-left: 78.0%;
  }
  .offset-by-ten.column,
  .offset-by-ten.columns {
    margin-left: 86.6666666667%;
  }
  .offset-by-eleven.column,
  .offset-by-eleven.columns {
    margin-left: 95.3333333333%;
  }
  .offset-by-one-third.column,
  .offset-by-one-third.columns {
    margin-left: 34.6666666667%;
  }
  .offset-by-two-thirds.column,
  .offset-by-two-thirds.columns {
    margin-left: 69.3333333333%;
  }
  .offset-by-one-half.column,
  .offset-by-one-half.columns {
    margin-left: 52%;
  }
}

/* Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: bold;
}

h1 {
  font-size: 4.0rem;
  line-height: 1.2;
  letter-spacing: -.1rem;
}

h2 {
  font-size: 3.6rem;
  line-height: 1.25;
  letter-spacing: -.1rem;
}

h3 {
  font-size: 3.0rem;
  line-height: 1.3;
  letter-spacing: -.1rem;
}

h4 {
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -.08rem;
}

h5 {
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -.05rem;
}

h6 {
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0;
}

/* Larger than phablet */
@media (min-width: 550px) {
  h1 {
    font-size: 5.0rem;
  }
  h2 {
    font-size: 4.2rem;
  }
  h3 {
    font-size: 3.6rem;
  }
  h4 {
    font-size: 3.0rem;
  }
  h5 {
    font-size: 2.4rem;
  }
  h6 {
    font-size: 1.5rem;
  }
}

p {
  margin-top: 0;
}

/* Links
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a {
  color: #654A4E;
}

a:hover {
  color: #B78888;
}

/* Buttons
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;
}

.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
  color: #333;
  border-color: #888;
  outline: 0;
}

.button.button-primary,
button.button-primary,
input[type="submit"].button-primary,
input[type="reset"].button-primary,
input[type="button"].button-primary {
  color: #FFF;
  background-color: #33C3F0;
  border-color: #33C3F0;
}

.button.button-primary:hover,
button.button-primary:hover,
input[type="submit"].button-primary:hover,
input[type="reset"].button-primary:hover,
input[type="button"].button-primary:hover,
.button.button-primary:focus,
button.button-primary:focus,
input[type="submit"].button-primary:focus,
input[type="reset"].button-primary:focus,
input[type="button"].button-primary:focus {
  color: #FFF;
  background-color: #1EAEDB;
  border-color: #1EAEDB;
}

/* Forms
–––––––––––––––––––––––––––––––––––––––––––––––––– */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea,
select {
  height: 38px;
  padding: 6px 10px;
  /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
}

/* Removes awkward default styles on some inputs for iOS */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

textarea {
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px;
}

input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="text"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
  border: 1px solid #33C3F0;
  outline: 0;
}

label,
legend {
  display: block;
  margin-bottom: .5rem;
  font-weight: 600;
}

fieldset {
  padding: 0;
  border-width: 0;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline;
}

label > .label-body {
  display: inline-block;
  margin-left: .5rem;
  font-weight: normal;
}

/* Lists
–––––––––––––––––––––––––––––––––––––––––––––––––– */
ul {
  list-style: circle inside;
}

ol {
  list-style: decimal inside;
}

ol, ul {
  padding-left: 0;
  margin-top: 0;
}

ul ul,
ul ol,
ol ol,
ol ul {
  margin: 1.5rem 0 1.5rem 3rem;
  font-size: 90%;
}

li {
  margin-bottom: 1rem;
}

/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */
code {
  padding: .2rem .5rem;
  margin: 0 .2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 4px;
}

pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre;
}

/* Tables
–––––––––––––––––––––––––––––––––––––––––––––––––– */
th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1;
}

th:first-child,
td:first-child {
  padding-left: 0;
}

th:last-child,
td:last-child {
  padding-right: 0;
}

/* Spacing
–––––––––––––––––––––––––––––––––––––––––––––––––– */
button,
.button {
  margin-bottom: 1rem;
}

input,
textarea,
select,
fieldset {
  margin-bottom: 1.5rem;
}

pre,
blockquote,
dl,
figure,
table,
p,
ul,
ol,
form {
  margin-bottom: 2.5rem;
}

/* Utilities
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.u-full-width {
  width: 100%;
  box-sizing: border-box;
}

.u-max-full-width {
  max-width: 100%;
  box-sizing: border-box;
}

.u-pull-right {
  float: right;
}

.u-pull-left {
  float: left;
}

/* Misc
–––––––––––––––––––––––––––––––––––––––––––––––––– */
hr {
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  border-width: 0;
  border-top: 1px solid #654A4E;
}

/* Clearing
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Self Clearing Goodness */
.container:after,
.row:after,
.u-cf {
  content: "";
  display: table;
  clear: both;
}

/* Media Queries
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
Note: The best way to structure the use of media queries is to create the queries
near the relevant code. For example, if you wanted to change the styles for buttons
on small devices, paste the mobile query code up in the buttons section and style it
there.
*/
/* Larger than mobile */
/* Larger than phablet (also point when grid becomes active) */
/* Larger than tablet */
/* Larger than desktop */
/* Larger than Desktop HD */
`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
