import { PostCard } from "../../assets/styles/styles";

export default function Post({ username }) {
  return (
    <PostCard>
      <img
        src="https://st3.depositphotos.com/6962450/14134/i/600/depositphotos_141349842-stock-photo-the-emblem-of-the-sports.jpg"
        alt="vasco"
      ></img>
      <h1>{username ? username : "Juvenal Juvêncio"}</h1>
      <p>
        Lorem ipsum dolor sit amet. Et quos amet est consequatur libero ut quia
        reiciendis 
      </p>
    </PostCard>
  );
}
