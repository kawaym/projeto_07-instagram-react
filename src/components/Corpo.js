const retornoServidor = [
    {
        author:"barked",
        authorImage:"barked",
        contentFile:"dog",
        engager:"adorable_animals",
        engagerImage:"adorable_animals",
        numberReactions:"99.159"
    },
    {
        author:"barked",
        authorImage:"barked",
        contentFile:"dog",
        engager:"adorable_animals",
        engagerImage:"adorable_animals",
        numberReactions:"99.160"
    },
]
export default function Corpo(){
    return(
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <div class="story">
                    <div class="imagem">
                        <img src="assets/img/9gag.svg" />
                    </div>
                    <div class="usuario">
                        9gag
                    </div>
                    </div>

                    <div class="story">
                    <div class="imagem">
                        <img src="assets/img/meowed.svg" />
                    </div>
                    <div class="usuario">
                        meowed
                    </div>
                    </div>

                    <div class="story">
                    <div class="imagem">
                        <img src="assets/img/barked.svg" />
                    </div>
                    <div class="usuario">
                        barked
                    </div>
                    </div>

                    <div class="story">
                    <div class="imagem">
                        <img src="assets/img/nathanwpylestrangeplanet.svg" />
                    </div>
                    <div class="usuario">
                        nathanwpylestrangeplanet
                    </div>
                    </div>

                    <div class="story">
                    <div class="imagem">
                        <img src="assets/img/wawawicomics.svg" />
                    </div>
                    <div class="usuario">
                        wawawicomics
                    </div>
                    </div>
                    
                    <div class="story">
                    <div class="imagem">
                        <img src="assets/img/respondeai.svg" />
                    </div>
                    <div class="usuario">
                        respondeai
                    </div>
                    </div>

                    <div class="story">
                    <div class="imagem">
                        <img src="assets/img/filomoderna.svg" />
                    </div>
                    <div class="usuario">
                        filomoderna
                    </div>
                    </div>

                    <div class="story">
                    <div class="imagem">
                        <img src="assets/img/memeriagourmet.svg" />
                    </div>
                    <div class="usuario">
                        memeriagourmet
                    </div>
                    </div>

                    <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
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
            {retornoServidor.map(Post)}
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