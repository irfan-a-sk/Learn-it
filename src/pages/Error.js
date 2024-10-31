import { Link } from "react-router-dom";

const Error =() => {
    return(
        <div className="not-found">
        <h1>404 - Page Not Found</h1> 
  
        <p>The page you are looking for does not exist.</p>
        <Link className="go-back" to="/">Go back 
   to homepage</Link>
      </div>
    )
}

export default Error