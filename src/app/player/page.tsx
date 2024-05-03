import { TextInput, Container, Center } from "@mantine/core";
import Link from "next/link";

 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">  
      <Link href="/">
        <Container bg="#e0e0e0" className="Return">Return To Home Page</Container>
      </Link>
      <Container bg="#e0e0e0" className = "CodeInput"
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
