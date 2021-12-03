import './MenuBotoes.css';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <button type="button" id="btnAutores" className="btn btn-secondary">Autores</button>
      <button type="button" id="btnEditoras" className="btn btn-success">Editoras</button>
      <button type="button" id="btnLivros" className="btn btn-danger">Livros</button>
      <button type="button" id="btnUsuarios" className="btn btn-warning">Usuários</button>
      <button type="button" id="btnConfig" className="btn btn-info">Configurações</button>
      
    </div>
  );
}

