import "./header.css"
import logo from "../../assets/logo.png"
export default function Header(){
    return <div className="Header__container">
        <img src={logo} className="logo"></img>
        <ul className="menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
}