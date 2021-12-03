const retornoServidorPosts = [
    {
        author:"barked",
        authorImage:"barked",
        typeContent: "img",
        contentName:"dog",
        engager:"Animais Adoráveis",
        engagerImage:"adorable_animals",
        numberReactions:"99.159"
    },
    {
        author:"barked",
        authorImage:"barked",
        typeContent: "video",
        contentName:"video",
        engager:"Responde aí",
        engagerImage:"respondeai",
        numberReactions:"99.160"
    },
]
const retornoServidorStories = [
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
    {
        author: "9gag",
        authorImage: "9gag"
    },
]
const retornoServidorUser = {
    userImage: "catanacomics",
    userNickname: "catanacomics",
    userPublicName: "Catana"
}
const retornoServidorSuggestions = [
    {
        suggestionImage: "bad.vibes.memes",
        suggestionUser: "Bad Vibe Memes",
        suggestionReason: "mutual_follow"
    },
    {
        suggestionImage: "bad.vibes.memes",
        suggestionUser: "Bad Vibe Memes",
        suggestionReason: "new_user"
    },
    {
        suggestionImage: "bad.vibes.memes",
        suggestionUser: "Bad Vibe Memes",
        suggestionReason: "easter_egg"
    },
]
export default function Corpo(){
    return(
        <div class="corpo">
            <Main />
            <Sidebar />            
        </div>
    );
}
function Main(){
    return(
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}
function Posts(){
    return(
        <div class="posts">
            {retornoServidorPosts.map(Post)}
        </div>    
    )
}
function Post(props){
    const authorImage = `assets/img/${props.authorImage}.svg`;
    const engagerImage = `assets/img/${props.engagerImage}.svg`;
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
                <Content type={props.typeContent} contentName={props.contentName}/>
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
function Content(props){
    let mp4;
    let ogg;
    let img;
    switch (props.type){
        case 'img':
            img = `assets/${props.type}/${props.contentName}.svg`;
            return(
                <img src={img}/>
            )
        case 'video':
            mp4 = `/assets/${props.type}/${props.contentName}.mp4`;
            ogg = `/assets/${props.type}/${props.contentName}.ogv`;
            return(
            <video width="612" height="100%" autolay muted>
                    <source src={mp4} type="video/mp4"/>
                    <source src={ogg} type="video/ogg"/>
                  Your browser does not support the video tag.
            </video>
            );
    }
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

// DIVISÃO DE LADO DO CORPO
// =============================================================
// =============================================================
// =============================================================
// DIVISÃO DE CORPO

function Sidebar(){
    return (
        <div class="sidebar">
                <UserProfile {...retornoServidorUser} />
                <Suggestions />
                

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}
function UserProfile(props){
    const userImage = `assets/img/${props.userImage}.svg`;
    return(
        <div class="usuario">
            <img src={userImage} />
            <div class="texto">
                <strong>{props.userPublicName}</strong>
                {props.userNickname}
            </div>
        </div>
    );
}
function Suggestions(){
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {retornoServidorSuggestions.map(Suggestion)}
        </div>
    )
}
function Suggestion(props){ 
    const suggestionImage = `assets/img/${props.suggestionImage}.svg`;
    let suggestionReason;
    switch (props.suggestionReason){
        case 'mutual_follow':
            suggestionReason = "Segue Você";
            break;
        case 'new_user':
            suggestionReason = "Novo no Instagram";
            break;
        case 'easter_egg':
            suggestionReason = "Ovo de Páscoa";
            break;
    }
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={suggestionImage} />
                <div class="texto">
                    <div class="nome">{props.suggestionUser}</div>
                    <div class="razao">{suggestionReason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}