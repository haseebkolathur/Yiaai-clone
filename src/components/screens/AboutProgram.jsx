import React from 'react'
import { useState } from 'react'
import jayasurya from "../../assets/images/Jayasurya_01.jpg"
import Antony from "../../assets/images/Antony_vertical_thumb_.jpg"
import major from "../../assets/images/Major_Ravi_02.jpg"
import Niranjana from "../../assets/images/Niranjana_01.jpg"
import Bibin from "../../assets/images/Bibin-01-min.jpg"
import Sandra from "../../assets/images/Sandra-01-min.jpg"
import Vishnu from "../../assets/images/Vishnu-unnikrishnan-01-min.jpg"
import Maniyanpilla from "../../assets/images/Maniyanpilla-Raju-01-min.jpg"
import Gowri from "../../assets/images/Gowri-Nandha-01-min.jpg"
import kanaran from "../../assets/images/Hareesh-01-min.jpg"
import PlayButton from "../../assets/images/play-black.svg"
import styled from 'styled-components'


export default function AboutProgram() {
    const  [datas] = useState([
        {
            name: "Jayasurya",
            profession: "Actor",
            image: jayasurya,
        },
        {
            name: "Antony Varghese",
            profession: "Actor",
            image: Antony,
        },
        {
            name: "Major Ravi",
            profession: "Director & Actor",
            image: major,
        },
        {
            name: "Niranjana Anoop",
            profession: "Actress",
            image: Niranjana,
        },
        {
            name: "Bibin George",
            profession: "Script writer & Actor",
            image: Bibin,
        },
        {
            name: "Sandra Thomas",
            profession: "Producer & Actress",
            image: Sandra,
        },
        {
            name: "Vishnu Unnikrishnan",
            profession: "Actor & Screen writer",
            image: Vishnu,
        },
        {
            name: "Maniyanpilla Raju",
            profession: "Actor",
            image: Maniyanpilla,
        },
        {
            name: "Gowri Nandha",
            profession: "Actress",
            image: Gowri,
        },
        {
            name: "Hareesh Kanaran",
            profession: "Actor",
            image: kanaran,
        }
    ])

    const renderData = () => {
        return (
            datas.map((data) =>(
            <>
                <Items>
                    <Profile>
                        <Img src={data.image} />
                    </Profile>
                    <Overlay></Overlay>
                    <Content>
                        <Name>{data.name}</Name>
                        <Profession>{data.profession}</Profession>
                        <WatchStory className="watch-hover">
                            <PlayS><PlayImg src={PlayButton} alt="Image"/></PlayS>
                            <PlayI>WATCH STORY</PlayI>
                        </WatchStory>
                    </Content>
                </Items>
            </>
            ))
        )
    }
  return (
        <Container>
            <WrapperContainer>
                <Testimonial>
                    <Title>
                        <TopName>TEFUN-ന്</TopName>
                        <br />
                        <BottomName>ആശംസകളോടെ </BottomName>
                    </Title>
                    <Bottom>
                        <Detail>{renderData()}</Detail>
                    </Bottom>
                </Testimonial>
            </WrapperContainer>
        </Container>
  )
}

const Container = styled.section`
    padding: 0px 8%;
    position: relative;
`;
const WrapperContainer = styled.section`
    width: 90%;
    margin: 0 auto;
`;
const Testimonial = styled.div`
    
`;
const Title = styled.h2`
    color: #2d2d2d;
    text-align: center;
    margin-bottom: 50px;
    font-family: "EGGIndulekhaUni";
    font-size: 45px;
`;
const TopName = styled.span`
    color: #0fa76f;
`;
const BottomName = styled.small``;
const Bottom = styled.div``;
const Detail = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
`;
const Items = styled.li`
    position: relative;  
    width: calc(25% - 20px);
    margin: 0px 10px 30px;
    border-radius: 10px;
    overflow: hidden;
`;
const Profile = styled.div`

`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, rgba(0, 0, 0, 1) 100%);
    opacity: 0.4;
`;
const Content = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    &:hover .watch-hover{
        height: 40px;
        opacity: 1;
    }
`;
const Name = styled.h4`
    color: #ffffff;
    font-size: 22px;
    font-family: "gordita_medium";
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
`;
const Profession = styled.p`
    font-size: 15px;
    color: #ffffff;
    text-align: center;
    font-weight: 500;
    margin-bottom: 10px;
`;
const WatchStory = styled.div`
    width: 100%;
    height: 0px;
    opacity: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
`;
const PlayS = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11px;
    padding-top: 5px;
    transform: translateY(-3px);
    margin-right: 4px;
`;
const PlayI = styled.h6`
    font-size: 13px;
    text-transform: uppercase;
    font-family: "gordita_medium";
`;
const PlayImg = styled.img`
    width: 100%;
    display: block;
`;
