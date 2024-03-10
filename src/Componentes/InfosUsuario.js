export default function InfosUsuario(props) {

    return (
        <div className="info-usuarios">
            <img src={props.imgUser} />
            <p><b>Autor:</b>{props.nome}</p>
        </div>
    )
}