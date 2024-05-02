import { Button, Container, FileInput } from "@mantine/core";
import Link from "next/link";

 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <Link href="/">
        <Container bg="#e0e0e0" className="Return">Return To Home Page</Container>
      </Link>
        <div>
          <h2 className="Intro">What do you need?</h2>
        </div>
        <FileInput className="File"
          label="Enter Quiz File Here"
          placeholder="Quiz File goes here"
        />
        <Link href="/" className="Create">
          <Container bg="#e0e0e0">
            <p>Create a Quiz</p>
          </Container>
        </Link>
      </div>
    </main>
  );
}
