import React from 'react'
import styled from 'styled-components'
import medal from "../../assets/images/medal+.svg"
import certificate from "../../assets/images/certificate.png"
import arrow from "../../assets/images/arrow.svg"

export default function Certification() {
  return (
        <CertificateSection>
            <WrapperContainer>
                <Program>
                    <Medal>
                        <Img src={medal} alt="Image"/>
                    </Medal>
                    <Sub>
                        <Title>Certification</Title>
                        <SubTitle>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</SubTitle>
                    </Sub>
                    <Certificate>
                        <Img src={certificate} alt="Image"/>
                    </Certificate>
                    <Arrow>
                        <Img src={arrow} alt="Image"/>
                    </Arrow>
                </Program>
            </WrapperContainer>
        </CertificateSection>
  )
}
const CertificateSection = styled.section`
    padding: 80px 0px;
`;
const WrapperContainer = styled.section`
    width: 90%;
    margin: 0 auto;
`;
const Program = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    background-image: linear-gradient(to right, #63bb4c 0%, #1898af 100%);
    border-radius: 20px;
    min-height: 300px;
    padding-left: 50px;
`;
const Medal = styled.div`
    position: absolute;
    display: block;
    width: 3%;
    top: 0px;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Sub = styled.div`
    width: 50%;
`;
const Title = styled.h3`
    color: #ffffff;
    font-size: 35px;
    font-family: "gordita_medium";
`;
const SubTitle = styled.p`
    color: #ffffff;
    font-family: "gordita_regular";
    font-size: 20px;
`;
const Certificate = styled.div`
    position: absolute;
    display: block;
    width: 550px;
    bottom: -63px;
    right: 7%;
`;
const Arrow = styled.div`
    display: block;
    position: absolute;
    bottom: -130px;
    right: 550px;
`;
