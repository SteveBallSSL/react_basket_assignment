
function Card(props){
    return <div className="col">
                <div className="card">
                    {props.children}
                </div>
            </div>;
}
export default Card;