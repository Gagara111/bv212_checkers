import Image from "../../../../Img/white_checker.png";

function WhiteChecker({x,y}) {
    return <div style={{groundColumn:x, gridRow:y}}>
        <img src={Image} alt={""}/>
    </div>;
}

export default WhiteChecker;