import { Box, Button, Container, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} alignItems="center">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Connect with Top Software Talent
              </Heading>
              <Text fontSize="xl" mb={8}>
                Particles is the leading marketplace to find vetted developers specializing in React, Node, .NET, Go, and JavaScript. Hire experts quickly and accelerate your development.
              </Text>
              <Button size="lg" colorScheme="blue">
                View Developers
              </Button>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMjg5ODA2Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developers" />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Benefits - Businesses */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Box textAlign="center" mb={10}>
            <Heading as="h2" size="xl" mb={4}>
              Accelerate Development with Particles
            </Heading>
            <Text fontSize="xl">Particles connects you with the expertise you need to bring your vision to life.</Text>
          </Box>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={10}>
            <Box bg="white" p={6} rounded="md" shadow="md">
              <FaCheckCircle size={40} color="green.500" />
              <Heading as="h3" size="lg" mt={2} mb={4}>
                Vetted Talent
              </Heading>
              <Text>Access the top 1% of developers in each technology. Every developer is thoroughly vetted for expertise and professionalism.</Text>
            </Box>

            <Box bg="white" p={6} rounded="md" shadow="md">
              <FaCheckCircle size={40} color="green.500" />
              <Heading as="h3" size="lg" mt={2} mb={4}>
                Faster Hiring
              </Heading>
              <Text>Go from job posting to qualified candidates in days, not weeks. We handle the sourcing and screening for you.</Text>
            </Box>

            <Box bg="white" p={6} rounded="md" shadow="md">
              <FaCheckCircle size={40} color="green.500" />
              <Heading as="h3" size="lg" mt={2} mb={4}>
                Expertise On-Demand
              </Heading>
              <Text>Flexibly scale up or down as needed. Get the specialized skills you need, when you need them.</Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Benefits - Developers */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Box mb={10}>
            <Heading as="h2" size="xl" mb={4}>
              Calling All Experts
            </Heading>
            <Text fontSize="xl">Join our network of top developers and work on exciting projects with leading companies.</Text>
          </Box>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} alignItems="center">
            <Box>
              <Stack spacing={8}>
                <Box>
                  <Heading as="h3" size="lg" mb={2}>
                    Exciting Projects
                  </Heading>
                  <Text>Work on challenging, impactful projects that let you flex your skills and learn new ones.</Text>
                </Box>

                <Box>
                  <Heading as="h3" size="lg" mb={2}>
                    Competitive Rates
                  </Heading>
                  <Text>Earn what you're worth. We offer top rates for top talent.</Text>
                </Box>

                <Box>
                  <Heading as="h3" size="lg" mb={2}>
                    Career Growth
                  </Heading>
                  <Text>Expand your portfolio and gain experience across industries. Our developers gain valuable exposure and skills.</Text>
                </Box>
              </Stack>
            </Box>

            <Box>
              <Image src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBvbiUyMGxhcHRvcHxlbnwwfHx8fDE3MTI4OTgwNjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer" />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Box textAlign="center" mb={10}>
            <Heading as="h2" size="xl" mb={4}>
              What Our Users Are Saying
            </Heading>
          </Box>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>
            <Box bg="white" p={6} rounded="md" shadow="md">
              <Text fontSize="xl">"Particles has been a game-changer for us. We were able to quickly find a React expert to accelerate our product development. The process was seamless from start to finish."</Text>
              <Flex alignItems="center" mt={6}>
                <Image borderRadius="full" boxSize="40px" src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwaGVhZHNob3R8ZW58MHx8fHwxNzEyODk4MDYzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Client" mr={4} />
                <Box>
                  <Text fontWeight="bold">John Smith</Text>
                  <Text fontSize="sm">CTO, Tech Startup</Text>
                </Box>
              </Flex>
            </Box>

            <Box bg="white" p={6} rounded="md" shadow="md">
              <Text fontSize="xl">"As a developer, working through Particles has been an incredible experience. I've had the opportunity to work on exciting projects with cutting-edge companies, all while sharpening my skills and earning competitive rates."</Text>
              <Flex alignItems="center" mt={6}>
                <Image borderRadius="full" boxSize="40px" src="https://images.unsplash.com/photo-1581091877286-979c6f103cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGhlYWRzaG90fGVufDB8fHx8MTcxMjg5ODA2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer" mr={4} />
                <Box>
                  <Text fontWeight="bold">Sarah Johnson</Text>
                  <Text fontSize="sm">Senior Node Developer</Text>
                </Box>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box py={20} bg="blue.600" color="white">
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Accelerate Your Development?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Join Particles today and connect with the top developers you need to bring your vision to life.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} justifyContent="center">
            <Button size="lg" colorScheme="white" variant="outline">
              View Developers
            </Button>
            <Button size="lg" colorScheme="white">
              Apply as a Developer
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
