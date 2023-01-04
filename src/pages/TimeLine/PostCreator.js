import { CreationBox } from "../../assets/styles/styles";

export default function PostCreator() {
  return (
    <CreationBox>
      <img
        src="https://st3.depositphotos.com/6962450/14134/i/600/depositphotos_141349842-stock-photo-the-emblem-of-the-sports.jpg"
        alt="vasco"
      ></img>
      <h1>What are you going to share today?</h1>
      <form>
        <input placeholder="http://..." />
        <input placeholder="Awesome article about #javascript" />
        <button>Publish</button>
      </form>
    </CreationBox>
  );
}
