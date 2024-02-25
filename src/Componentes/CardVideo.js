import InfosUsuario from "./InfosUsuario";

const nomeUser = 'LuizZzZ';
const imgUser = 'https://picsum.photos/id/64/100/100';

export default function CardVideo(props) {
    const titulo = "Título do vídeo";
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.imgVideo} alt="" />
            <h3>{props.nomeVideo}</h3>
            <InfosUsuario nome={nomeUser} imgUser={imgUser} />
        </div>
    )

}