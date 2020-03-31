<template>
  <div class="box">
    <div class="loader-01"></div>
  </div>
</template>
<style scoped>

body {
    background: #323943;
    text-align: center;
    /* width: 960px; */
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: sans-serif;
    color: rgba(200, 200, 200, 0.5);
}
body *,
body *:before,
body *:after {
    box-sizing: inherit;
}
.box {
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 1px solid currentcolor;
    border-radius: 3px;
    font-size: 30px;
    color: rgba(200, 200, 200, 0.5);
    padding: 1em;
    margin-bottom: .25em;
    vertical-align: top;
    -webkit-transition: .3s color, .3s border;
    transition: .3s color, .3s border;
}
.box:hover {
    color: #d60b52;
    font-size: 0;
    padding: 0;
    border-width: 3px;
    line-height: 200px;
}
.box:hover [class*="loader-"] {
    font-size: 70px;
    line-height: 200px;
}
[class*="loader-"] {
    display: inline-block;
    width: 1em;
    height: 1em;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
}
.loader-01 {
    border: .2em dotted currentcolor;
    border-radius: 50%;
    -webkit-animation: 1s loader-01 linear infinite;
    animation: 1s loader-01 linear infinite;
}
@-webkit-keyframes loader-01 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes loader-01 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>