import React from 'react'
import logo from "../../assets/images/logo-grey.svg"
import instacolor from "../../assets/images/instagram-color.svg"
import insta from "../../assets/images/instagram.svg"
import facebookcolor from "../../assets/images/facebook-color.svg"
import facebook from "../../assets/images/facebook.svg"
import twittercolor from "../../assets/images/twitter-color.svg"
import twitter from "../../assets/images/twitter.svg"
import linkedincolor from "../../assets/images/linkedin-color.svg"
import linkedin from "../../assets/images/linkedin.svg"
import youtubecolor from "../../assets/images/youtube-color.svg"
import youtube from "../../assets/images/youtube.svg"
import styled from 'styled-components'

export default function Footer() {
  return (
        <SectionContainer>
            <Container className="wrapper">
                <FooterSection>
                    <Top>
                        <Logo href="https://yia.ai" target="_blank">
                            <Img src={logo} alt="Logo"/>
                        </Logo>
                    </Top>
                    <Bottom>
                        <Program>
                            <SocialMedia>
                                <SocialLink target="_blank" href="https://www.instagram.com/talropworld/">
                                    <Icon className="prime" src={instacolor} alt="Icon"/>
                                    <Icon className="secondry" src={insta} alt="Icon"/>
                                </SocialLink>
                                <SocialLink target="_blank" href="https://www.facebook.com/talropworld/">
                                    <Icon className="prime" src={facebookcolor} alt="Icon"/>
                                    <Icon className="secondry" src={facebook} alt="Icon"/>
                                </SocialLink>
                                <SocialLink target="_blank"  href="https://twitter.com/talropworld/">
                                    <Icon className="prime" src={twittercolor} alt="Icon"/>
                                    <Icon className="secondry" src={twitter} alt="Icon"/>
                                </SocialLink>
                                <SocialLink target="_blank" href="https://www.linkedin.com/company/talrop/">
                                    <Icon className="prime" src={linkedincolor} alt="Icon"/>
                                    <Icon className="secondry" src={linkedin} alt="Icon"/>
                                </SocialLink>
                                <SocialLink target="_blank" href="https://www.youtube.com/c/talrop/">
                                    <Icon className="prime" src={youtubecolor} alt="Icon"/>
                                    <Icon className="secondry" src={youtube} alt="Icon"/>
                                </SocialLink>
                            </SocialMedia>
                            <Contact>
                                <PhoneLink href="https://wa.me/+918589998744" target="_blank">+91 858 999 8744</PhoneLink>
                                <MailLinks href="mailto:yiaai@talrop.com">yiaai@talrop.com</MailLinks>
                            </Contact>
                        </Program>
                    </Bottom>
                    <LastBottom className="wrapper">
                        <CopyRight>© 2022, <FooterLink href="https://talrop.com/" target="_blank"> Talrop Private Limited </FooterLink></CopyRight>
                        <RightSide>
                            <FooterLinks className="last">Terms of service</FooterLinks>
                            <FooterLinks>Privacy policy</FooterLinks>
                        </RightSide>
                    </LastBottom>
                </FooterSection>
            </Container>
        </SectionContainer>
  )
}

const SectionContainer = styled.section`
    background-color: #1e1e1e;
    padding: 100px 0 50px;
`;
const Container = styled.section`
    text-align: center;
`;
const FooterSection = styled.div`
    width: 60%;
    margin: 0 auto;
`;
const Top = styled.div`
    width: 100%;
    text-align: center;
`;
const Logo = styled.a`
    width: 100px;
    display: block;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Bottom = styled.div``;
const Program = styled.div``;
const SocialMedia = styled.div`
    display: flex;
    width: 180px;
    margin: 0 auto;
    text-align: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
`;
const SocialLink = styled.a`
    display: block;
    margin-right: 15px;
    height: 20px;
    .prime {
        display: none;
    }
    &:hover {
        .prime {
            display: block;
        }
        .secondry {
            display: none;
        }
    }
`;
const Icon = styled.img`
    display: block;
    height: 100%;
    &:last-child {
        margin-right: 0;
    }
`;
const Contact = styled.div`
    display: flex;
    width: 275px;
    justify-content: space-between;
    margin: 0 auto;
`;
const PhoneLink = styled.a`
    display: block;
    margin-bottom: 10px;
    color: #aaaaaa;
    font-size: 15px;
`;
const MailLinks = styled.a`
    display: block;
    margin-bottom: 10px;
    color: #aaaaaa;
    font-size: 15px;`;
const LastBottom = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px !important;
    margin: 0 auto;
`;
const CopyRight = styled.p`
    font-size: 15px;
    color: #aaaaaa;
`;
const FooterLink = styled.a`
    display: inline-block;
    font-size: 15px;
    color: #aaaaaa;
`;
const RightSide = styled.div`
    display: flex;
`;
const FooterLinks = styled.a`
    display: block;
    margin-bottom: 10px;
    color: #aaaaaa;
    font-size: 15px;
    &.last {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

