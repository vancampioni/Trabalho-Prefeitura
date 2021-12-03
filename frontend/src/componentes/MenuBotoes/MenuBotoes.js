import './MenuBotoes.css';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <button type="button" id="btnPrefeituras" className="btn btn-secondary">Prefeituras</button>
      <button type="button" id="btnFuncionarios" className="btn btn-success">Funcionários</button>
      <button type="button" id="btnConfig" className="btn btn-info">Configurações</button>
      
    </div>
  );
}

