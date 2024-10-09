import EnemyInfo from "./Checkers/EnemyInfo";
import PlayerInfo from "./Checkers/PlayerInfo";
import Game from "./Checkers/Game";
import"./Checkers.css"
import GameModel from "../GameModel/GameModel";

function Checkers(){
    return <div id="Checkers" className="Checkers">
            <EnemyInfo/>
            <Game GameModel={GameModel}/>
            <PlayerInfo/>
        </div>

}

export default Checkers;