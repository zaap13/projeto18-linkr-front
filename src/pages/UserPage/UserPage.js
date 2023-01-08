import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, loading_url } from "../../constants/url";
import { PublicMain } from "../../assets/styles/styles";
import Header from "../../components/Header/Header";
import { PostCard } from "../../assets/styles/styles";
import { ContainerPosts, Gif } from "./UserPageStyle"


export default function UserPage() {
    //const { id } = useParams();
    const id = 10
    const [userData, setUserData] = useState("");
    const [userPosts, setUserPosts] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("linkr"));
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
console.log(`${BASE_URL}/user/${id}`, config)
        axios
            .get(`${BASE_URL}/user/${id}`, config)
            .then((res) => {
                setUserData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

console.log(userData)

    if (loading === true) {
        return (
            <PublicMain>
                <Header />
                <Gif>
                    <img src={loading_url} alt="loading" />
                </Gif>
            </PublicMain>
        );
    };

    return (
        <PublicMain>
            <Header />
            <ContainerPosts>
                <h1>{userData.username}</h1>
                <PostCard />
                <PostCard />
                <PostCard />
            </ContainerPosts>
        </PublicMain>
    );
};