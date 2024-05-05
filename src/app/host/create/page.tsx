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
          <Container bg="#e0e0e0" className="download">
          <p className="download" >Download</p>
          <p className="warning">WARNING: THIS IS A TEST AND WILL SEND YOU A PICTURE OF A FUNNY CAT</p>
          </Container>
        </a>
      </div>
    </main>
  );
}
