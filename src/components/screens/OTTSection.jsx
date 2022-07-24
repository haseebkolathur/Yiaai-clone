import React from 'react'
import apple from "../../assets/images/green-app-play.svg"
import android from "../../assets/images/green-and-play.svg"
import AppImg from "../../assets/images/group.png"
import line from "../../assets/images/lines-bg.svg";
import styled from 'styled-components'

export default function OTTSection() {
  return (
        <SectionContainer>
            <Container className='wrapper'>
                <LeftAppSection>
                    <Title>
                    ടാൽറോപിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്‌ഫോമായ യായിലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ
                    </Title>
                    <Sub><Bold>Tefun</Bold>-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ <I>yia.ai</I> മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.</Sub>
                    <Store>
                        <App target="_blank" href="https://apps.apple.com/in/app/yiaai-ott-community-platform/id1609634713">
                            <Img src={apple} alt="Apple" />
                        </App>
                        <App target="_blank" href="https://play.google.com/store/apps/details?id=com.yiaai">
                            <Img src={android} alt="Android" />
                        </App>
                    </Store>
                </LeftAppSection>
                <RightAppSection>
                    <AppContainer>
                        <Img src={AppImg} alt="Image" />
                    </AppContainer>
                </RightAppSection>
            </Container>
        </SectionContainer>
  )
}

const SectionContainer = styled.section`
    padding: 50px 0;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: #f3f9eb;
    background-image: url(${line});
    background-repeat: no-repeat;
    background-position: top 0 left 10%;
    background-size: 700px;
    border-radius: 20px;
    padding: 80px;
`;
const LeftAppSection = styled.div`
    width: 50%;
`;
const Title = styled.h3`
    font-size: 35px;
    width: 90%;
    font-family: "EGGIndulekhaUni";
    margin-bottom: 35px;
`;
const Sub = styled.p`
    width: 90%;
    font-size: 20px;
    color: #646563;
    margin-bottom: 30px;
    line-height: 1.3em;
    font-family: "gordita_regular";
`;
const Bold = styled.span`
    font-weight: 700;
`;
const I = styled.span`
    font-size: 22px;
`;
const Store = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
`;
const App = styled.a`
    display: block;
    margin-right: 10px;
    width: 150px;
    cursor: pointer;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const RightAppSection = styled.div`
    width: 50%;
    height: 100%;
`;
const AppContainer = styled.div`
    display: block;
    width: 53%;
    position: absolute;
    bottom: -20%;
    right: 0%;
`;
