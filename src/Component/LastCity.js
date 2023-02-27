const LastCity = (props) => {
    return (
    <div className="last">

        <h2>Last 3 City entries</h2>
        {
            props.last.map((itm,index)=>{
                return(
                    <p key={index}>{itm}</p>
                )
            })
        }
    </div>
 )
}
export default LastCity;