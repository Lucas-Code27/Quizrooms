import { TextInput, Container } from "@mantine/core";

 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="Header">Welcome to the Quizrooms</h1>
        <h6 className="SubHeader">The next level of Quizzes</h6>
        <div>
          <h2 className="Intro">You are a player</h2>
        </div>
      </div>
      <Container bg="#e0e0e0"
       styles={{
        root: {
          margin: '20px',
          padding: '20px'
        },
      }}>      
        <TextInput
      size="lg"
      label="Enter Room Code"
      placeholder="Enter Code Here"
      />
      </Container>
    </main>
  );
}
