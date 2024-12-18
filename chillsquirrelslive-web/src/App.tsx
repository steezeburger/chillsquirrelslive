import './App.css'
import { TwitchEmbed } from "react-twitch-embed";

function App() {
  return (
    <>
      <div>
        <TwitchEmbed
          channel="dblsteezeburger"
          id="chillsquirrelslive"
          muted
          onVideoPause={() => console.log(':(')}
          />
      </div>
      <h1>chill squirrels live</h1>
    </>
  )
}

export default App
