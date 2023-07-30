import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

// Handle clicks on buttons within the header
const Header = () => { 
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle header show/hide animation depending on the scroll direction
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY; // Store the previous scroll position
    
    // Handle scroll events
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement)
        return;

      // If the user has scrolled down and are past the header, hide the header
      if (prevScrollPos < currScrollPos && currScrollPos > currHeaderElement.offsetHeight) {
        currHeaderElement.style.transform = "translateY(-200%)";
      } else {
        // Otherwise, show the header
        currHeaderElement.style.transform = "translateY(0%)";
      }

      prevScrollPos = currScrollPos; // Update the previous scroll position
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef} // Add a reference to the header element
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16} // Add padding to the left and right of the header
          py={4} // Add padding to the top and bottom of the header
          justifyContent="space-between" // Add space between the social media links and the navigation links
          alignItems="center" // Align items to the center
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {/* HStack is a horizontal stack of elements. https://chakra-ui.com/docs/layout/h-stack */}
            <HStack spacing={10}>
                {socials.map(({icon,url}) => (
                    <a key= {url} href= {url} icon= {icon} target="_blank" rel="noopener noreferrer"> 
                        <FontAwesomeIcon key= {url} icon={icon} size="2x" />
                    </a>
                ))}
            </HStack>
            {/* Add social media links based on the `socials` data */}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
                <a href="#projects" onClick={handleClick("projects")}>Projects</a>
                    {/* 'contactme' -> handleClick -> 'contactme-section' */}
                <a href="#contact-me" onClick={handleClick("contactme")}> 
                    Contact Me
                </a>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
