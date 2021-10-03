import React from "react";
import styled from "styled-components";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const InfoCard = ({ imageUrl, name, position, email, phone }) => {
  return (
    <Wrapper className="row">
      <ImageContainer className="col-sm-12 col-md-6">
        <Image src={imageUrl} alt="" />
      </ImageContainer>
      <Info className="col-sm-12 col-md-6">
        <H3>{name}</H3>
        <H4>{position}</H4>
        <P>
          <FiPhoneCall />
          <Number>{phone}</Number>
        </P>

        <P>
          <FiMail />
          <Number>{email}</Number>
        </P>
      </Info>
    </Wrapper>
  );
};

export default InfoCard;

const Wrapper = styled.div`
  padding: 20px 0px;
  border-radius: 5px;
  margin: 20px 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ImageContainer = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1008%26quot%3b)' fill='none'%3e%3cuse xlink:href='%23SvgjsSymbol1015' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1015' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1008'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1012'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1013'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1010'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1011'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1009'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1014'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1015'%3e%3cuse xlink:href='%23SvgjsPath1009' x='30' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='30' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='30' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='30' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='30' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='30' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='30' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='30' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='30' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='30' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='90' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='90' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='90' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='90' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='90' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1012' x='90' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='90' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='90' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='90' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='90' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='150' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='150' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='150' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='150' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='150' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='150' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1012' x='150' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='150' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='150' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='150' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='210' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1012' x='210' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='210' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='210' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='210' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='210' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='210' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='210' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='210' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='210' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='270' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='270' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1012' x='270' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='270' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='270' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='270' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='270' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='270' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='270' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='270' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='330' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='330' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='330' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='330' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='330' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='330' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='330' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='330' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='330' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='330' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='390' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='390' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='390' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='390' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='390' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='390' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='390' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1014' x='390' y='450' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='390' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='390' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='450' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1014' x='450' y='90' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='450' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='450' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1012' x='450' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1014' x='450' y='330' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='450' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='450' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='450' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='450' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='510' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='510' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='510' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='510' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='510' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='510' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='510' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='510' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='510' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='510' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1014' x='570' y='30' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1012' x='570' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='570' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='570' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='570' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='570' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='570' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='570' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='570' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='570' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='630' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1012' x='630' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='630' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='630' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='630' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='630' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='630' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='630' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='630' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='630' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='690' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='690' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1014' x='690' y='150' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='690' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='690' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='690' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1010' x='690' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1011' x='690' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1013' x='690' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1009' x='690' y='570' stroke='%231c538e'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");
  background-position: center;
`;

const Info = styled.div`
  border-left: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3cpath d='M822.468%2c446.157C858.663%2c446.556%2c889.011%2c422.448%2c907.772%2c391.492C927.366%2c359.162%2c936.996%2c319.74%2c919.343%2c286.311C900.645%2c250.905%2c862.479%2c228.431%2c822.468%2c229.958C784.675%2c231.401%2c754.903%2c259.613%2c737.608%2c293.248C721.853%2c323.89%2c723.638%2c359.522%2c740.357%2c389.649C757.637%2c420.786%2c786.859%2c445.765%2c822.468%2c446.157' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1125.2953634481023 257.9306992136346L1207.772635138387 311.60388664415007 1213.7731158535657 225.79301455654382z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1356.7757255401812 146.817855216277L1435.7955246301472 180.35976991191018 1446.5984971286139 45.05911392914457z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M27.732434691279423 622.6040830277921L119.46841006237092 612.9622434900626 59.13766307023093 480.1792002022901z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;

  @media screen and (max-width: 767px) {
    border-left: 0px;
    border-top: 1px solid grey;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;
  object-fit: contain;
  border-radius: 5px;
`;

const H3 = styled.h3`
  font-size: 30px;
  font-weight: 600;
  line-height: 50px;
`;

const H4 = styled.h4`
  font-size: 22px;
  font-weight: 800;
  line-height: 40px;
`;

const P = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  display: flex;
  align-items: center;
  background: white;
`;

const Number = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  margin-left: 15px;
`;
