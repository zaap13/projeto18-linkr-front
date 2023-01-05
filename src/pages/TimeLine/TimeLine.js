import { PublicMain } from "../../assets/styles/styles";
import Post from "./Post";
import PostCreator from "./PostCreator";

export default function TimeLine() {

  return (
    <PublicMain onlyColumn={true}>
      <PostCreator />
      <Post/>
    </PublicMain>
  );
}
