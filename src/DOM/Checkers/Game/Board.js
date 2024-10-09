
import BlackChecker from './Board/BlackChecker';
import WhiteChecker from './Board/WhiteChecker';
import BackgroundCellGenerator from "./Board/BackgroundCellGenerator";

function Board() {

    return <div className="Board">
        <BackgroundCellGenerator/>
        <BlackChecker x={2} y={7}/>
        <WhiteChecker x={3} y={6}/>
        <WhiteChecker x={8} y={8}/>
        <WhiteChecker x={3} y={2}/>
        <div style={{gridColumn:4, gridRow: 4}}></div>
        <div style={{gridColumn:2, gridRow: 2}}></div>
        <div style={{gridColumn:6, gridRow: 6}}></div>

    </div>
}

export default Board;