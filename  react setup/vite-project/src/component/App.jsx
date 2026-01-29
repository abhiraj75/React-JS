import "./App.css"

export default function Header(props){
    return <div className="header"><p>Welcome {props.name}</p></div>
}

export function Main(){
    return <div className="main"><p>Main</p></div>
}

export function Footer(){
    return <div className="footer"><p>Footer</p></div>

}