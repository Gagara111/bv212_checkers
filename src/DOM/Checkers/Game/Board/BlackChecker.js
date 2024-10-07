import image from "../../../../Img/black_checker.png;

        function BlackChecker(props) {
    return <div style={{groundColumn:props.y, gridRow:props.x}}>
        <img src={Image} alt={{""}}/>
    </div>;
      }

export default BlackChecer;