import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  /*The useSubmit hook is implemented in a way that 50% of the times it will return a successful response 
  and 50% of the times it will return an error response.?*/
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  // Form validation
  const formik = useFormik({ // https://formik.org/docs/overview
    initialValues: {firstName: '', email: '', type: '', comment: ''},
    onSubmit: (values) => {
      submit('', values); // submit the form values to the backend
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string().min(25, 'Must be at least 25 characters').required('Required'),
    }),
  });

  // Show an alert when the form is submitted successfully
  useEffect(() => {
    if (response) {
      //  useAlertContext hook to show the alert : The hook returns a function named onOpen
      onOpen(response.type, response.message);
      /*
      The response object from the API has 2 properties:
      type:  'success' | 'error'  
      message:  Extra contextual information about the response
      (e.g. 'Email sent successfully')
       */
    
      // Reset the form if the response is successful
      if (response.type === 'success') formik.resetForm();
    }
  }, [response]);


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          {/* Connect the form onSubmit prop with Formik's handleSubmit function */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")} // Make the Input components from Chakra UI controlled components
                />
                {/*show the error*/}
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')} //Make the Input components from Chakra UI controlled components.
                  /* useFormik hook returns an object with a function called getFieldProps that when called,
                  returns an object with the necessary props to make the input controlled.
                  
                  The getFieldProps() method returns the following props:
                  value: the current value of the field
                  onChange: a function to call when the field changes
                  onBlur: a function to call when the field is blurred
                  */
                />
                {/*show the error*/}
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                id="type" 
                name="type"
                {...formik.getFieldProps("type")} // Make the Input components from Chakra UI controlled components
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")} // Make the Input components from Chakra UI controlled components
                />
                {/*show the error*/}
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Show a loading indicator */}
              {/*isloading indicator is a boolean value that is true when the form is submitting and false otherwise*/}
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading} >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
