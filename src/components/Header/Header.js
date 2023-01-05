import { HeaderStyle, SearchContainer } from "./HeaderStyle";

export default function Header() {
    return(
        <HeaderStyle>
            <h1>linkr</h1>
            <SearchContainer>
                <div>
                    <input type="text" placeholder="Search for people"/>
                    <button type="submit">
                        <ion-icon name="search"></ion-icon>
                    </button>
                </div>
                {/* <div>
                    <img src="https://a-static.mlcdn.com.br/800x560/carrinho-brinquedo-vermelho-racer-55-mk206-dismat-dismat-brinquedos/emporiocasa/921943/988c845844f9d8c11c4b14cc7aaff15c.jpg" alt="profile"/>
                    <p>Nome da pessoa</p>
                </div> */}
            </SearchContainer>
            <div>
                <a href="*">
                    <ion-icon name="chevron-down"></ion-icon>
                    <ion-icon name="chevron-up">
                        <a href="*">Logout</a>
                    </ion-icon>
                </a>
                <img src="https://a-static.mlcdn.com.br/800x560/carrinho-brinquedo-vermelho-racer-55-mk206-dismat-dismat-brinquedos/emporiocasa/921943/988c845844f9d8c11c4b14cc7aaff15c.jpg" alt="profile"/>
            </div>
        </HeaderStyle>
    )
}