import { useNavigate } from "react-router-dom";

function Form(){
    const Nav = useNavigate();
    const gohome=()=>{
        Nav("/");
    }

    return(
        <div>
            <h1>Registration form</h1>
            <form action="">
                <input type="text" placeholder="Name" /><br /><br />
                <input type="text" placeholder="Email" /><br /><br />
                <input type="text" placeholder="Password" /><br /><br /><br />
                <input type="submit" />
            </form>
        <br /><br />
            <button onClick={gohome}>Home</button>
        </div>
    )
}

export default Form;

