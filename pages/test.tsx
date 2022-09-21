import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Router from "next/router";

export default function TestPage() {

    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.300", "gray.700");

    function navigate() {
        Router.push('/');
    }

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
                <Heading mb={6}> Log in </Heading>
                <Input placeholder="your@email.com" variant="filled" mb={3} type="email"/>
                <Input placeholder="*****" variant="filled" mb={6} type="password"/>
                <Button mb={6} colorScheme="whatsapp" onClick={navigate}>Log in</Button>
                <Button onClick={toggleColorMode}>Toggle color mode</Button>
            </Flex>
        </Flex>
    );
}

