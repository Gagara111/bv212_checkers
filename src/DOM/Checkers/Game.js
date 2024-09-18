import EnemyCemetery from "./Game/EnemyCemetery";
import PlayerCemetery from "./Game/PlayerCemetery";
import Board from "./Game/Board";

function Game() {
    return <div id="Game">
        <EnemyCemetery/>
        <Board/>
        <PlayerCemetery/>

    </div>
}

export default  Game;