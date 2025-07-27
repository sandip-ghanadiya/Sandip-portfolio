import React, { useEffect, useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import axios from "axios";

const defaultData = [
  { number: 5, text: "Years Exeperience", isCOunt: true },
  { number: 10, text: "Projects/Modules", isCOunt: true },
  { number: "1k", text: "Commit", isCOunt: true },
  { number: "100%", text: "OnTime Project Delivery", isCOunt: false },
  { number: "Winner", text: "Company Hackathon", isCOunt: false },
  { number: "Winner", text: "Science Fair Project", isCOunt: false },
];

const Acomplishments = () => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    (async () => {
      const { data: userData } = await getFollowers();
      // console.log(userData);
      if (userData) {
        const newFollowers = data.map((obj) => {
          if (obj.text === "Github Followers") {
            return { ...obj, number: userData.followers };
          }
          return obj;
        });
        setData(newFollowers);
      }
    })();
  }, []);

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}${card.isCOunt ? '+' : ''}`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;

const getFollowers = () => {
  return axios.get(
    "https://api.github.com/users/tanv33"
    // "https://api.github.com/users/tanv33/followers?per_page=100"
  );
};
