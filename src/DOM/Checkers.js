import EnemyInfo from "./Checkers/EnemyInfo";
import PlayerInfo from "./Checkers/PlayerInfo";
import Game from "./Checkers/Game";
import"./Checkers.css"

function Checkers(){
    return <div id="Checkers" className="Checkers">
            <EnemyInfo/>
            <Game/>
            <PlayerInfo/>
        </div>

}

export default Checkers;