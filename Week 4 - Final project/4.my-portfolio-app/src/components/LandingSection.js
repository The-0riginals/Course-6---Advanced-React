import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
// VStack is a component that stacks its children vertically. https://chakra-ui.com/docs/layout/flex#stack
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* The UI for the landing section */}
    <VStack spacing={16}>
        <VStack spacing={4}>
            <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" name="Pete" />
            <Heading as="h4" size="md" noOfLines={1} color="white">{greeting}</Heading>
        </VStack>
        {/* spacing is the space between the two headings */}
        {/* noOfLines is the number of lines the heading will take up */}
        <VStack spacing={6}>
            <Heading as="h2" size="2xl" noOfLines={1} color="white">{bio1}</Heading>
            <Heading as="h2" size="2xl" noOfLines={1} color= "white">{bio2}</Heading>
        </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;
