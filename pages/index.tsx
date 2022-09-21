import { Button, Flex, Heading, Highlight, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
        <Flex direction="column">
            <Flex px={8} py={3} background="blue.700" color="white" justifyContent="space-between">
                <Heading> Home </Heading>
                <Link href={'/test'}>
                    <Button colorScheme="white" variant="ghost">Log out</Button>
                </Link>
            </Flex>
            <Flex p={8} direction="column">
                <Flex direction="column">
                    <Highlight
                            query='spotlight'
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                        With the Highlight component, you can spotlight words.
                    </Highlight>

                    <StatGroup m={4}>
                        <Stat>
                            <StatLabel>Sent</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                            <StatArrow type='increase' />
                            23.36%
                            </StatHelpText>
                        </Stat>

                        <Stat>
                            <StatLabel>Clicked</StatLabel>
                            <StatNumber>45</StatNumber>
                            <StatHelpText>
                            <StatArrow type='decrease' />
                            9.05%
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Sent</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                            <StatArrow type='increase' />
                            23.36%
                            </StatHelpText>
                        </Stat>

                        <Stat>
                            <StatLabel>Clicked</StatLabel>
                            <StatNumber>45</StatNumber>
                            <StatHelpText>
                            <StatArrow type='decrease' />
                            9.05%
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Sent</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                            <StatArrow type='increase' />
                            23.36%
                            </StatHelpText>
                        </Stat>

                        <Stat>
                            <StatLabel>Clicked</StatLabel>
                            <StatNumber>45</StatNumber>
                            <StatHelpText>
                            <StatArrow type='decrease' />
                            9.05%
                            </StatHelpText>
                        </Stat>
                    </StatGroup>
                </Flex>
            </Flex>
        </Flex>
        </>
    );
}

