import Image from "../../../../Img/black_checker.png"

function BlackChecker({x, y}) {
    return <div style={{gridColumn: y, gridRow: x}}>
           <img src={Image} alt={""}/>
           </div>;
}

export default BlackChecker;