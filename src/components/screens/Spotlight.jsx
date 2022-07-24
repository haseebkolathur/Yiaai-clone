import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/banner-media.9be028553c9026ed8fa2.png";
import tefun from "../../assets/images/Tefun-logo.svg";
import spot from "../../assets/images/spot-min.jpeg";
import arrow from "../../assets/images/arrow.svg";
import apple_grey from "../../assets/images/grey-app-play.svg";
import android_grey from "../../assets/images/grey-and-play.svg";
import elipse from "../../assets/images/elipse.svg";
import line from "../../assets/images/lines-bg.svg";

export default function Spotlight() {
    return (
        <>
            <SpotSection>
                <SpotBg>
                    <SpotDetails className="details">
                        <Tefun>
                            <Img src={tefun} alt="tefun" />
                        </Tefun>
                        <Title>Technology Fundamental Program</Title>
                        <SubTitle>
                            കേരളത്തിലെ <Bold>20 ലക്ഷം </Bold>സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!
                        </SubTitle>
                        <Peragraph>
                            ടാൽറോപ്പിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്ഫോമായ 'യായ്'-ലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ. <br /> Tefun-ലൂടെ ടെക്ക്നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ
                            നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ 'Yiaai' മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                        </Peragraph>
                        <Powered>
                            <Img src={bannerImage} alt="media" />
                        </Powered>
                        <Subscribe>
                            <SubscribeBtn to="">Join for free</SubscribeBtn>
                            <RegGred>
                                <CampusReg to="">Register school</CampusReg>
                            </RegGred>
                        </Subscribe>
                    </SpotDetails>
                    <SpotImgContainer>
                        <SpotImg>
                            <Hero>
                                <Img className="hero" src={spot} alt="Icon" loading="lazy" />
                            </Hero>
                            <ArrowIcon src={arrow} alt="arrow" />
                        </SpotImg>
                        <StoreContent>
                            <Store>
                                <App target="_blank" href="https://apps.apple.com/in/app/yiaai-ott-community-platform/id1609634713">
                                    <Img src={apple_grey} alt="apple" />
                                </App>
                                <App target="_blank" href="https://play.google.com/store/apps/details?id=com.yiaai">
                                    <Img src={android_grey} alt="Android" />
                                </App>
                            </Store>
                        </StoreContent>
                    </SpotImgContainer>
                </SpotBg>
            </SpotSection>
        </>
    );
}

const SpotSection = styled.section`
    max-width: 1650px;
    margin: 0 auto;
    margin-top: 130px;
    padding-bottom: 80px;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        width: 200px;
        height: 200px;
        right: 2px;
        bottom: 5%;
        z-index: -1;
        background: url(${elipse}) no-repeat;
    }
`;
const SpotBg = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    padding: 5% 50px;
    border-radius: 35px;
    overflow: hidden;
    background-color: #f3f9eb;
    background-image: url(${line});
    background-position: top 0 left 10%;
    background-repeat: no-repeat;
    background-size: 1000px;
`;

const Powered = styled.div`
    margin-bottom: 25px;
    width: 80%;
    align-items: center;
`;
const SpotDetails = styled.div`
    width: 45%;
    position: relative;
    & p {
        
    }
`;
const Title = styled.h4`
    font-size: 24px;
    font-family: "gordita_medium";
    margin-bottom: 20px;
`;
const SubTitle = styled.h3`
    font-size: 45px;
    font-family: "EGGIndulekhaUni";
    font-weight: 800;
    max-width: 100%;
    margin-bottom: 30px;
`;
const Bold = styled.span`
    font-size: 45px;
    font-family: "EGGIndulekhaUni";
    color: #0fa76f;
`;
const Peragraph = styled.p`
    font-size: 18px;
    font-family: "gordita_regular";
    color: #545454;
    width: 90%;
    line-height: 1.3em;
    margin-bottom: 40px;
`;
const Subscribe = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`;
const ArrowIcon = styled.img`
    display: block;
    position: absolute;
    left: -15%;
    bottom: -12%;
    width: 25%;
    z-index: 3;
`;
const Tefun = styled.div`
    margin-bottom: 20px;
    width: 42%;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const SubscribeBtn = styled(Link)`
    cursor: pointer;
    display: block;
    margin-right: 30px;
    color: #fff;
    font-size: 18px;
    font-family: "gordita_medium";
    width: 238px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: 0.5s;
    background-size: 200% auto;
    background-image: linear-gradient(to right, #63bb4c 0%, #1898af 51%, #63bb4c 100%);
    &:hover {
        background-position: right center;
    }
`;
const CampusReg = styled(Link)`
    display: flex;
    align-items: center;
    color: #0fa76f;
    font-family: "gordita_medium";
    font-size: 18px;
    justify-content: center;
    cursor: pointer;
    background-color: #fff;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
`;
const RegGred = styled.div`
    background-image: linear-gradient(to right, #63bb4c 0%, #1898af 51%, #63bb4c 100%);
    background-size: 200% auto;
    padding: 2px;
    width: 242px;
    height: 70px;
    border-radius: 10px;
`;
const SpotImgContainer = styled.div`
    width: 53%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;
const SpotImg = styled.div`
    position: relative;
`;
const Hero = styled.div`
    overflow: hidden;
    border-radius: 10px;
    transform: rotate(2deg);
    & Img.hero {
        display: block;
        width: 100%;
        border-radius: 30px;
    }
`;
const StoreContent = styled.div`
    float: right;
    display: flex;
    align-items: center;
`;
const Store = styled.div`
    display: flex;
    width: 100%;
`;
const App = styled.a`
    margin-right: 10px;
    width: 170px;
    display: block;
    &:last-child {
        margin-right: 0;
    }
`;
