import { Link } from "react-router-dom"
function Login(){
    return(
        <div>
    <h1>Login page</h1>
    <p><input type="text" placeholder="name" /></p>
    <p><input type="password" placeholder="password" /></p>
    <p><button>Login</button></p>
    <Link to="/register">New User Register here</Link>
    </div>
)
}
export default Login