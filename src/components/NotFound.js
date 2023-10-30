import { Link } from "react-router-dom";

function NotFound() {
    return (
        <p>
            <span>Sorry page not found</span><br></br>
            <Link to="/">Back to home...</Link>
        </p>
    );
}

export default NotFound;
