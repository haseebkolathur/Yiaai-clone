import React from 'react'
import styled from 'styled-components'
import join from "../../assets/images/join-img.png"

export default function SchoolJoin() {
  return (
        <SectionContainer>
            <Container className="wrapper">
                    <Heading>വിദ്യാർത്ഥികൾക്ക്<Sm>  Tefun</Sm><br/>പ്രോഗ്രാമിന്റെ ഭാഗമാകാം</Heading>
                <StudentSection>
                    <LeftSection>
                        <BoxContainer>
                            <Box className="first">
                                <Content>
                                <Bold>Tefun </Bold>പ്രോഗ്രാം സ്കൂളിൽ ഉദ്ഘാടനം ചെയ്തതിനുശേഷം വിദ്യാർത്ഥികൾക്ക് <Bold>Tefun</Bold>-ൽ ജോയിൻ ചെയ്യാവുന്നതാണ്.
                                </Content>
                                <Small className="first">01</Small>
                            </Box>
                            <Box className="second">
                                <Content>
                                <Bold>Talrop</Bold>-ന്റെ Web, Android, iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ <LinkA href="https://yia.ai"target="_blank">(yia.ai)</LinkA> ഓൺലൈനായി <Bold>Tefun</Bold> പ്രോഗ്രാമിന്റെ ഭാഗമാകാം.
                                </Content>
                                <Small className="second">02</Small>
                            </Box>
                            <Box className="third">
                                <Content>
                                വിദ്യാർത്ഥികളുടെ മൊബൈൽ നമ്പർ നൽകിയതിനുശേഷം പ്രൊഫൈൽ തിരഞ്ഞെടുത്ത് <Bold>Tefun </Bold>പ്രോഗ്രാം സ്റ്റാർട്ട് ചെയ്യാം.
                                </Content>
                                <Small className="third">03</Small>
                            </Box>
                            <Box className="fourth">
                                <Content>
                                പ്രൊഫൈൽ ലഭ്യമല്ലെങ്കിൽ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ കോഡും ക്ലാസും ഡിവിഷനും നൽകി <Bold>Tefun </Bold>പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കും.
                                </Content>
                                <Small className="foruth">04</Small>
                            </Box>
                            <Box className="fifth">
                                <Content>
                                വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.
                                </Content>
                                <Small className="fifth">05</Small>
                            </Box>
                            <Box className="sixth">
                                <Content>
                                <Bold>Tefun </Bold>പ്രോഗ്രാമിന്റെ അവസാനഘട്ടമായി പഠനം പൂർത്തീകരിക്കുന്ന ഉടൻ തന്നെ വിദ്യാർത്ഥികൾക്ക് ഓൺലൈൻ എക്സാം ഉണ്ടായിരിക്കുന്നതാണ്.
                                </Content>
                                <Small className="sixth">06</Small>
                            </Box>
                            <Box className="seventh">
                                <Content>
                                <Bold>Tefun </Bold>പ്രോഗ്രാം വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ഓൺലൈൻ പ്ലാറ്റ്ഫോം മുഖേന ഡിജിറ്റലായി സർട്ടിഫിക്കറ്റ് നൽകുന്നതാണ്.
                                </Content>
                                <Small className="seventh">07</Small>
                            </Box>
                        </BoxContainer>
                    </LeftSection>
                    <RightSection>
                        <ImageContainer>
                            <Img src={join} alt="Image"/>
                        </ImageContainer>
                    </RightSection> 
                </StudentSection>
            </Container>
        </SectionContainer>
  )
}

const SectionContainer = styled.section`
    padding: 50px 0;
`;
const Container = styled.section``;
const Heading = styled.h4`
    color: #0fa76f;
    font-size: 40px;
    font-family: "EGGIndulekhaUni";
`;
const Sm = styled.span`
    font-size: 40px;
    font-family: "gordita_medium";
    color: #000;
`;
const StudentSection = styled.div`
    margin-top: 30px;
    display: flex;
    position: relative;
    justify-content: space-between;
`;
const LeftSection = styled.div`
    width: 52%;
    padding-left: 3%;
`;
const BoxContainer = styled.ul`
    width: 100%;
`;
const Box = styled.li`
    background: ${(props) =>
        props.className === "first"
        ? "#fef7ec !important"
        : props.className === "second"
        ? "#eaf3fc !important"
        : props.className === "third"
        ? "#dff6e6 !important"
        : props.className === "fourth"
        ? "#e0f0ff !important"
        : props.className === "fifth"
        ? "#fef7ec !important"
        : props.className === "sixth"
        ? "#eaf3fc !important"
        : props.className === "seventh"
        ? "#dff6e6 !important"
        : null};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 130px;
    margin-bottom: 20px;
    padding: 15px 15px 15px 35px;
    border-radius: 20px;
    position: relative;
    &:last-child {
        margin-bottom: 0;
    }
`;
const LinkA = styled.a``;
const Content = styled.h4`
    font-size: 18px;
    font-family: "gordita_regular";
    line-height: 1.4em;
`;
const Bold = styled.span`
    font-family: "gordita_regular";
    font-weight: 700;
`;
const Small = styled.small`
    position: absolute;
    left: -35px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #0fa76f;
    &::after {
        content: "";
        width: 150px;
        transform: rotate(90deg);
        position: absolute;
        border-top: 2px dashed #0fa76f;
        top: 100px;
        left: -90%;
        z-index: -1;
    }
    &.seventh {
        &::after {
            display: none;
        }
    }    
`;
const RightSection = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 40%;
`;
const ImageContainer = styled.span`
    position: sticky;
    top: 113px;
`;
const Img = styled.img`
    display: block;
    width: 90%;
`;
