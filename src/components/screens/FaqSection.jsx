import React, { useState } from "react";
import DownArrow from "../../assets/images/down-arrow.svg"
import styled from "styled-components";

export default function FaqSection() {
	const [faq] = useState([
		{
			id: 1,
			question:
				"Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
			answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
		},
		{
			id: 2,
			question:
				"എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക?",
			answer: "ഈ പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop നൽകിയിരിക്കുന്ന ഫോൺ നമ്പരിൽ കോൺടാക്ട് ചെയ്ത് പ്രോഗ്രാം സ്കൂളിൽ നടപ്പിലാക്കാവുന്നതാണ്.",
		},
		{
			id: 3,
			question: "എന്താണ് Tefun ലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭിക്കുന്ന നേട്ടം?",
			answer: "ലളിതവും രസകരവുമായ ടെക്ക്നോളജി പഠനമാണ് Tefun പ്രോഗ്രാമിലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭ്യമാകുന്നത്. AI, Robotics, IoT, 3D Printing, Metaverse, web 3.0 എന്നിങ്ങനെ 70-ൽപ്പരം ഭാവിയിലെ ടെക്ക്നോളജി സാധ്യതകളെക്കുറിച്ചാണ് Tefun വിദ്യാർത്ഥികളുടെ മുൻപിലേക്ക് എത്തിക്കുന്നത്. Tefun പ്രോഗ്രാം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നതാണ്.",
		},
		{
			id: 4,
			question: "Tefun പ്രോഗ്രാം നിലവിലെ പഠനത്തെ ബാധിക്കുമോ?",
			answer: "അക്കാദമിക് പഠനത്തിന് ശേഷം ഒഴിവുസമയങ്ങളിൽ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കാവുന്നതാണ്. പത്തു മണിക്കൂറിൽ താഴെയാണ് പ്രോഗ്രാം ഡ്യൂറേഷൻ വരുന്നത്. ഒരു ദിവസം 15 മിനിറ്റ് മാറ്റിവെച്ചാൽ പ്രോഗ്രാം നിശ്ചയിച്ച കാലയളവിൽ പൂർത്തിയാക്കാവുന്നതാണ്.",
		},
		{
			id: 5,
			question:
				"വിദ്യാർത്ഥികൾക്ക് ഡയറക്ട് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുമോ?",
			answer: "Tefun പ്രോഗ്രാം സ്കൂളുകൾ മുഖേനയാണ് നടപ്പിലാക്കുന്നത്. അതുകൊണ്ട് തന്നെ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖാന്തരം മാത്രമേ പങ്കെടുക്കാൻ സാധിക്കുകയുള്ളൂ. നിങ്ങളുടെ സ്കൂൾ ഇതിൽ ഭാഗമായിട്ടില്ലെങ്കിൽ സ്കൂൾ അധികൃതരുമായി ബന്ധപ്പെട്ട ശേഷം നിങ്ങളുടെ സ്കൂൾ Tefun-ൽ രജിസ്റ്റർ ചെയ്ത് പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
		},
	]);
	const [clickFaq, setClickFaq] = useState("");
	return (
        <SectionContainer>
            <Contaniner className="wrapper">
                <Title><Bold>Frequently</Bold><br />Asked Questions</Title>
                <FaqContainer>
                    {faq.map((data) => (
                        <FaqCard key={data.id}onClick={() => setClickFaq(data.id === clickFaq ? "" : data.id)}className={data.id === clickFaq && "active"}>
                            <FaqQuestion>
                                <Question>{data.question}</Question>
                                <Arrow className={data.id === clickFaq && "active"}>
                                    <Img src={DownArrow} alt="Down"/>
                                </Arrow>
                            </FaqQuestion>
                            <Answer className={data.id === clickFaq && "active"}>{data.answer}</Answer>
                        </FaqCard>
                    ))}
                </FaqContainer>
            </Contaniner>
        </SectionContainer>
	);
}

const SectionContainer = styled.section`
    padding-bottom: 80px;
`;
const Contaniner = styled.div``;
const Title = styled.h2`
	font-family: "gordita_medium";
	color: #2d2d2d;
	text-align: center;
	margin-bottom: 50px;
	font-size: 34px;
`;
const Bold = styled.span`
    color: #0fa76f;
`;
const FaqContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;
const FaqCard = styled.div`
	background-color: #f3f9eb;
	padding: 0 30px;

	border-radius: 4px;
	min-height: 60px;
	overflow: hidden;
	margin-bottom: 20px;
	transition: all 0.3s;
	cursor: pointer;
	&.active {
		background-color: #f3f9eb;
		padding-bottom: 20px;
	}
`;
const FaqQuestion = styled.div`
	min-height: 75px;
	border-radius: 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Question = styled.h3`
	font-size: 16px;
	font-family: "gordita_medium";
	padding: 10px 0;
`;
const Arrow = styled.span`
	display: block;
	transition: all 0.3s;
	&.active {
		transform: rotate(180deg);
	}
`;
const Img = styled.img`
    height: 10px;
`;
const Answer = styled.p`
	font-size: 16px;
	color: #545454;
	overflow-y: scroll;
	height: 0px;
	white-space: pre-line;
	font-family: "gordita_regular";
	margin-right: -20px;
	&::-webkit-scrollbar {
		display: none;
	}
	&.active {
		height: auto;
		background-color: #f3f9eb;
	}
`;

