import React from 'react'
import Img1 from "../../assets/images/phone-g-call.svg";
import Img2 from "../../assets/images/scissors.svg";
import Img3 from "../../assets/images/certificate-r.svg";
import Img4 from "../../assets/images/devices.svg";
import Img5 from "../../assets/images/certificate.svg";
import styled from 'styled-components';
export default function SchoolTefun() {
  return (
        <SectionContainer>
            <WrapperContainer className='wrapper'>
                <Heading>
                    <Title>
                        സ്കൂളുകൾക്ക്<Sm>  Tefun<br/></Sm> പ്രോഗ്രാമിന്റെ ഭാഗമാകാം
                    </Title>
                </Heading>
                <Details>
                    <Card>
                        <DetailContainer className='bg'>
                            <ImageContainer className='round'>
                                <Img src={Img1} alt="Image"/>
                            </ImageContainer>
                        </DetailContainer>
                        <Discription><Bold>Tefun </Bold>പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് <Bold>Talrop</Bold>-ന്റെ ടീമുമായി<Phone href="https://wa.me/+918589998744" target="_blank"><Number> 858 999 8744</Number></Phone>  എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.</Discription>
                    </Card>
                    <Card>
                        <DetailContainer className='bg'>
                            <ImageContainer className='round'>
                                <Img src={Img2} alt="Image"/>
                            </ImageContainer>
                        </DetailContainer>
                        <Discription>സ്കൂളിന്റെ ലോഗോയും അവശ്യ വിവരങ്ങളും നൽകുക.</Discription>
                    </Card>
                    <Card>
                        <DetailContainer className='bg'>
                            <ImageContainer className='round'>
                                <Img src={Img3} alt="Image"/>
                            </ImageContainer>
                        </DetailContainer>
                        <Discription>സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video  ഡിജിറ്റലായി<Bold> Talrop </Bold>നൽകുന്നതാണ്.</Discription>
                    </Card>
                    <Card>
                        <DetailContainer className='bg'>
                            <ImageContainer className='round'>
                                <Img src={Img4} alt="Image"/>
                            </ImageContainer>
                        </DetailContainer>
                        <Discription>Mobile, Tab, Laptop, Desktop Computer എന്നിവയിൽ ഏതെങ്കിലും ഡിവൈസുകൾ ഉപയോഗിച്ച്  Talrop ലഭ്യമാക്കുന്ന Web, Android,iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ കുട്ടികൾക്ക് പഠിക്കുവാൻ സാധിക്കും.</Discription>
                    </Card>
                    <Card>
                        <DetailContainer className='bg'>
                            <ImageContainer className='round'>
                                <Img src={Img5} alt="Image"/>
                            </ImageContainer>
                        </DetailContainer>
                        <Discription>വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.</Discription>
                    </Card>
                </Details>
                <JoinButton>Join for free</JoinButton>
            </WrapperContainer>
        </SectionContainer>
  )
}

const SectionContainer = styled.section`
    padding: 50px 0px;
`;
const WrapperContainer = styled.section``;
const Heading = styled.h4`
    text-align: center;
    margin-bottom: 80px;
`;
const Title = styled.span`
    color: #0fa76f;
    font-size: 40px;
    display: inline;
    font-family: "EGGIndulekhaUni";
`;
const Sm = styled.span`
    font-size: 40px;
    font-family: "gordita_medium";
    color: #000;
`;
const Details = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0px auto 35px;
    position: relative;
    gap: 30px;
`;
const Card = styled.li`
    width: 30%;
    position: relative;
    margin-bottom: 30px;
    text-align: center;
    :first-child{
        .bg{
            background: #009a66 !important;
        }
        .round{
            border: 2px solid #009a66 !important;
        }
    }
    :nth-child(2){
        .bg{
            background: #fbb82c !important;
        }
        .round{
            border: 2px solid #fbb82c !important;
        }
    }
    :nth-child(3){
        .bg{
            background: #ff5b2f !important;
        }
        .round{
            border: 2px solid #ff5b2f !important;
        }
    }
    :nth-child(4){
        .bg{
            background: #b257ff !important;
        }
        .round{
            border: 2px solid #b257ff !important;
        }
    }
    :nth-child(5){
        .bg{
            background: #4c9afe !important;
        }
        .round{
            border: 2px solid #4c9afe !important;
        }
    }
`;
const DetailContainer = styled.div`
    width: 150px;
    height: 150px;
    margin: 0px auto 50px;
    border-radius: 30px;
    transform: rotate(45deg);
    position: relative;
`;
const ImageContainer = styled.span`
    position: absolute;
    bottom: 25%;
    right: -20%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
`;
const Img = styled.img`
    display: block;
    width: 40%;
    transform: rotate(-45deg);
`;
const Discription = styled.h4`
    margin: 0px auto;
    font-family: "gordita_regular";
    font-size: 18px;
`;
const Bold = styled.span`
    font-weight: 700;
`;
const Phone = styled.a``;
const Number = styled.span`
    color: #0fa76f;
    font-family: "gordita_medium";
    white-space: nowrap;
`;
const JoinButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 0px auto;
    color: #ffffff;
    font-size: 18px;
    font-family: "gordita_medium";
    width: 200px;
    height: 60px;
    transition:  0.5s ;
    background-size: 200% auto;
    background-image: linear-gradient( to right, #63bb4c 0%, #1898af 51%, #63bb4c 100%);
    cursor: pointer;
    &:hover {
        background-position: right center;
    }
`;
