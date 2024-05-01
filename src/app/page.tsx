import { Button, Container } from "@mantine/core";
import Link from "next/link";

 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="Header">Welcome to the Quizrooms</h1>
        <h6 className="SubHeader">The next level of Quizzes</h6>
        <div>
          <h2 className="Intro">What are you doing today?</h2>
        </div>
      </div>

      <div className="Options">
          <Link href="/player">
            <Container px={30} bg="#e0e0e0" size="sm"
              styles={{
                root: {
                  margin: '20px', // Adjust this value as needed
                },
              }}>
            <h1 className="bHead">Player</h1>
              <div>
              < p className="bText">Play against others in a Quiz</p>
              </div>
            </Container>
         </Link>
          <Link href="/host">
            <Container px={30} bg="#e0e0e0" size="sm"
              styles={{
                root: {
                  
                  margin: '20px', // Adjust this value as needed
                },
              }}>
            <h1 className="bHead">Host</h1>
              <div>
                <p className="bText">Hosting and creating quizzes for others to join</p>
              </div>
            </Container>
          </Link>
        </div>
    </main>
  );
}
