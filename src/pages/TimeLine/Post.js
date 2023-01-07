import { PostCard } from "../../assets/styles/styles";
import getMetaData from "metadata-scraper";

async function getUrlData(link) {
  const url = link;
  const data = await getMetaData(url);
  return data;
}

export default function Post({ name, picture, content, url }) {
  const urlDetails = getUrlData(url);
  return (
    <PostCard>
      <img src={picture} alt="profile"></img>
      <h1>{name}</h1>
      <p>{content}</p>
    </PostCard>
  );
}
