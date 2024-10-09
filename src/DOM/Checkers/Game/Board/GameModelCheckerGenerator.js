import BlackChecker from "./BlackChecker";

/**
 * *
 * @param GameModel {GameModel}
 * @constructor
 */

function GameModelCheckerGenerator({GameModel}) {
    let result =[]
    let checkers = GameModel._board._checkers

    /**
     * @var ch
     */
    for (/**@var {Checker} checker */ const checker of checkers ) {
        const row = checker._row
        const column = checker._column

        result.push(<BlackChecker key ={`cheker_${column}_${row}`} x={column} y={row}/>)
    }
    return result
}


export default