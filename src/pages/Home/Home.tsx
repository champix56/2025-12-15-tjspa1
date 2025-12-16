import { Link } from "react-router"

const Home: React.FC = () => {
    return (
        <div>
            <h1>Hello</h1>
            <p>
                liste des liens disponibles :
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/thumbnail">Thumbnail</Link></li>
                    <li><Link to="/editor">Editor</Link></li>
                    <li><Link to="/editor/0">Editor id:0</Link></li>
                </ul>
            </p>
        </div>
    )
}

export default Home