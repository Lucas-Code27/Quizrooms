import { Button, Container, FileInput } from "@mantine/core";
import Link from "next/link";

 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <Link href="/host">
        <Container bg="#e0e0e0" className="Return">Return To Host Screen</Container>
      </Link>
        <div>
          <h2 className="Intro">Quiz Creator</h2>
        </div>
        <a 
        download href="/funny cat.jpg"
        >
          <p className="download" >Download</p>
        </a>
      </div>
    </main>
  );
}
