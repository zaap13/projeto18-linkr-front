import HeaderStyle from "./HeaderStyle";

export default function Header() {
    return(
        <HeaderStyle>
            <h1>linkr</h1>
            <div>
                <input type="text" placeholder="Search for people"/>
                <button type="submit">
                    <ion-icon name="search"></ion-icon>
                </button>
            </div>
            <div>
                <ion-icon name="chevron-down"></ion-icon>
                <img src="" alt="profile"/>
            </div>
        </HeaderStyle>
    )
}