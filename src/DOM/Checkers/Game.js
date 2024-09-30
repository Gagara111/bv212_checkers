import EnemyCemetery from "./Game/EnemyCemetery";
import PlayerCemetery from "./Game/PlayerCemetery";
import Board from "./Game/Board";
import "./Game.css"

function Game() {
    return <div id="Game" className="Game">
        <EnemyCemetery/>
        <Board/>
        <PlayerCemetery/>

    </div>
}

export default  Game;