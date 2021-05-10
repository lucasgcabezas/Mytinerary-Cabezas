
const Activity = ({activity}) => {

    const {name, img} = activity

    return(
        <div className="activity" style={{backgroundImage : `url('/assets/activities/${img}')`}}>
            <span className="activityTitle">{name}</span>
        </div>
    )
}

export default Activity