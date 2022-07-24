import React from "react";
import styled from "styled-components"
import logo from "../../assets/images/logo.svg"

export default function Header() {
    return (
        <TopNav className="active">
            <NavSection className="wrapper">
                <LeftContainer>
                    <Logo>
                        <LogoImg src={logo} alt="Image" />
                    </Logo>
                </LeftContainer>
                <RightContainer>
                    <SignInButton>Join Now</SignInButton>
                </RightContainer>
            </NavSection>
        </TopNav>
    );
}

const TopNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	padding: 10px 0 1% 0;
	transition: 0.5s;
	background: #fff;
	&.active {
		box-shadow: 0 16px 24px #ffffff4d;
		background-color: #ffffff4d;
		backdrop-filter: blur(8px);
	}
`;
const NavSection = styled.div`
	width: 85%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const LeftContainer = styled.a``;
const Logo = styled.div`
	width: 90%;
	cursor: pointer;
`;
const LogoImg = styled.img`
    display: block;
	width: 100%;
`;
const RightContainer = styled.div`
	display: flex;
	align-items: flex-end;
`;
const SignInButton = styled.a`
	display: block;
	cursor: pointer;
	color: #fff;
	font-size: 16px;
	padding: 15px 30px;
	font-family: "gordita_medium";
	border-radius: 5px;
	transition: 0.5s;
	background-size: 200% auto;
    background-image: linear-gradient(to right, #63bb4c 0%, #1898af 51%, #63bb4c 100%
	);
	&:hover {
		background-position: right center;
	}
`;
