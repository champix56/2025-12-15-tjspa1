import { Link } from "react-router"

const Home:React.FC = () => {
  return (
    <div>
      <h1>Bienvenue sur le createur de memes de &copy;HAMPIX</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis impedit adipisci exercitationem dignissimos hic pariatur laudantium, sapiente doloribus! Perspiciatis vero, nam mollitia veritatis aliquid vel voluptatibus eum doloremque dolore!
      </p>
      <p>selectionnez votre action</p>
      <ul>
        <li><Link to="/thumbnail">Tumbnail</Link></li>
        <li><Link to="/editor">New meme</Link></li>
        <li><Link to="/editor/3">editor meme.id=3</Link></li>
      </ul>
    </div>
  )
}
export default Home