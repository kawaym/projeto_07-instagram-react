const retornoServidorPosts = [
    {
        author:"barked",
        authorImage:"barked",
        contentFile:"dog",
        engager:"Animais Adoráveis",
        engagerImage:"adorable_animals",
        numberReactions:"99.159"
    },
    {
        author:"barked",
        authorImage:"barked",
        contentFile:"dog",
        engager:"Responde aí",
        engagerImage:"respondeai",
        numberReactions:"99.160"
    },
]
const retornoServidorStories = [
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
    {
        author: "9ag",
        authorImage: "9gag"
    },
]
export default function Corpo(){
    return(
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <div class="sidebar">
                <div class="usuario">
                    <img src="assets/img/catanacomics.svg" />
                    <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/bad.vibes.memes.svg" />
                        <div class="texto">
                            <div class="nome">bad.vibes.memes</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/chibirdart.svg" />
                        <div class="texto">
                            <div class="nome">chibirdart</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/razoesparaacreditar.svg" />
                        <div class="texto">
                            <div class="nome">razoesparaacreditar</div>
                            <div class="razao">Novo no Instagram</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/adorable_animals.svg" />
                        <div class="texto">
                            <div class="nome">adorable_animals</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/smallcutecats.svg" />
                        <div class="texto">
                            <div class="nome">smallcutecats</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
            </div>
        </div>
    );
}
function Posts(){
    return(
        <div class="posts">
            {retornoServidorPosts.map(Post)}
        </div>    
    )
}
function Post(props){
    const authorImage = `assets/img/${props.authorImage}.svg`
    const contentFile = `assets/img/${props.contentFile}.svg`
    const engagerImage = `assets/img/${props.engagerImage}.svg` 
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={authorImage} />
                    {props.author}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={contentFile} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={engagerImage} />
                    <div class="texto">
                        Curtido por <strong>{props.engager}</strong> e <strong>outras {props.numberReactions} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Stories(){
    return(
        <div class="stories">
            {retornoServidorStories.map(Story)}
            <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
function Story(props){
    const authorImage = `assets/img/${props.authorImage}.svg`;
    return(
        <div class="story">
            <div class="imagem">
                <img src={authorImage} />
            </div>
            <div class="usuario">
                {props.author}
            </div>
        </div>
    )
}