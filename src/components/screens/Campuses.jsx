import React, { useState } from 'react'
import styled from 'styled-components'
import school1 from "../../assets/images/sch1.jpg"
import school2 from "../../assets/images/sch2.jpg"
import school3 from "../../assets/images/sch3.jpg"
import school4 from "../../assets/images/sch4.jpg"
import school5 from "../../assets/images/sch5.jpg"
import school6 from "../../assets/images/sch6.jpg"
import school7 from "../../assets/images/sch7.jpg"
import school8 from "../../assets/images/sch8.jpg"
import school9 from "../../assets/images/sch9.jpg"
import school10 from "../../assets/images/sch10.jpg"
import Location from "../../assets/images/Location.svg"

export default function Campuses() {
    const [data]= useState([
        {
            id:1,
            image: school1,
            name: "Govt LP School Kadinamkulam",
            place: "Thiruvananthapuram",
        },
        {
            id:2,
            image: school2,
            name: "Govt LP School Karichara",
            place: "Thiruvananthapuram",
        },
        {
            id:3,
            image: school3,
            name: "Govt LP School VELLANICKAL",
            place: "Thiruvananthapuram",
        },
        {
            id:4,
            image: school4,
            name: "Govt LP School Channankara",
            place: "Thiruvananthapuram",
        },
        {
            id:5,
            image: school5,
            name: "Dr. APJ Abdul Kalam Public School",
            place: "Thiruvananthapuram",
        },
        {
            id:6,
            image: school6,
            name: "Shamsul Islam Upper Primary School",
            place: "Thiruvananthapuram",
        },
        {
            id:7,
            image: school7,
            name: "Kuttiyil AUPS Padiyam",
            place: "Malappuram",
        },
        {
            id:8,
            image: school8,
            name: "Govt UP School Kuzhivila",
            place: "Thiruvananthapuram",
        },
        {
            id:9,
            image: school9,
            name: "AMRITA Kairali Vidya Bhavan CBSE School",
            place: "Thiruvananthapuram",
        },
        {
            id:10,
            image: school10,
            name: "Govt LP School Thumba",
            place: "Thiruvananthapuram",
        },

    ])
  return (
        <CampusSection>
            <WrapperContainer>
                <AssosTitle><Sm>Associated</Sm> Campuses</AssosTitle>
                <CampusD>Various institutions have joined hands with us, to train their students and improve their employability skills, along with moulding them to be future entrepreneurs.</CampusD>
                <SchoolD>
                    {
                        data.map(data=>(
                            <College key={data.id}>
                                <InstituteImage>
                                    <Img src={data.image} alt="Image" />
                                </InstituteImage>
                                <Name>{data.name}</Name>
                                <Place><PlaceImg src={Location} alt="Image" />{data.place}</Place>
                            </College>
                        ))
                    }
                </SchoolD>
                <More>
					And <Bold>300</Bold> More Campus All Over Kerala
				</More>
            </WrapperContainer>
        </CampusSection>
  )
}

const CampusSection = styled.section`
    background-color: #f9fcf5;
	padding: 8% 0;
    overflow: hidden;
`;
const WrapperContainer = styled.section`
    width:90%;
	margin: 0 auto;
`;
const AssosTitle = styled.h3`
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 1%;
`;
const Sm = styled.span`
    color:#59a670;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 1%;
`;
const CampusD = styled.p`
    color: #6e6e6e;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    font-size: 18px;
    margin-bottom: 3%;`;
const SchoolD = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 60px;
`;
const College = styled.li`
    width: 18%;
    margin-bottom: 60px;
    &:nth-child(6){
        margin-bottom: 0;
    }
    &:nth-child(7){
        margin-bottom: 0;
    }
    &:nth-child(8){
        margin-bottom: 0;
    }
    &:nth-child(9){
        margin-bottom: 0;
    }
    &:nth-child(10){
        margin-bottom: 0;
    }
`;
const InstituteImage = styled.div`
    width: 98%;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
    border-radius: 4px;
    display: block;
`;
const Name = styled.h4`
    line-height: 1.2;
    font-family: "gordita_medium";
    text-align: left;
    margin-top: 18px;
`;
const Place = styled.p`
    margin-top: 4px;
    font-size: 14px;
    font-family: "gordita_regular";
    text-align: left;
    color: rgb(15, 167, 111);
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const PlaceImg = styled.img`
    transform: translateY(-2px);
    margin-right: 6px;
    width: 12px;
    filter: invert(100%) sepia(93%) saturate(1416%) hue-rotate(49deg) brightness(119%) contrast(52%);
`;
const More = styled.p`
    text-align: center;
    font-size: 23px;
    font-weight: 700;
	margin-top: 6%;
`;
const Bold = styled.b`
    color: #59a670;
	font-weight: 700;
`;
