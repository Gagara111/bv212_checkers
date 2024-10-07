import BlackGroundCellGenerator from './BlackGroundCellGenerator';
import BlackChecker from './Board/BlackChecker';

function Board() {

    return <div id="Board">
        <BlackGroundCellGenerator/>
        <BlackChecker/>

    </div>
}

export default Board;