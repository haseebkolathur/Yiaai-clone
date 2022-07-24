import React from 'react'
import styled from 'styled-components'

export default function Technologies() {
  return (
    <SectionContainer>
        <SectionWrapper>
            <Heading>പുതിയ ടെക്ക്നോളജികൾ മനസ്സിലാക്കാം</Heading>
            <SubHeading>ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന സിലബസ്.</SubHeading>
            <MainContainer>
                <TechContainer>
                    <TechItem>
                        <ImageBox>
                            <Img src={require("../../assets/images/ai.jpg")} alt="Image"/>
                        </ImageBox>
                        <Title>Artificial Intelligence</Title>
                    </TechItem>
                    <TechItem>
                        <ImageBox>
                            <Img src={require("../../assets/images/robotics.jpg")} alt="Image"/>
                        </ImageBox>
                        <Title>Robotics</Title>
                    </TechItem>
                    <TechItem>
                        <ImageBox>
                            <Img src={require("../../assets/images/meta.jpg")} alt="Image"/>
                        </ImageBox>
                        <Title>Metaverse</Title>
                    </TechItem>
                    <TechItem>
                        <ImageBox>
                            <Img src={require("../../assets/images/3d.jpg")} alt="Image"/>
                        </ImageBox>
                        <Title>3D Printing</Title>
                    </TechItem>
                    <TechItem>
                        <ImageBox>
                            <Img src={require("../../assets/images/Group+49584.jpg")} alt="Image"/>
                        </ImageBox>
                        <Title>Web 3.0</Title>
                    </TechItem>
                    <TechItem>
                        <ImageBox>
                            <Img src={require("../../assets/images/ar&vr.jpg")} alt="Image"/>
                        </ImageBox>
                        <Title>AR & VR</Title>
                    </TechItem>
                    <TechItem>
                        <ImageBox>
                            <Img src={require("../../assets/images/iot.jpg")} alt="Image"/>
                        </ImageBox>
                        <Title>IoT</Title>
                    </TechItem>
                    <TechItem>
                        <ImageBox>
                            <Img src={require("../../assets/images/car.jpg")} alt="Image"/>
                        </ImageBox>
                        <Title>Driverless Cars</Title>
                    </TechItem>
                    <Topic>
                        <TopicImg src={require("../../assets/images/card.svg").default} alt="Image"/>
                    </Topic>
                </TechContainer>
            </MainContainer>
        </SectionWrapper>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
    text-align: center;
    padding: 50px 0px;
`;
const SectionWrapper = styled.section`
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
`;
const Heading = styled.h2`
    font-family: "EGGIndulekhaUni";
    position: relative;
    font-size: 45px;
    margin-bottom: 30px;
    color: #0fa76f;
`;
const SubHeading = styled.p`
    margin: 0px auto;
    max-width: 500px;
    font-size: 22px;
    font-family: "gordita_regular";
`;
const MainContainer = styled.div`
    margin-top: 40px;
    width: 100%;
`;
const TechContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    position: relative;
`;
const TechItem = styled.li`
    width: calc(25% - 20px);
    border-radius: 10px;
    margin: 0px 10px 20px;
    padding: 15px;
    &:first-child{
        background-color: #e3f4e6;
    }
    &:nth-child(2){
        background-color: #fff8e4;
    }
    &:nth-child(3){
        background-color: #e2f9dd;
    }
    &:nth-child(4){
        background-color: #efeafa;
    }
    &:nth-child(5){
        background-color: #fff6ed;
    }
    &:nth-child(6){
        background-color: #ebf2fa;
    }
    &:nth-child(7){
        background-color: #e3f4e6;
    }
    &:nth-child(8){
        background-color: #f9eefb;
    }
`;
const ImageBox = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    display: block;
`;
const Title = styled.span`
    display: block;
    font-size: 18px;
    margin: 20px 0px 5px;
    font-family: "gordita_medium";
`;
const Topic = styled.div`
    position: absolute;
    right: -93px;
    top: 64%;
    width: 20%;
`;
const TopicImg = styled.img`
    width: 100%;
    display: block;
`;
