import { Container, Title, Text, Stack, Button } from '@mantine/core';

const HomePage = () => {
  return (
    <Container>
      <Stack mt="xl">
        <Section
          title="Introduction"
          content="Welcome to my website! This is an introduction section."
        />
        <Section
          title="Features"
          content="Here are some features of our application."
        />
        <Section
          title="About Us"
          content="Learn more about our team and mission."
        />
        <Section title="Contact" content="Get in touch with us." />
      </Stack>
    </Container>
  );
};

const Section = ({ title, content }: { title: string; content: string }) => (
  <div>
    <Title order={3}>{title}</Title>
    <Text>{content}</Text>
    <Button variant="outline" mt="md">
      Learn More
    </Button>
  </div>
);

export default HomePage;
