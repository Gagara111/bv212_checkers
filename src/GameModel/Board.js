import Checker from "./Checker.js";

class Board {
    checkers =[]

    constructor() {
        this.checkers.push(new Checker(1,8)) ;
        this.checkers.push(new Checker(1,8)) ;
        this.checkers.push(new Checker(1,8)) ;
        this.checkers.push(new Checker(1,8)) ;
        this.checkers.push(new Checker(1,8)) ;

    }
}

export default Board;