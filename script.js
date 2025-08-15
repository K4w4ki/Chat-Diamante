
// script.js
const scripts = [
  {
    title: "SAUDAÇÕES",
    content: `Bom dia xxx, tudo bem?

Boa tarde xxx, tudo bem?

Boa noite xxx, tudo bem?

Eu estou bem, obrigado por perguntar!

Em que posso te ajudar neste momento?`
  },

  {
    title: "SOLICITAÇÃO DE DADOS",
    content: `O seu e-mail e o seu telefone estão atualizados? 

Me informa o seu e-mail e o seu telefone, por favor.

Me informa o seu e-mail e o seu telefone e o melhor horário para contato.`
  },

  {
    title: "PROTOCOLO - REGISTRO",
    content: `* Modelo ∙ N2

Encaminhei a ocorrência de XXXXXX para a área interna da Natura e 
tem até o dia XXXX para a área interna analisar e finalizar a 
tratativa. Lembrando que as demais informações, chegara para 
você por e-mail, é só você aguardar e acompanhar por lá. 
OBS: Caso aconteça de você não ter recebido as informações por email até o prazo que eu informei, você pode retornar um dia depois 
com o protocolo para que possamos verificar e te passar as 
informações. 
O protocolo da ocorrência é XXXXX`
  },

  {
    title: "DESCULPA",
    content: `Peço perdão pelo transtorno, viu? Mas de coração, espero poder ajudar da melhor forma possível!`
  },


  {
    title: "Dados - Confirnação.",
    content: `Para que eu possa seguir com o atendimento, você poderia me informar o seu CPF + Nome completo, por gentileza?
`
  },


  {
    title: "REDE - Coleta de Dados",
    content: `Nome completo da Cliente:
CPF da Cliente:
Número do pedido:
Código unitário do produto e quantidade:
Lote:
Validade:
Email da Cliente:
Telefone da Cliente:
Endereço da Cliente:
CEP da Cliente:`
  },
  {
    title: "CAN - Coleta de Dados",
    content: `Número do pedido:
Código unitário do produto e quantidade:
Lote:
Validade:
Cheio, vazio ou pela metade:
Descrição do defeito:
Email:
Telefone:`
  },
  {
    title: "Recalculo / Promoção Não Aplicada",
    content: ` **  Promoção não aplicada  **

Número do pedido:
Código do produto e quantidade atingida:
Valor devido:
Valor cobrado:
Email:
Telefone:
Promoção de revista ou app?
Evidência:

**  Recálculo da nota  **

Nº Pedido:
Ciclo:
Nota fiscal (NF):
Produto:
Valor cobrado: R$
Valor correto: R$
`

  },
  {
    title: "Defeito - Solicitação",
    content: 
`Para que consigamos abrir uma solicitação de defeito, peço que me informe alguns dados que estarei solicitando em seguida:

Número do pedido: 	
Código unitário do produto e quantidade: 
Lote: 
Validade:
Estado da caixa do pedido: 
Cheio, vazio ou pela metade: 
Descrição do defeito:
Imagem do produto defeituoso.`

  },

  {
    title: "Produto - FALTA",
    content: 
`Para que consigamos abrir uma solicitação referente a falta do produto, peço que me informe alguns dados que estarei solicitando em seguida:

Número do pedido: 	
Código unitário do produto e quantidade: `

  },


  {
    title: "CHECKLIST PARA FALTA - PRODUTO FATURADO",
    content: `Informações para implementar na tabulação.
* Número do pedido:
* Item(s) faltante(s) (Nome do produto + Código):
* Item consta na NF?:
* Quantidade de caixas a ser entregue no pedido: 
  :Exemplo de sondagem:  seu pedido deveria ter quantos volumes (caixas) no total? E quantos você recebeu?

* Caixas lacradas ou com sinal de violação?: 
* Item faz parte de kit? Se sim, informar nome do kit e qual item faltou:
* Recebeu produto a mais? Se sim, informar Código + Nome do produto:
* Quem realizou a captação do pedido?:`
  },

	
  {
    title: "Protocolo Aberto",
    content: `A ocorrência foi direcionada para o setor responsável. Número do Protocolo é o xxxxxx com previsão para a conclusão e resposta até o dia xx/xx, o retorno é feito por email. Lembrando que esta é apenas o prazo limite para respostas e a nossa equipe costuma entrar em contato muito antes que o informado! `
  },


  {
    title: "TRANSPORTE - ATRASO",
    content: `**  Analise – Solicitar pedido  **

Compreendo, irei analisar em sistema, poderia me informar o 
número do pedido para que eu possa analisar? 

**  Um momento – Analise  **
Obrigado, por gentileza, peço que aguarde um momento, irei verificar. 
😊🕒

**  Informar que será registrado  **

Peço desculpas por esse transtorno que foi causado a você, eu irei 
registrar uma ocorrência de atraso na entrega, para que a área 
interna faça uma análise e te retorne uma posição pelo seu E-mail.

**  Retorno pois está no prazo  **

Verifiquei em sistema, consta que o pedido está no prazo para 
recebimento, sendo assim, eu apenas irei deixar registrado a 
informação. `
  },


  {
    title: "VALE-PONTOS",
    content: ` **  Produto virou vale pontos  ** 

Eu verifiquei no sistema, e consta que o seu produto foi 
convertido em vale pontos para que você possa resgatar um 
outro produto.


**  Enviar para o N2 – Não virou vale pontos.  **

Como já passou o prazo de dois ciclos e o produto não foi 
convertido em vale pontos, irei registrar uma ocorrência para 
que a área interna da natura faça uma análise.`
  },


  {
    title: "CANCELAMENTO DE PEDIDO",
    content: `**  Solicitar pedido  **

Qual o número do pedido que você deseja o cancelamento? 

**  Motivo do cancelamento  **

Qual é o motivo do cancelamento do pedido? 

**  Confirmação combinado  **

Consta em sistema que é um pedido combinado, sendo assim se eu 
solicitar o cancelamento de um, ambos serão cancelados. Posso 
prosseguir com o cancelamento? 

**  Pedido cancelado  **

Eu registrei a ocorrência em sistema. O seu pedido foi cancelado. A 
confirmação chega para você por e-mail junto com o número de 
protocolo.

**  Cancelamento de pedido em transporte  **

Eu registrei a solicitação de cancelamento, a confirmação chegará 
para você por e-mail junto com o número de protocolo. Como 
consta que o seu pedido está em transporte ele será devolvido para 
a natura até o dia XXXXX. 

**  Erro 20 Preparação da caixa  **

Ao fazer o registro de cancelamento, infelizmente deu erro, peço 
que você retorne assim que o seu pedido estiver em transporte. 
Você pode acompanhar o Status do seu pedido pelo App/Site.`
  },


  {
    title: "TRANSFERÊNCIA - SEMENTE 🌱",
    content: `Oii! Tudo bem por aí?
Então, vi aqui que seu atendimento é referente ao nível Semente, e tem uma equipe certinha que cuida dessa parte.
Vou te encaminhar pra eles agora, tá? Assim você já recebe a ajuda certinha. 💚`
  },

  {
    title: "TRANSFERÊNCIA - BRONZE 🥉",
    content: `E aí, tudo tranquilo?
Seu atendimento é relacionado ao nível Bronze, e quem cuida disso é um outro time especializado.
Já tô te transferindo pra eles, beleza? Daqui a pouco te atendem direitinho. ✨`
  },

  {
    title: "TRANSFERÊNCIA - PRATA 🥈",
    content: `Opa! Como você tá?
Vi aqui que sua solicitação é do nível Prata, e quem atende por aqui é um time diferente que cuida desse perfil.
Vou te encaminhar pra eles agora, rapidinho! Qualquer coisa, tô por aqui. 😉`
  },


  {
    title: "TRANSFERÊNCIA - OURO 🥇",
    content: `Oii! Tudo certinho?
Seu atendimento é do nível Ouro, e tem um setor específico que acompanha esses casos.
Já vou te direcionar pra equipe certa, que vai te dar aquela força! 🧡`
  },





  {
    title: "Encerramento",
    content: `O protocolo do seu atendimento é xxxxxxxxxxxxxxx

Eu agradeço a sua atenção e paciência, foi um prazer falar com você hoje!💖🥰
Lembrando que até amanhã você poderá receber  em seu whatsapp uma pesquisa para avaliar o meu atendimento.
È importante que responda para o meu Desenvolvimento.
Lembrando que de 9 á 10 são notas satisfatórias 💖
Fico aguardando a sua avaliação!`
  },


  {
    title: "CESSAMENTO - CESSADO",
    content: `Seu cadastro foi cessado por inatividade, pois você ficou tempo demais sem passar 
pedidos. Caso você queira voltar a revender, por gentileza acesse o site 
http://www.natura.com.br/cadastre-se e preencha os dados. Caso não consiga concluir 
pois informa que o CPF já está cadastrado entre em contato com a nossa central pelo 
número: 0800 –762- 8872 com a nossa central. Funcionamos de segunda à sexta das 
07:00 às 22:00 e sábado das 09:00 às 20:00.`
  },


  {
    title: "Bloqueio 5 - Política interna.",
    content: `Agradecemos seu interesse em desempenhar as atividades de Consultoria Natura. 
Informamos que foi realizada uma análise interna no cadastro e de acordo com as 
políticas atuais da empresa, não foi possível a sua aprovação e infelizmente, o cadastro 
não é passível de reanálise para desbloqueio.`
  },


  {
    title: "Bloqueio 19",
    content: `Seu cadastro foi bloqueado por títulos cedidos para as nossas empresas parceiras. 
Quando um título fica muito tempo vencido no sistema, a Natura&Co realiza a venda dos 
mesmos, nossa principal parceira é a Recovery que você poderá contatar pelo telefone 
(11) 4765-8402 e realizar dos boletos vendidos. Após realizar o pagamento de todos você 
deverá solicitar a carta de quitação de títulos e nos enviar por aqui ou pelo e-mail 
natconsultora@natura.net.`
  },


  {
    title: "Bloqueio 7",
    content: `Seu cadastro foi bloqueado por títulos vencidos, você não conseguirá passar pedidos em outra modalidade que não seja à vista no momento. Realize um acordo pelo site ou 
aplicativo Minha Consultoria na aba de "meus títulos", selecione todos os boletos 
vencidos e clique em "formas de pagamento". Lá você conseguirá localizar o meio de 
pagamento, quantidade de parcelas, prazo para primeira parcela e as futuras. Após o 
pagamento da primeira parcela, dentro de 72 horas o seu cadastro já deverá ser 
desbloqueado. É importante lembrar que este bloqueio altera a sua modalidade 
comercial e ficará na modalidade à vista, futuras análises devem ser realizadas e caso 
você passe pedidos e realize o pagamento de maneira correta para que as novas análises`
  },


  {
    title: "Falta de Interação",
    content: `Protocolo aberto: XXXXXXXXXXXXXXX

Devido à falta de interação no chat o nosso atendimento será encerrado! A Consultoria de Beleza agradece o seu contato e caso você precise retornar nós funcionamos de Seg a Sex das 07:00 às 22:00 - Sábado 09:00 ás 20:00. Uma boa tarde para você querida consultora e até breve!!`
  },
  {
    title: "Impossibilidade Sistêmica",
    content: `Devido a uma impossibilidade sistêmica não vai ser possível prosseguir com a sua solicitação no momento. Eu sinto muito pelo transtorno causado e peço que por gentileza, retornar contato em 1 hora, para que nós possamos prosseguir com a sua solicitação. A nossa central funciona de Seg à Sex das 07:00 às 22:00 - nos sábados das 09:00 ás 20:00h. Nós agradecemos a sua compreensão e um abraço da Consultoria de Beleza!`
  },


  {
    title: "SEM OS DADOS EM MÃOS",
    content: `Se você não estiver as informações necessárias em mãos, peço que por gentileza, retorne mais tarde com os dados em mãos, para que possamos prosseguir com o seu atendimento e que não aconteca um congestionamento de fila de atendimento. Eu sinto muito pelo transtorno causado. A Consultoria de Beleza agradece o seu contato e caso você precise retornar nós funcionamos de Seg a Sex das 07:00 às 22:00 - Sábado 09:00 ás 20:00. Uma boa tarde para você querida consultora e até breve!!`
  },

  {
    title: "Pontuação - Aumento de pontos",
    content: `Nós não conseguimos aumentar os seus pontos de crédito por aqui! Existem duas formas de aumentar os seus pontos, sendo a primeira realizar o pagamento de títulos que 
estejam em aberto. A segunda forma seria entrando em contato com a nossa assistente 
virtual pelo Whatsapp 11 93036-0000 e solicitar a ela um aumento de pontos!`
  },

  {
    title: "Reparações - Incorporação",
    content: ` O sistema disponibilizou a incorporação como reparação. Você já sabe como funciona?

A incorporação é a disponibilização de produtos que foram danificados ou faltaram no
seu pedido. Para resgatar a incorporação basta passar pedidos dentro de até 2 ciclos (não
é no próximo pedido e sim dentro de 2 ciclos). Para aceitar a incorporação, no momento
em que você for passar fo pedido, basta clicar em "aceitar" que o produto será adicionado
na sua caixa completamente isento de custos! Caso você não consiga ou possa passar
pedidos dentro de 2 ciclos, ou o produto incorporado não esteja disponível no estoque, os
produtos tornam-se vale pontos que podem ser utilizados para resgatar brindes e outros
produtos não promocionais.
Lembrando que uma vez que a solução da incorporação for disponibilizada não há como
alterá-la. Você aceita esse meio de reparação?`
  },
  {
    title: "Reparações - Nota de Crédito",
    content: `Nota de crédito, como diz pelo próprio nome, é um crédito que ficará disponível em
sistema de acordo com preço dos produtos que estavam danificados ou faltaram nos
pedidos das consultoras. Esta nota será abatida automaticamente pelo sistema em seu
próximo pedido ou em um título que já esteja em aberto, isso significa que você irá pagar
a diferença entre o título e a nota de crédito!

Com a nota de crédito, o valor é disponibilizado no cadastro e pode ser abatido automaticamente no próximo pedido em boleto tradicional, solicitado o abatimento em boleto tradicional em aberto ou reembolso do valor em conta corrente do titular. 


O reembolso precisa ser feito em conta corrente em nome do títular, não pode ser conta conjunta. 
`
  },
  {
    title: "Status do Pedido",
    content: `Essa solicitação só é permitida sistematicamente após o faturamento do pedido, peço que aguarde a atualização do status para "faturado em transporte" no seu app/site para conseguirmos prosseguir com esse caso. Tudo bem?

O sistema só permite a abertura dessa solicitação após a entrega do pedido, aguarda a atualização do status para "entregue" no seu app/site e retorna conosco, por gentileza. `
  },
  {
    title: "Acordo de Pagamento",
    content: `As condições de parcelamento vão de acordo com a data escolhida para pagamento da primeira parcela do acordo. 

O sistema liberou como data para pagamento da primeira parcela os dias xx,xx,xx,xx e xx de xxxx. Qual das datas informadas você prefere? 

Foram liberadas as condições de pagamento abaixo:
XXx de R$xxx,xx
XXx de R$xxx,xx
XXx de R$xxx,xx
XXx de R$xxx,xx
XXx de R$xxx,xx
XXx de R$xxx,xx

Como prefere prosseguir com a negociação?`
  },
  {
    title: "Crédito - Limite",
    content: `A central não trata limite de crédito.
Solicitações apenas via WhatsApp 11 93036-0000.`
  },
  {
    title: "Pedido Pendente por Crédito",
    content: `O pedido excedeu o limite de crédito.
Se o limite for reajustado até a data, será liberado.
Caso contrário, será cancelado automaticamente.`
  },

  {
    title: "Crítica",
    content: `Sua crítica será encaminhada ao setor responsável.
Protocolo xxxxxx. Não há retorno para este tipo de ocorrência.`
  },
  {
    title: "Elogio",
    content: `Agradecemos sua preferência!
Será encaminhado ao setor responsável.
Protocolo xxxxxx.`
  },
  {
    title: "Sugestão",
    content: `Sua sugestão é valiosa.
Encaminharemos para o setor responsável.
Protocolo xxxxxx.`
  },


  {
    title: "Tecnologia - B.O no Aplicativo",
    content: `Para que possamos prosseguir com a solicitação, peço que me encaminhe os seguintes dados, por gentileza.

Qual o modelo do celular:
Versão do sistema Operacional:
Qual o nome do aplicativo:
Versão do Aplicativo:
Já realizou a limpeza de cache?:
Já tentou reinstalar o aplicativo?:
Encaminhe uma evidência do problema.

****************************************************************************************************************

Dados a parte para tabulação.

* Data e hora: A evidência deve ser do mesmo dia do contato.
* Descrever testes realizados com a consultora em linha conforme artigo Suporte: 
* Acesso via site: descrever qual o tipo de navegador está utilizando e qual a versão
* Descrição detalhada do erro: 
`
  },


  {
    title: "Acordo de Espera",
    content: `**  Pedir para aguardar  **

Peço que aguarde um momento, pois vou registrar as informações, 
e logo retorno com você, tudo bem? 

Aguarde um momento por gentileza, enquanto registro a solicitação 
em sistema, caso necessário estou à disposição.

Aguarde um momento, por favor, enquanto verifico a informação 
em sistema, caso necessário estou à disposição.

Será encaminhado ao setor responsável.
Protocolo xxxxxx.

 **  Pedir um momento  **

Mais um momento por gentileza, estou verificando a informação.

Mais um momento por gentileza, estou registrando a informação.

Só mais um momento por gentileza, estou registrando as informações na ocorrência, logo retorno com você.
`
  },



  {
    title: "NOSSOS CONTATOS",
    content: `**  💄 CAN (Atendimento da consultora)  **

Telefone: 0800 762 8872

E-mail: natconsultora@natura.net

Horário de atendimento: Segunda a Sexta das 7h as 22h – Sábados das 9h as 20h

** 👩‍💻 ATO e CIN (Atendimento Líder e gerentes) **

Telefone: 0800 776 0013	

E-mail: natgerente@natura.net \\ natlider@natura.net

Horário de Atendimento: Segunda a Sexta das 8h as 00h

**  💻EXCLUSIVO para Gerentes de Vendas e Gerentes de Mercado  **

Telefone whatsapp: (11) 4389 7400 // Para atendimento, opção "1"

**  📱 Nat whatsapp  **

Whatsapp: 11 93036 0000

Horário de Atendimento: 24 horas por dia, 7 dias por semana


**  💳 Cartão de Crédito Emana Pay  **

Telefone: 0800 777 0006

Horário de Atendimento: Segunda a sábado, das 06h às 22h

**  💰Central de Contas Emana Pay  **

Telefone: 0800 445 0009

Horiário de Atendimento: 24H por dia, 7 dias por semana


**  🤝Central Social  **
	
Telefone: 0800 042 0574

Horário de Atendimento: 24H por dia, 7 dias por semana


**  👩‍🎓 Atendimento Líder Bolsista  **

Whatsapp: 0800 776 0013 (opção 4)

Horário de Atendimento: Segunda a Sexta das 9h as 18h

**  🫂 Ângela  **

Telefone: (11) 94494-2415


**  🗣️ Ligue câncer  **

Telefone: 0800 042 0574

Horário de Atendimento: 24H por dia, 7 dias por semana


**  🧑‍💻 Consumidor Final (Rede Natura e SNAC)  **

Telefone: 0800-011-5566

Celular: 0300-711-5566 \ Opção 1 SNAC - Opção 2 REDE

AVON: 0800-708-2866

Horário de Atendimento: Seg a Sex das 8h as 21h \ Sábados das 9h as 15h


**  🛍️ VAREJO  **

Telefone: 0800-799-1929

E-mail: natempresaria@natura.net

Horário de Atendimento: Seg a Sex das 8h as 20h \ Sábados das 9h as 20h


`
  },


  {
    title: "Desistência de Pedido - Antes da Nota",
    content: `Não foi possível cancelar o seu pedido agora, pois a nota fiscal ainda não foi emitida e o seu pedido não foi faturado.. Peço que retorne assim que o pedido constar com o status de " FATURADO E EM TRANSPORTE".
`
  },
  {
    title: "Captação de Pedido - Link",
    content: `http://pedidoscan.natura.net/captacao/consultar_pedido_CRM.html?codConsultora=26320096&origem=1`
  },
  {
    title: "Contatos EmanaPay",
    content: `Negociação de boleto: 0800 646 2727
Cartão EmanaPay: 0800 777 0006
Contas EmanaPay: 0800 445 0009
Seguros: 0800 237 1368
Chat: https://suac.com/?08000008005`
  },
  {
    title: "Reembolso",
    content: `Para que consigamos realizar o reembolso pra você, eu preciso que me informe os seguintes dados:

Documento:
Banco:
Agência:
Conta (em nome do titular): `
  }
];

function createSections() {
  const container = document.getElementById("content");
  scripts.forEach(({ title, content }) => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = title;

    const pre = document.createElement("pre");
    pre.textContent = content;

    const btn = document.createElement("button");
    btn.textContent = "Copiar";
    btn.className = "copy-btn";
    btn.onclick = () => {
      navigator.clipboard.writeText(content);
      btn.textContent = "Copiado!";
      setTimeout(() => (btn.textContent = "Copiar"), 1500);
    };

    section.appendChild(h2);
    section.appendChild(pre);
    section.appendChild(btn);
    container.appendChild(section);
  });
}

function setupSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    document.querySelectorAll("section").forEach((section) => {
      const text = section.innerText.toLowerCase();
      section.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

createSections();
setupSearch();

function revelarEmojisScroll() {
  const emojis = document.querySelectorAll('.scroll-emoji');
  const scrollY = window.scrollY + window.innerHeight;

  emojis.forEach((emoji) => {
    const pos = emoji.offsetTop;
    if (scrollY > pos) {
      emoji.classList.add('visible');
    }
  });
}

// Elementos
const addBtn = document.getElementById("addScriptBtn");
const modal = document.getElementById("newScriptModal");
const saveBtn = document.getElementById("saveScriptBtn");
const inputTitle = document.getElementById("newTitle");
const inputContent = document.getElementById("newContent");
const contentArea = document.getElementById("content");

// Mostrar modal
addBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  inputTitle.value = "";
  inputContent.value = "";
});

// Ocultar modal ao clicar fora
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Salvar novo balão
saveBtn.addEventListener("click", () => {
  const title = inputTitle.value.trim();
  const content = inputContent.value.trim();
  if (!title || !content) {
    alert("Preencha título e conteúdo!");
    return;
  }

  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const pre = document.createElement("pre");
  pre.textContent = content;

  const btnCopy = document.createElement("button");
  btnCopy.textContent = "Copiar";
  btnCopy.className = "copy-btn";
  btnCopy.onclick = () => {
    navigator.clipboard.writeText(content);
    btnCopy.textContent = "Copiado!";
    setTimeout(() => (btnCopy.textContent = "Copiar"), 1500);
  };

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "🗑️";
  btnDelete.className = "delete-btn";
  btnDelete.title = "Deletar balão";
  btnDelete.title = "Deletar balão";

  btnDelete.onclick = () => openConfirmModal(section, title, content);


  section.appendChild(h2);
  section.appendChild(pre);
  section.appendChild(btnCopy);
  section.appendChild(btnDelete);
  addEditButton(section, title, content);
  contentArea.prepend(section);
  modal.style.display = "none";

  const localScripts = JSON.parse(localStorage.getItem("meusScripts") || "[]");
  localScripts.unshift({ title, content });
  localStorage.setItem("meusScripts", JSON.stringify(localScripts));
});


// Carregar os locais salvos ao abrir
window.addEventListener("load", () => {
  const localScripts = JSON.parse(localStorage.getItem("meusScripts") || "[]");
  localScripts.forEach(({ title, content }) => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = title;
    const pre = document.createElement("pre");
    pre.textContent = content;

    const btnCopy = document.createElement("button");
    btnCopy.textContent = "Copiar";
    btnCopy.className = "copy-btn";
    btnCopy.onclick = () => {
      navigator.clipboard.writeText(content);
      btnCopy.textContent = "Copiado!";
      setTimeout(() => (btnCopy.textContent = "Copiar"), 1500);
    };

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "🗑️";
    btnDelete.className = "delete-btn";
    btnDelete.title = "Deletar balão";
    btnDelete.title = "Deletar balão";

    btnDelete.onclick = () => openConfirmModal(section, title, content);

    section.appendChild(h2);
    section.appendChild(pre);
    section.appendChild(btnCopy);
    section.appendChild(btnDelete);
    addEditButton(section, title, content);

    contentArea.prepend(section);
  });
  revelarEmojisScroll();
});


  let sectionToDelete = null;
  let titleToDelete = "";
  let contentToDelete = "";

  function openConfirmModal(section, title, content) {
    sectionToDelete = section;
    titleToDelete = title;
    contentToDelete = content;
    document.getElementById("confirmModal").style.display = "flex";
  }

  function closeConfirmModal() {
    document.getElementById("confirmModal").style.display = "none";
  }

  document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
    if (sectionToDelete) {
      sectionToDelete.remove();
      let localScripts = JSON.parse(localStorage.getItem("meusScripts") || "[]");
      localScripts = localScripts.filter(s => !(s.title === titleToDelete && s.content === contentToDelete));
      localStorage.setItem("meusScripts", JSON.stringify(localScripts));
    }
    closeConfirmModal();
  });

  document.getElementById("cancelDeleteBtn").addEventListener("click", closeConfirmModal);

 let currentSection = null;
  let currentTitle = "";
  let currentContent = "";

  function openEditModal(section, title, content) {
    currentSection = section;
    currentTitle = title;
    currentContent = content;
    document.getElementById("editTitle").value = title;
    document.getElementById("editContent").value = content;
    document.getElementById("editModal").style.display = "flex";
  }

  document.getElementById("saveEditBtn").addEventListener("click", () => {
    const newTitle = document.getElementById("editTitle").value.trim();
    const newContent = document.getElementById("editContent").value.trim();
    if (!newTitle || !newContent) {
      alert("Preencha o título e o conteúdo para salvar.");
      return;
    }

    const h2 = currentSection.querySelector("h2");
    const pre = currentSection.querySelector("pre");
    h2.textContent = newTitle;
    pre.textContent = newContent;

    let localScripts = JSON.parse(localStorage.getItem("meusScripts") || "[]");
    const index = localScripts.findIndex(s => s.title === currentTitle && s.content === currentContent);
    if (index !== -1) {
      localScripts[index] = { title: newTitle, content: newContent };
      localStorage.setItem("meusScripts", JSON.stringify(localScripts));
    }
    document.getElementById("editModal").style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("editModal")) {
      document.getElementById("editModal").style.display = "none";
    }
  });

  // Integrar botão de editar na geração de balões salvos
  function addEditButton(section, title, content) {
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "✏️";
    btnEdit.className = "edit-btn";
    btnEdit.title = "Editar balão";
    btnEdit.onclick = () => openEditModal(section, title, content);
    section.appendChild(btnEdit);
  }

  // Atualizar todos os balões locais
  window.addEventListener("load", () => {
    const localScripts = JSON.parse(localStorage.getItem("meusScripts") || "[]");
    const sections = document.querySelectorAll("main#content section");
    sections.forEach((section, i) => {
      if (i < localScripts.length) {
        const { title, content } = localScripts[localScripts.length - 1 - i];
        addEditButton(section, title, content);
      }
    });
  });

const frasesMascote = [
  "Piscoooou, Tabulouuuu ✏️",
  "Tabulou ou ficou só na vontade? 😜",
  "Já fez sua primeira tabulação do dia? 📞",
  "Cliente atendido é cliente feliz! 😄",
  "Não esquece de selecionar a tabulação certa! 📝",
  "Mandou bem no chat! 👊",
  "Cuidado com o copy-paste errado! 🔍",
  "Se enrolar, manda aquela resposta padrão! ⚙️",
  "Respira… e responde com calma! 🌬️",
  "Cliente nervoso? Você calmo! 🧘",
  "Sorriso no chat, mesmo que virtual! 😁",
  "Já conferiu se salvou a conversa? 💾",
  "Se perdeu, chama o supervisor! 🆘",
  "Confirma os dados antes de encerrar! 📋",
  "Tabulação errada dá BO! 🚫",
  "Cliente desconectou? Segue o fluxo! 🔁",
  "Atendimento encerrado, bora pro próximo! 📲",
  "Hora da pausa, mas sem sumir! ☕",
  "Foco na meta! 🎯",
  "Um chat de cada vez! ⏳",
  "Usa o script, mas com jeitinho! 💬",
  "O cliente nem imagina o quanto você salva o dia! 🦸‍♀️",
  "Evita os capslock, tá? 🔇",
  "Responde com atenção, cada palavra conta! 🧠",
  "Cliente pediu retorno? Marca certinho! 📆",
  "Manda emoji só se combinar com o atendimento! 😊",
  "A tabulação é sua assinatura! ✍️",
  "Não deixa o cliente no vácuo! 👀",
  "Lê com atenção antes de enviar! 📖",
  "Fez bom atendimento? Registra bonitinho! ✅",
  "Tabulou errado? Já corrige! ✏️",
  "Cliente educado merece elogio interno! 🌟",
  "Usa atalhos com sabedoria! ⌨️",
  "Tabulação salva no final, mas pensa desde o início! 🧩",
  "Teclado é tua espada, usa com honra! ⚔️",
  "Cliente sem paciência? Seja o equilíbrio! 🧘‍♂️",
  "Preencheu todos os campos? Confere aí! 📄",
  "Evita repetir muita coisa, flui natural! 🌊",
  "Encaminhou pro setor certo? Show! 🧭",
  "Cliente é gente, trate como tal! 🫱",
  "Uma resposta bem pensada vale ouro! 🥇",
  "Já deu bom dia pro cliente hoje? 🌞",
  "Errou? Sem crise, ajusta e segue! 🔄",
  "Não virou venda, mas virou oportunidade! 📈",
  "A pressa é inimiga da boa resposta! 🐢",
  "Dúvida comum? Manda o FAQ! 📚",
  "Respira fundo antes de digitar ‘aguarde um momento’ 🧘‍♀️",
  "Confirma se já respondeu tudo pro cliente! 🧐",
  "Mensagem confusa? Reescreve rapidinho! 🖊️",
  "Fez cadastro? Confirma que foi pro sistema! 🗂️",
  "Um cliente feliz pode trazer outro! 🔁",
  "Evita abreviações estranhas no chat! ❌",
  "Manda aquele atendimento padrão... com carinho! ❤️",
  "Paciência é tua maior ferramenta! 🛠️",
  "Tabulação é o final feliz da conversa! 🎬",
  "Cola do script, mas adapta ao momento! 🎭",
  "Fone no ouvido, foco na missão! 🎧",
  "Evita o automático, personaliza a conversa! 💡",
  "Não precisa responder na velocidade da luz! ⚡",
  "Já bateu sua meta de atendimentos hoje? 📊",
  "Cliente falou demais? Escuta com atenção! 👂",
  "É só mais um atendimento... ou o mais importante do dia! ✨",
  "Teu chat pode salvar o nome da empresa! 🏆",
  "Se perdeu na conversa? Sobe o histórico! 🧾",
  "Manda áudio só se for permitido! 🎙️",
  "Confere ortografia rapidinho antes de mandar! 🔍",
  "Tá com dúvida? Consulta o manual! 📘",
  "Cliente pediu cancelamento? Escuta com empatia! 💔",
  "Seja breve, mas nunca seco! 🌱",
  "Fez o fechamento? Marca no sistema! 💼",
  "A meta tá longe? Um chat de cada vez! 🧱",
  "Trata cada atendimento como se fosse o único! 🎯",
  "Chat pausado? Dá aquela respirada! 🧘",
  "Lê o que o cliente já falou, evita repetir! 🔁",
  "Organiza a mente, depois o chat! 🧠",
  "Cliente falou ‘obrigado’? Você venceu! 🏁",
  "Deu erro no sistema? Respira e reporta! 🛠️",
  "Bateu aquela fadiga? Levanta e estica! 🧍",
  "Atendimento é maratona, não sprint! 🏃",
  "Despedida cordial é ouro! 👋",
  "Confere o nome do cliente antes de chamar! 📛",
  "Cuidado com os envios acidentais! 🚫",
  "Faz backup da planilha se der! 💾",
  "Abriu 10 chats? Um por vez, guerreiro! 🛡️",
  "Se o cliente elogiou, registra! 🌟",
  "Chat sem tabulação é como ligação sem final! ☎️",
  "Errou? Corrige e bola pra frente! 🏐",
  "De olho nos prazos de retorno! ⏰",
  "Não promete o que não pode cumprir! ⚖️",
  "Usa a linguagem da empresa, mas com teu toque! 📝",
  "Fez venda? Vibra (silenciosamente)! 🎉",
  "Evita jargões difíceis pro cliente entender! 🌀",
  "Sem resposta pronta pra tudo, adapte! 🧩",
  "Cliente indeciso? Ajuda com empatia! 🤝",
  "Cumprimento no início, agradecimento no fim! 🤗",
  "A conversa pode ser rápida, mas o cuidado é eterno! 💙",
  "Feedback do cliente? Anota e repassa! 📬",
  "Respira, ajeita a postura e segue firme! 🧘‍♂️",
  "Se perder no script, improvise com educação! 🎭",
  "Evita ficar muito tempo no mesmo chat sem retorno! 🕓",
  "Finalizou? Já tabula! 🧾",
  "Foco no cliente, o resto a gente resolve! 🎧",
  "Tabulou? Respira e bora pro próximo! 💨",
  "Tem cliente que só quer ser ouvido! 👂",
  "Usa o campo de observações com carinho! 💡",
  "Se enrolar na resposta, seja sincero e retome! 🔄",
  "Cliente nervoso acalma com bom atendimento! ☮️",
  "Vai com calma, tua saúde também importa! 💆",
  "Bora atender com leveza e atenção! 🍃",
  "Pega aquele café e volta com energia! ☕",
  "A cada chat, um novo desafio! 💪",
  "Feedback positivo é combustível! ⛽",
  "Não dá pra saber tudo, mas dá pra perguntar! 📣",
  "Tabulação bem feita evita dor de cabeça depois! 🧠",
  "Dificuldade no sistema? Chama suporte! 🖥️",
  "Cliente novo? Dá as boas-vindas! 🙌",
  "Tudo certo por aí? Bora seguir! 👣",
  "Só fecha o atendimento quando tudo tiver resolvido! ✅",
  "Não ignora dúvida do cliente! ❓",
  "Gentileza no chat sempre! 🕊️",
  "Cada click conta no final do mês! 📈",
  "Siga o fluxo, mas com carinho! 💫",
  "Se o cliente reclamar, escuta primeiro! 🔊",
  "Tabulação é igual coração de mãe: cabe tudo! 💖",
  "Respira, ajeita a postura e segue o atendimento! 🧘‍♀️",
  "Errou o nome do cliente? Corrige rapidinho! 📛",
  "Concluiu? Agradece e encerra com educação! 🎓",
  "Confirma o protocolo antes de enviar! 🔢",
  "O cliente nem sempre tem razão, mas tem sentimento! ❤️",
  "Final feliz começa com boa conversa! ✨",
  "Chuva de atendimento? Guarda-chuva do foco! ☔",
  "A meta tá chamando, bora atender! 🚀",
  "A cada atendimento, mais experiência! 🧠",
  "Um bom fechamento vale mais que mil respostas! 🗝️",
  "Evita deixar cliente esperando por muito tempo! ⌛",
  "Foco, sorriso e script na mente! 🧠😁",
  "Fechou uma venda? Parabéns, campeão! 🥳",
  "É só um chat, mas pode ser um dia melhor pra alguém! 🌞",
  "Bora finalizar com excelência! 🎯"
];


function falarMascote() {
  const fala = document.getElementById("fala-do-mascote");
  const novaFrase = frasesMascote[Math.floor(Math.random() * frasesMascote.length)];
  fala.textContent = novaFrase;
}

setInterval(falarMascote, 25000); // a cada 10 segundos troca a frase

        // Aqui você pode adicionar eventos se precisar de interatividade extra
        const emoji = document.querySelector('#mascote div');
        emoji.addEventListener('click', () => {
            alert('Emoji de cowboy clicado!');
        });


  const searchInput = document.getElementById("searchInput");
  const wrapper = searchInput.closest(".search-wrapper");

  searchInput.addEventListener("focus", () => {
    wrapper.classList.add("focused");
  });

  searchInput.addEventListener("blur", () => {
    if (!searchInput.value.trim()) {
      wrapper.classList.remove("focused");
    }
  });

const botaoPausa = document.getElementById("botaoPausa");
const painelPausa = document.getElementById("painelPausa");
const horarioInput = document.getElementById("horarioInput");
const listaHorarios = document.getElementById("listaHorarios");
const avisoPausa = document.getElementById("avisoPausa");

let horariosDePausa = JSON.parse(localStorage.getItem("horariosDePausa") || "[]");

function salvarHorarios() {
  localStorage.setItem("horariosDePausa", JSON.stringify(horariosDePausa));
}

function atualizarLista() {
  listaHorarios.innerHTML = "";
  horariosDePausa.forEach((h, i) => {
    const item = document.createElement("div");
    item.innerHTML = `${h} <button onclick="removerHorario(${i})" style="color:red;">x</button>`;
    listaHorarios.appendChild(item);
  });
}

function adicionarHorario() {
  const valor = horarioInput.value;
  if (valor && !horariosDePausa.includes(valor)) {
    horariosDePausa.push(valor);
    salvarHorarios();
    atualizarLista();
    horarioInput.value = "";
  }
}

function removerHorario(i) {
  horariosDePausa.splice(i, 1);
  salvarHorarios();
  atualizarLista();
}

function fecharPainel() {
  painelPausa.style.display = "none";
}

botaoPausa.onclick = () => {
  painelPausa.style.display = "flex";
  atualizarLista();
};

// Alerta de pausa

// ⏰ HORÁRIOS DE PAUSA
const hoje = new Date().toDateString();
const ultimaVerificacao = localStorage.getItem("dataAvisos");

if (ultimaVerificacao !== hoje) {
  localStorage.setItem("dataAvisos", hoje);
  localStorage.removeItem("avisosFeitos");
}

let pausasAvisadas = JSON.parse(localStorage.getItem("avisosFeitos") || "[]");

function salvarAviso(horario) {
  pausasAvisadas.push(horario);
  localStorage.setItem("avisosFeitos", JSON.stringify(pausasAvisadas));
}

function verificarHorarioDePausa() {
  const agora = new Date();
  const minutosAgora = agora.getHours() * 60 + agora.getMinutes();

  horariosDePausa.forEach(horario => {
    const [h, m] = horario.split(":").map(Number);
    const minutosAlvo = (h * 60 + m) - 5;

    if (minutosAgora === minutosAlvo && !pausasAvisadas.includes(horario)) {
      avisoPausa.style.display = "flex";
      notificarPausa();
      piscarTitulo();
      salvarAviso(horario);
      piscarFavicon(); // começa a alternar entre ⏰ e 🌻

    }
  });
}

// Verifica a cada 15 segundos
setInterval(verificarHorarioDePausa, 15000);


// Verifica a cada 15 segundos para mais precisão
setInterval(verificarHorarioDePausa, 15000);

document.getElementById("botaoTudoBem").onclick = () => {
  avisoPausa.style.display = "none";
  pararFavicon();
};

// Verificar a cada minuto
setInterval(verificarHorarioDePausa, 60000);


// Título original da aba
let originalTitle = document.title;
let alertaAtivo = false;
let intervaloPiscar = null;

// Função para iniciar o alerta visual
function piscarTitulo() {
  if (!alertaAtivo) {
    alertaAtivo = true;
    intervaloPiscar = setInterval(() => {
      document.title = (document.title === "⏰ PAUSA EM 5 MINUTOS!") ? originalTitle : "⏰ PAUSA EM 5 MINUTOS!";
    }, 1000);
  }
}

// Parar o alerta quando a aba voltar ao foco
function pararPiscarTitulo() {
  clearInterval(intervaloPiscar);
  document.title = originalTitle;
  alertaAtivo = false;
}

// Escuta se o usuário voltou pra aba
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    pararPiscarTitulo();
  }
});


document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    document.body.classList.add("alerta-visivel");

    setTimeout(() => {
      document.body.classList.remove("alerta-visivel");
    }, 1500);
  }
});


const faviconPadrao = "https://emojiapi.dev/api/v1/1f33b.svg"; // 🌻 Girassol
const faviconAlerta = "https://emojiapi.dev/api/v1/23f0.svg"; // ⏰ Despertador

let faviconIntervalo;
let faviconAtivo = false;

function piscarFavicon() {
  if (faviconIntervalo) clearInterval(faviconIntervalo);
  faviconIntervalo = setInterval(() => {
    const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = faviconAtivo ? faviconPadrao : faviconAlerta;
    faviconAtivo = !faviconAtivo;
    document.head.appendChild(link);
  }, 800);
}

function pararFavicon() {
  clearInterval(faviconIntervalo);
  const link = document.querySelector("link[rel~='icon']");
  if (link) link.href = faviconPadrao;
  faviconAtivo = false;
}


// Solicita permissão ao primeiro clique do usuário
window.addEventListener("click", () => {
  if (Notification.permission === "default") {
    Notification.requestPermission();
  }
}, { once: true });


// Função que envia notificação
function notificarPausa() {
  if (Notification.permission === "granted") {
    new Notification("⏰ Pausa em 5 minutos!", {
      body: "Clique em 'Tudo bem' para confirmar.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Emoji_u1f33b.svg/120px-Emoji_u1f33b.svg.png"
    });
  } else {
    console.log("Permissão para notificação não concedida.");
  }
}

// Histórico de pesquisas
let historico = JSON.parse(localStorage.getItem("historicoPesquisa") || "[]");

function atualizarDatalist() {
  const dataList = document.getElementById("historicoPesquisa");
  dataList.innerHTML = "";
  historico.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    dataList.appendChild(option);
  });
}

// Salvar no histórico ao pressionar Enter
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = searchInput.value.trim();
    if (valor && !historico.includes(valor)) {
      historico.unshift(valor);
      if (historico.length > 10) historico.pop(); // limita a 10 pesquisas
      localStorage.setItem("historicoPesquisa", JSON.stringify(historico));
      atualizarDatalist();
    }
  }
});

atualizarDatalist();


window.addEventListener('scroll', revelarEmojisScroll);
window.addEventListener('load', revelarEmojisScroll); // já revela os primeiros ao carregar

