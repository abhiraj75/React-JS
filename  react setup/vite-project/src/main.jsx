import { createRoot } from 'react-dom/client'
import Header , {Main} from './component/App.jsx'
import {Footer} from './component/App.jsx'

createRoot(document.getElementById('root')).render(
 <div>
    <Header name="Abhiraj"/>
    <Main/>
    <Footer/>
</div>
)
