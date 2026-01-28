// const root=document.querySelector("#root")
// const element=React.createElement("h3",{clasName:"sem2",id:"abc"},"Hello React")
// ReactDOM.render(element,root)

// const ele= <p>Hello Abhiraj</p>
// const ele2=<div>
//     <p>Hello</p>
//     <p>Welcome</p>
// </div>

// ReactDOM.render(ele,root)
// ReactDOM.render(ele2,root)

// function App(){
//     return <p>Hello From React Component</p>
// }

// ReactDOM.render(App(),root)

// const root=ReactDOM.createRoot(document.querySelector("#root"))
// root.render(<App/>)



// function App(props){
//     return <p>Hello From React Component {props}</p>
// }

// const a=App("Abhiraj")
// const root=ReactDOM.createRoot(document.querySelector("#root"))
// root.render(a)


// function App(props){
//     return <div>
//         {props.books.map((ele)=>{
//             return <li style={{color:"red",background:"black"}}>{ele}</li>
//         })}
//     </div>
// }

// const root=ReactDOM.createRoot(document.querySelector("#root"))
// root.render(<App books={["javascript", "css", "html", "react"]}/>)

function Main(){
    return <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veritatis, ipsam distinctio labore animi obcaecati rerum, repudiandae eum mollitia nostrum tempora illum doloremque dolores iure dicta exercitationem, consequatur adipisci laborum.    
        </p>
    
}


function Header(props){
    return <div>
        <h1 style={{font_size:"45px" ,color:"red", background:"black"}}>Welcome To Polaris {props.name}</h1>
        <p>{props.age>18?"he is an adult":"he is kid"}</p>
    </div>
}

function Footer(){
    return <footer>Contacts</footer>
}
function App(){
    return(
        <>
        <Header name="Abhiraj" age={18}/>
        <Main/>
        <Footer/>
        </>
    )
}

const root=ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)