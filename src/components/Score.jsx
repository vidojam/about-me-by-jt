import { useState } from "react";

export default function Score() {
  const [score, setScore] = useState(289)

  return (
    <>
    <h1>Score: {score}</h1>
  
    if (score = 299 ) {
      alert="Just one more for a 300 game"
    } else if (score = 298) {
      alert="Just two more for a 300 game"  
    }

    <button onClick={() => setScore(score + 1)}>+1</button>
    </>
  ) 
}
