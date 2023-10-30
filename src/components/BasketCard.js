
function BasketCard(props){
    return <div className="col m-2">
                <div className="card p-2">
                    {props.children}
                </div>
            </div>;
}
export default BasketCard;