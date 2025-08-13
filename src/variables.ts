import marmip from "./assets/mp.png";
import marmig from "./assets/mp.png";
import marmif from "./assets/mp.png";


const enterpriceData = {
  razaoSocial: "Nome da Empresa",
  cnpj: "00.000.000/0000-00",
  telefone: "99 9999 9999",
  linkFacebook: "https://facebook.com",
  linkInstagran: "https://instagran.com",
  linkLinkedin: "https://linkedin.com",
  linkWhatsappMe: "https://whasappweb.com",
  endereco: ["Avenida ou rua, numero", "Cidade, Estado"],
  horarioFuncionamento: ["Dia da semana", "Horarios"],
  produtos: [
    {   
        id: 1,
      titulo: "Produto 1",
      descricao:
        "Descrição completa, indicando beneficeos e descontos e também itens esperados no pedido.",
      valor: "00,00",
      imagem: marmip,
      rating: 5,
    },
    {
        id: 2,
      titulo: "Produto 2",
      descricao:
        "Descrição completa, indicando beneficeos e descontos e também itens esperados no pedido.",
      valor: "00.00",
      imagem: marmig,
      rating: 5
    },
    {
        id: 3,
      titulo: "Produto 3",
      descricao:
        "Descrição completa, indicando beneficeos e descontos e também itens esperados no pedido.",
      valor: "00.00",
      imagem: marmif,
      rating: 5
    },
  ],
  email: "nomeDaEmpresa@email.com"
};

export default enterpriceData;
