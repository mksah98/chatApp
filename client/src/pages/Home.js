import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";

const Home = () => {
    return (
        <Container maxW="xl" centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={2}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px">
                <Text
                    fontSize="3xl"
                    fontFamily="work sans"
                    color="black"
                    p={3}
                    justifyContent={'center'}>
                    Chat-App
                </Text>
            </Box>
            <Box
                d="flex"
                justifyContent="center"
                bg="white"
                w="100%"
                p="3"
                m="05px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px">
            </Box>
        </Container>
    )
}

export default Home