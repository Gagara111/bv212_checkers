import EnemyInfo from "./EnemyInfo";
import PlayerInfo from "./PlayerInfo";
import Game from "./Game";
import"./Checkers.css"

function Checkers(){
    return [
    <style>
        display: flex;
        flex-direction: row;
        flex-wrap: wrap: nowrap;
        justify-content: center;
        align-items: center;




    </style>,
        <div id="Game">


        <EnemyInfo/>,
        <Game/>,
        <PlayerInfo/>
        </div>
    ];
}

export default Checkers;