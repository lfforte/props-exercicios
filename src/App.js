import React from "react";
import "./styles.css";
import CardVideo from "./Componentes/CardVideo";

const tituloVideo = "Título do vídeo";
const imgVideo = "https://picsum.photos/400/400?a=1";
const imgVideo1 = "https://picsum.photos/400/400?a=2";
const imgVideo2 = "https://picsum.photos/400/400?a=3";
const imgVideo3 = "https://picsum.photos/400/400?a=4";
const imgVideo4 = "https://picsum.photos/400/400?a=5";
const imgVideo5 = "https://picsum.photos/400/400?a=6";
const imgVideo6 = "https://picsum.photos/400/400?a=7";
const imgVideo7 = "https://picsum.photos/400/400?a=8";

export default function App() {

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo nomeVideo={tituloVideo} imgVideo={imgVideo} />
            <CardVideo nomeVideo={tituloVideo} imgVideo={imgVideo1} />
            <CardVideo nomeVideo={tituloVideo} imgVideo={imgVideo2} />
            <CardVideo nomeVideo={tituloVideo} imgVideo={imgVideo3} />
            <CardVideo nomeVideo={tituloVideo} imgVideo={imgVideo4} />
            <CardVideo nomeVideo={tituloVideo} imgVideo={imgVideo5} />
            <CardVideo nomeVideo={tituloVideo} imgVideo={imgVideo6} />
            <CardVideo nomeVideo={tituloVideo} imgVideo={imgVideo7} />
          </section>
        </main>

        <footer>
          <h4>Copyright © 2022 Labenu All rights reserved.</h4>
        </footer>
      </div>
    </div>
  );
}
