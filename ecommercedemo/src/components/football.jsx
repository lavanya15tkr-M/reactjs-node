import Goal from "./goal";
import MissedGoal from "./missedgoal";

function Football(props) {
    const isGoal = props.isGoal;

    return (
        <div>
            <h1>Football Match</h1>
            {isGoal ? <Goal /> : <MissedGoal />}
        </div>
    );
}

export default Football;