 export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="Header">Welcome to the Quizrooms</h1>
        <h6 className="SubHeader">The next level of Quizzes</h6>
        <div>
          <h2 className="Intro">Who are you?</h2>
        </div>
      </div>

      <div className="Options">
        <button className="Button">
          <h1 className="bText">Player</h1>
          <div>
            <p className="bTexts">Joining quizzes</p>
          </div>
        </button>

        <button className="Button">
          <h1 className="bText">Host</h1>
          <div>
            <p className="bTexts">Hosting and creating quizzes for others to join</p>
          </div>
        </button>
      </div>
    </main>
  );
}
