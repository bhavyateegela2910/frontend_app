import { Link } from "react-router-dom" 
function Register (){
    return (
        <div>
            <h2>Register page  </h2>
            <p><input type="text" placeholder="name" /></p>
            <p><input type="email" placeholder="email" /></p>
            <p><input type="password" placeholder="password" /></p>
            <p><button>Submit</button></p> 
            <p><Link to="/login">Already have an account? Login here</Link></p>
        </div>
    )
}
export default Register