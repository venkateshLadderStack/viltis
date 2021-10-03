import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const JoinUs = ({ text, caption, btnText }) => {
  return (
    <Wrapper>
      <Head>{text}</Head>
      <Caption>{caption}</Caption>
      <Link>
        <Button>{btnText}</Button>
      </Link>
    </Wrapper>
  );
};
export default JoinUs;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 100px 0px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1207%26quot%3b)' fill='none'%3e%3crect width='187.2' height='187.2' clip-path='url(%26quot%3b%23SvgjsClipPath1208%26quot%3b)' x='244.19' y='370.78' fill='url(%23SvgjsPattern1209)' transform='rotate(283.26%2c 337.79%2c 464.38)'%3e%3c/rect%3e%3cpath d='M805.96 555.52a5.6 5.6 0 1 0-11.08 1.62 5.6 5.6 0 1 0 11.08-1.62zM790.13 557.84a5.6 5.6 0 1 0-11.08 1.62 5.6 5.6 0 1 0 11.08-1.62zM774.3 560.15a5.6 5.6 0 1 0-11.08 1.63 5.6 5.6 0 1 0 11.08-1.63zM758.47 562.47a5.6 5.6 0 1 0-11.08 1.62 5.6 5.6 0 1 0 11.08-1.62zM835.31 535.05a5.6 5.6 0 1 0-11.09 1.62 5.6 5.6 0 1 0 11.09-1.62zM819.47 537.37a5.6 5.6 0 1 0-11.08 1.62 5.6 5.6 0 1 0 11.08-1.62zM803.64 539.69a5.6 5.6 0 1 0-11.08 1.62 5.6 5.6 0 1 0 11.08-1.62zM787.81 542a5.6 5.6 0 1 0-11.08 1.63 5.6 5.6 0 1 0 11.08-1.63zM864.65 514.58a5.6 5.6 0 1 0-11.08 1.63 5.6 5.6 0 1 0 11.08-1.63zM848.82 516.9a5.6 5.6 0 1 0-11.08 1.62 5.6 5.6 0 1 0 11.08-1.62zM832.99 519.22a5.6 5.6 0 1 0-11.08 1.62 5.6 5.6 0 1 0 11.08-1.62zM817.16 521.54a5.6 5.6 0 1 0-11.09 1.62 5.6 5.6 0 1 0 11.09-1.62z' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2.83' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3cpath d='M868.31 198.52999999999997 L924.9499999999999 163.82999999999998L921.92836153058 206.47836153058006z' stroke='%23037b0b' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='204.4' height='204.4' clip-path='url(%26quot%3b%23SvgjsClipPath1210%26quot%3b)' x='307.51' y='292.06' fill='url(%23SvgjsPattern1211)' transform='rotate(4.48%2c 409.71%2c 394.26)'%3e%3c/rect%3e%3crect width='227.48' height='227.48' clip-path='url(%26quot%3b%23SvgjsClipPath1212%26quot%3b)' x='868.71' y='188.58' fill='url(%23SvgjsPattern1213)' transform='rotate(225.62%2c 982.45%2c 302.32)'%3e%3c/rect%3e%3cpath d='M1255.43 120.6L1256.91 107.88 1269.64 106.53 1271.12 93.81 1283.86 92.46 1285.33 79.74 1298.07 78.39M1261.06 126.29L1262.54 113.57 1275.27 112.22 1276.75 99.5 1289.48 98.15 1290.96 85.43 1303.7 84.08M1266.69 131.97L1268.16 119.25 1280.9 117.9 1282.38 105.18 1295.11 103.83 1296.59 91.11 1309.33 89.76' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2.61' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3crect width='71.8' height='71.8' clip-path='url(%26quot%3b%23SvgjsClipPath1214%26quot%3b)' x='962.83' y='53.17' fill='url(%23SvgjsPattern1215)' transform='rotate(43.53%2c 998.73%2c 89.07)'%3e%3c/rect%3e%3cpath d='M973.01 332.17a5.6 5.6 0 1 0 10.17 4.7 5.6 5.6 0 1 0-10.17-4.7zM987.53 338.88a5.6 5.6 0 1 0 10.17 4.71 5.6 5.6 0 1 0-10.17-4.71zM1002.05 345.6a5.6 5.6 0 1 0 10.17 4.7 5.6 5.6 0 1 0-10.17-4.7zM1016.58 352.32a5.6 5.6 0 1 0 10.16 4.7 5.6 5.6 0 1 0-10.16-4.7zM937.25 333.26a5.6 5.6 0 1 0 10.17 4.7 5.6 5.6 0 1 0-10.17-4.7zM951.77 339.97a5.6 5.6 0 1 0 10.17 4.71 5.6 5.6 0 1 0-10.17-4.71zM966.29 346.69a5.6 5.6 0 1 0 10.17 4.7 5.6 5.6 0 1 0-10.17-4.7zM980.82 353.41a5.6 5.6 0 1 0 10.16 4.7 5.6 5.6 0 1 0-10.16-4.7z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3crect width='144' height='144' clip-path='url(%26quot%3b%23SvgjsClipPath1216%26quot%3b)' x='1086.05' y='188.66' fill='url(%23SvgjsPattern1217)' transform='rotate(242.05%2c 1158.05%2c 260.66)'%3e%3c/rect%3e%3cpath d='M72.84 373.26L60.99 378.12 53.65 367.63 41.8 372.49 34.46 361.99 22.61 366.85 15.27 356.36' stroke='%23e73635' stroke-width='1'%3e%3c/path%3e%3ccircle r='75.8259595924767' cx='24.04' cy='199.81' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3cpath d='M510.06 324.27L500.26 332.51 490.07 324.76 480.27 333.01 470.08 325.26 460.28 333.5 450.08 325.75M509.86 316.27L500.07 324.51 489.87 316.76 480.07 325.01 469.88 317.26 460.08 325.51 449.88 317.76M509.67 308.27L499.87 316.52 489.67 308.77 479.87 317.01 469.68 309.26 459.88 317.51 449.69 309.76' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1207'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='7.8' height='7.8' patternUnits='userSpaceOnUse' id='SvgjsPattern1209'%3e%3cpath d='M0 7.8L3.9 0L7.8 7.8' stroke='%23d3b714' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1208'%3e%3ccircle r='46.8' cx='337.79' cy='464.38'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='10.22' height='10.22' patternUnits='userSpaceOnUse' id='SvgjsPattern1211'%3e%3cpath d='M0 10.22L5.11 0L10.22 10.22' stroke='%23037b0b' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1210'%3e%3ccircle r='51.1' cx='409.71' cy='394.26'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='227.48' height='10.34' patternUnits='userSpaceOnUse' id='SvgjsPattern1213'%3e%3crect width='227.48' height='5.17' x='0' y='0' fill='%23037b0b'%3e%3c/rect%3e%3crect width='227.48' height='5.17' x='0' y='5.17' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1212'%3e%3ccircle r='56.87' cx='982.45' cy='302.32'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='71.8' height='7.18' patternUnits='userSpaceOnUse' id='SvgjsPattern1215'%3e%3crect width='71.8' height='3.59' x='0' y='0' fill='%23e73635'%3e%3c/rect%3e%3crect width='71.8' height='3.59' x='0' y='3.59' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1214'%3e%3ccircle r='17.95' cx='998.73' cy='89.07'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1217'%3e%3cpath d='M0 6L3 0L6 6' stroke='%23037b0b' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1216'%3e%3ccircle r='36' cx='1158.05' cy='260.66'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;

const Head = styled.h1`
  font-size: 42px;
  font-weight: 800;
  line-height: 60px;
  background: white;
`;

const Caption = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  background: white;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: green;
  font-weight: 600;
  font-size: 18px;
  border: 0px;
  cursor: pointer;
  color: white;
  transition-duration: 0.5s;
`;
