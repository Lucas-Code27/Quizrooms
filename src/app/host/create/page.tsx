import { Button, Container, FileInput } from "@mantine/core";
import Link from "next/link";

 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <h2 className="Intro">Quiz Creator</h2>
          <a 
          download href="/funny cat.jpg"
          >
            <div className="download">
            <p>Download Quiz</p>
            </div>
          </a>
          </div>
      <Link href="/host">
        <Container bg="#e0e0e0" className="Return">Return To Host Screen</Container>
      </Link>
      </div>
    </main>
  );
}
