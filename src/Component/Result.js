const Result = (props) => {
    return (
        <div>
            <p style={{ backgroundColor: " rgb(201, 240, 240)" }}>Weather Details of City: {props.city}</p>
            <p>Current Temperature : {props.result.temp}</p>
            <p>Temperature Range : {props.result.temp_max} to {props.result.temp_min}</p>
            <p>Humidity : {props.result.humidity}</p>
            <p> Sea level : {props.result.sea_level}</p>
            <p>Ground Level : {props.result.grnd_level}</p>

        </div>
    )
}
export default Result;