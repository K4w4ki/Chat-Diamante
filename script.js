     // script.js
      const scripts = [
        {
          title: "SAUDAÇÕES",
          content: `Bom dia, xxx, tudo bem?

Bom dia, xxx, em que posso te ajudar?

Boa tarde, xxx, tudo bem?

Boa tarde, xxx, em que posso te ajudar?

Boa noite, xxx, tudo bem?

Boa noite, xxx, em que posso te ajudar?

Eu estou bem, obrigado por perguntar!

Em que posso te ajudar neste momento?`,
        },

        {
          title: "SOLICITAÇÃO DE DADOS",
          content: `📧📞 O seu e-mail e o seu telefone estão atualizados?

📩 Você pode me informar o seu e-mail e o seu telefone, por favor?

🕐 Pode me informar o seu e-mail, o seu telefone e o melhor horário para contato, por gentileza?`,
        },

        {
          title: "AUDIO 🎧 | Solicitação por Mensagens de texto 📝",
          content: `Por gentileza, responda com mensagens de texto 📲, pois não conseguimos reproduzir os áudios 🎧. Assim fica mais fácil para a gente responder rapidinho! 😉 Muito obrigado pela compreensão! 🙏✨
`,
        },

        {
          title: "PROTOCOLO - REGISTRO",
          content: `• Modelo ∙ N2

Encaminhei a ocorrência de XXXXXX para a área interna da Natura. Eles têm até o dia XXXX para analisar e finalizar a tratativa. ⏳✅

Lembre-se que as demais informações chegarão para você por e-mail. É só aguardar e acompanhar por lá. 📧👀

OBS: Caso não receba as informações por e-mail até o prazo informado, você pode retornar um dia depois com o protocolo para que possamos verificar e te atualizar. 🔄📞

O protocolo da ocorrência é XXXXX. 🆔`,
        },

        {
          title: "DESCULPA",
          content: `🙏 Peço desculpas pelo transtorno em nome da Natura! Estou aqui para ajudar da melhor forma possível e garantir que tudo seja resolvido. 💛`,
        },

        {
          title: "Dados - Confirnação.",
          content: `📝 Para que eu possa seguir com o atendimento, você poderia me informar o seu CPF e nome completo, por gentileza?
`,
        },

        {
          title: "Recalculo / Promoção Não Aplicada",
          content: `🔖 Promoção não aplicada

Para analisarmos a solicitação, por gentileza, encaminhe as seguintes informações:

📦 Número do pedido:
🏷️ Código do produto e quantidade atingida:
💰 Valor devido:
💳 Valor cobrado:
📧 E-mail:
📞 Telefone:
🛍️ Promoção de revista ou app?:
📸 Evidência (print ou foto):

🧾 Recálculo da nota fiscal

Por favor, informe os dados abaixo para darmos sequência:

📦 Número do pedido:
📆 Ciclo:
🧾 Nota Fiscal (NF):
📦 Produto:
💳 Valor cobrado: R$
✅ Valor correto: R$
`,
        },

        {
          title: "Defeito - Solicitação | Beedoo",
          content: `🔧 Para que eu possa abrir a sua solicitação de defeito, preciso que me ajude com as seguintes informações:

📦 Número do pedido:
🏷️ Código do produto + quantidade:
🔢 Lote:
📅 Validade:
📦 Estado da caixa do pedido:
⚖️ Está cheio, vazio ou pela metade?:
⚠️ Descrição do defeito:
📸 Foto do produto com defeito:
📞 Telefone para contato:
📧 E-mail para contato:

👉 Você consegue me passar esses dados, por gentileza?
https://naturaeavon.beedoo.io/wiki/447144/acuracidade-manifestacoes-de-qualidade
`,
        },

        {
          title: "Produto - FALTA",
          content: `📝 Para que eu consiga abrir a sua solicitação de falta de produto, vou precisar de algumas informações:

* 📦 Número do pedido:
* 🏷️ Código do produto + quantidade:

👉 Você consegue me passar esses dados, por gentileza?
`,
        },

        {
          title: "CHECKLIST PARA FALTA - PRODUTO FATURADO | Beedoo",
          content: `Informações para implementar na tabulação.
	
* Número do pedido:
* Item(s) faltante(s) (Nome do produto + Código):
* Item consta na NF?:
* Quantidade de caixas a ser entregue no pedido: 
  :Exemplo de sondagem:  seu pedido deveria ter quantos volumes (caixas) no total? E quantos você recebeu?

* Caixas lacradas ou com sinal de violação?: 
* Item faz parte de kit? Se sim, informar nome do kit e qual item faltou:
* Recebeu produto a mais? Se sim, informar Código + Nome do produto:
* Quem realizou a captação do pedido?:

https://naturaeavon.beedoo.io/wiki/322392/pos-compra
`,
        },

        {
          title: "Protocolo Aberto",
          content: `📨 A ocorrência foi direcionada para o setor responsável.
📝 Número do protocolo: xxxxxx
⏳ Previsão para conclusão e resposta: até o dia xx/xx.

O retorno será feito por e-mail. ✉️

🔔 Lembrando que esse é apenas o prazo limite para a resposta — nossa equipe costuma entrar em contato bem antes da data informada! 😉 `,
        },

        {
          title: "TRANSPORTE - ATRASO",
          content: `**  Analise – Solicitar pedido  **

• Análise – Solicitar pedido 🔍

Compreendo, irei analisar em sistema. Poderia me informar o número do pedido para que eu possa verificar? 📝

• Um momento – Análise ⏳

Obrigado! Por gentileza, peço que aguarde um momento enquanto verifico. 😊🕒

• Informar que será registrado 🛠️

Peço desculpas pelo transtorno causado. Registrarei uma ocorrência sobre o atraso na entrega para que a área responsável faça a análise e retorne uma posição pelo seu e-mail. 📧

• Retorno – Pedido dentro do prazo ✅

Verifiquei no sistema e o pedido está dentro do prazo para recebimento. Sendo assim, apenas deixarei essa informação registrada. ✔️
`,
        },

        {
          title: "VALE-PONTOS",
          content: `• Produto virou vale pontos 🎁

Eu verifiquei no sistema e consta que o seu produto foi convertido em vale pontos para que você possa resgatar outro produto. 🔄

• Enviar para o N2 – Não virou vale pontos 🚫

Como já passou o prazo de dois ciclos e o produto não foi convertido em vale pontos, irei registrar uma ocorrência para que a área interna da Natura faça uma análise. 📝🔍`,
        },

        {
          title: "CANCELAMENTO DE PEDIDO",
          content: `• Solicitar pedido 🛒

Qual o número do pedido que você deseja cancelar? ❓

• Motivo do cancelamento ❗

Qual é o motivo do cancelamento do pedido? 📝

• Confirmação combinado 🤝

Consta no sistema que é um pedido combinado. Sendo assim, se eu solicitar o cancelamento de um, ambos serão cancelados. Posso prosseguir com o cancelamento? ⚠️

• Pedido cancelado ✅

Eu registrei a ocorrência no sistema. Seu pedido foi cancelado. A confirmação será enviada para você por e-mail, junto com o número do protocolo. 📧

• Cancelamento de pedido em transporte 🚚

Eu registrei a solicitação de cancelamento. A confirmação chegará por e-mail, junto com o número do protocolo. Como consta que seu pedido está em transporte, ele será devolvido para a Natura até o dia XXXXX. 📦

• Erro 20 – Preparação da caixa ⚠️

Ao registrar o cancelamento, infelizmente ocorreu um erro. Peço que você retorne assim que o seu pedido estiver em transporte. Você pode acompanhar o status pelo App/Site. 📲`,
        },

        {
          title: "PRAZO EXPIRADO",
          content: `Verifiquei aqui com muito cuidado o seu caso, e quero te explicar direitinho o que aconteceu.

Infelizmente, não será possível abrir um protocolo para essa solicitação 😔, pois o prazo para abertura desse chamado é de 15 a 30 dias corridos após o recebimento do pedido.

Entendo que essa não é a resposta que você esperava, e sinto muito mesmo por isso. 💛 Em nome da Natura, peço sinceras desculpas pelo transtorno causado.

Se tiver qualquer outra dúvida, estou aqui pra isso, tá bom? 💬🌷`,
        },

        {
          title: "TRANSFERÊNCIA - SEMENTE 🌱",
          content: `Oii! Tudo bem por aí?
Então, vi aqui que seu atendimento é referente ao nível Semente, e tem uma equipe certinha que cuida dessa parte.
Vou te encaminhar pra eles agora, tá? Assim você já recebe a ajuda certinha. 💚`,
        },

        {
          title: "TRANSFERÊNCIA - BRONZE 🥉",
          content: `E aí, tudo tranquilo?
Seu atendimento é relacionado ao nível Bronze, e quem cuida disso é um outro time especializado.
Já tô te transferindo pra eles, beleza? Daqui a pouco te atendem direitinho. ✨`,
        },

        {
          title: "TRANSFERÊNCIA - PRATA 🥈",
          content: `Opa! Como você tá?
Vi aqui que sua solicitação é do nível Prata, e quem atende por aqui é um time diferente que cuida desse perfil.
Vou te encaminhar pra eles agora, rapidinho! Qualquer coisa, tô por aqui. 😉`,
        },

        {
          title: "TRANSFERÊNCIA - OURO 🥇",
          content: `Oii! Tudo certinho?
Seu atendimento é do nível Ouro, e tem um setor específico que acompanha esses casos.
Já vou te direcionar pra equipe certa, que vai te dar aquela força! 🧡`,
        },

        {
          title: "TRANSFERÊNCIA - REDE NATURA 🚀🌿",
          content: `Para que você consiga prosseguir com a sua solicitação, será necessário que você entre em contato diretamente o Rede Natura, tudo bem?

Você pode fazer isso de quatro maneiras simples e práticas:

📞 Pelo telefone: 0800-011-5566, onde eles vão te atender com toda atenção e agilidade que você merece.
📱 Pelo celular: 0300-711-5566, onde o contato seria mais facilitado para resolver qualquer problema.
📲 WhatsApp Minha Loja: +55 (11) 4389-9441, para casos relacionados a nosso novo serviço de vendas
💬 Ou pelo chat online acessando o link: https://www.natura.com.br/ajuda-e-contato
✨você pode falar com um atendente quando preferir!`,
        },

        {
          title: "Bloqueios Diversos | Beedoo",
          content: `CASOS PARA CONSULTORAS COM QUAISQUER OUTRO TIPO DE BLOQUEIO EM SUA CONTA, SEGUE A WIKI:

https://naturaeavon.beedoo.io/wiki/443020/bloqueio-e-desbloqueio-de-cadastro
 `,
        },

        {
          title: "Emana Pay | Beedoo",
          content: `Atendimento Emana Pay - Situações e quando fazer:
casos para a consultora com problemas no emana pay, segue a wiki.

https://naturaeavon.beedoo.io/wiki/346278/emana-pay
 `,
        },

        {
          title: "Encerramento",
          content: `O protocolo do seu atendimento é xxxxxxxxxxxxxxx

XXXXXXX, eu agradeço pela sua atenção e paciência! Foi um prazer falar com você hoje! 💖🥰
Quero lembrar que até amanhã você pode receber no seu WhatsApp uma pesquisa para avaliar o meu atendimento.
As estrelas ⭐ que você der são muito importantes para o meu desenvolvimento dentro da empresa.
Avaliações de 4 a 5 estrelas significam que consegui te atender bem! 💖⭐
Ficarei aguardando sua avaliação com muito carinho!⭐`,
        },

        {
          title: "CESSAMENTO - CESSADO",
          content: `Seu cadastro foi cessado por inatividade, pois você ficou muito tempo sem passar pedidos.

Se desejar voltar a revender, por gentileza, acesse o site:
👉 http://www.natura.com.br/cadastre-se
 e preencha os seus dados.

Caso não consiga concluir o cadastro porque informa que o CPF já está registrado, entre em contato com a nossa central pelo número: 📞 0800–762–8872.

Funcionamos de segunda a sexta, das 07:00 às 22:00, e aos sábados, das 09:00 às 20:00.`,
        },

        {
          title: "Bloqueio 4 - Restrição de acesso por política interna.",
          content: `Após a análise, identificamos que o cadastro foi bloqueado em função de critérios internos estabelecidos pela empresa. 
Sabemos que isso pode gerar dúvidas e desconforto, mas, neste caso, o sistema não permite a continuidade do processo nem a reversão do bloqueio.
Agradecemos pela compreensão e seguimos à disposição para ajudar no que for possível com outras informações ou necessidades.
`,
        },

        {
          title: "Bloqueio 5 - Cadastro com Fraude confirmada",
          content: `🌿 Agradecemos seu interesse em atuar como Consultor(a) Natura!

Após uma análise interna do seu cadastro, informamos que, conforme as políticas vigentes da empresa, no momento não foi possível efetivar sua ativação.

📌 Ressaltamos que, de acordo com essas diretrizes, este processo não está elegível para reanálise ou desbloqueio.

Agradecemos sua compreensão 💚 e permanecemos à disposição para quaisquer dúvidas ou esclarecimentos.`,
        },

        {
          title: "Bloqueio 19 - FIDC Ipanema",
          content: `🚫 Cadastro Bloqueado 🚫
	
⚠️ Identificamos que seu cadastro está bloqueado por conta de títulos em aberto que foram cedidos para empresas parceiras.

📌 Para resolver essa situação, pedimos que você entre em contato diretamente com a empresa FIDC Ipanema, que está cuidando da negociação desses débitos.

✅ Aqui estão os dados para facilitar seu contato:

📞 Telefone e WhatsApp: 0800 025 0000
🕗 Horário de Atendimento:
  • Segunda a sexta: 8h às 20h
  • Sábado: 8h às 14h
  • (Exceto feriados)
🌐 Site: https://negocieipanema.com.br/

📧 E-mail: contato@negocieipanema.com.br

✅ Depois de pagar todos os boletos, lembre-se de solicitar a carta de quitação e nos encaminhar por aqui mesmo ou pelo e-mail: natconsultora@natura.net

Estamos aqui para ajudar no que precisar! 🤝
 `,
        },

        {
          title: "Bloqueio 7",
          content: `Seu cadastro foi bloqueado devido a títulos vencidos. No momento, você só poderá realizar pedidos na modalidade à vista. 💳

Para regularizar a situação, faça um acordo pelo site ou pelo aplicativo Minha Consultoria:

Acesse a aba "Meus títulos"

Selecione todos os boletos vencidos

Clique em "Formas de pagamento"

Lá você poderá escolher o meio de pagamento, a quantidade de parcelas, o prazo para a primeira parcela e as seguintes. 📅💰

Após o pagamento da primeira parcela, em até 72 horas seu cadastro deverá ser desbloqueado. ⏳✅

Importante: esse bloqueio altera sua modalidade comercial para à vista. Futuras análises serão realizadas e, para que seu cadastro seja liberado para outras modalidades, é fundamental que os pedidos sejam feitos e pagos corretamente. 🔄`,
        },

        {
          title: "Falta de Interação",
          content: `🔖 Protocolo aberto: XXXXXXXXXXXXXXX

💬 Sinto muito, XXXXXXXX, mas devido à falta de interação no chat, nosso atendimento será encerrado.

🌸 A Consultoria de Beleza agradece o seu contato!

⏰ Nosso horário de atendimento:

• Segunda a Sexta: 07:00 às 22:00
• Sábado: 09:00 às 20:00

🌞 Agradecemos o seu contato, querida consultora! Até breve! 👋✨`,
        },

        {
          title: "Impossibilidade Sistêmica",
          content: `💻 Devido a uma indisponibilidade no sistema, não será possível prosseguir com a sua solicitação neste momento.
🙏 Pedimos desculpas pelo transtorno e contamos com a sua compreensão.

⏳ Por gentileza, pedimos que retorne o contato em aproximadamente 1 hora, para que possamos dar continuidade à sua solicitação.

📅 Nossa central funciona:

* Segunda a Sexta: 07h às 22h
* Sábado: 09h às 20h

✨ Agradecemos a sua paciência e deixamos um abraço da Consultoria de Beleza!`,
        },

        {
          title: "SEM OS DADOS EM MÃOS",
          content: `💡 Caso você não tenha as informações necessárias em mãos agora, pedimos, por gentileza, que retorne mais tarde com os dados necessários para conseguirmos dar continuidade ao seu atendimento.

🙏 Pedimos desculpas pelo transtorno e agradecemos muito o seu contato.

📅 Nosso horário de atendimento é:

* Segunda a Sexta: 07h às 22h
* Sábado: 09h às 20h

✨ A Consultoria de Beleza deseja uma ótima tarde para você, querida consultora. Até breve! 🌷`,
        },

        {
          title: "Pontuação - Aumento de pontos",
          content: `💳 Nós não temos autonomia para realizar o aumento dos seus pontos de crédito diretamente por aqui.
Mas fique tranquila, existem duas formas de conseguir esse aumento:

1️⃣ Pagando os títulos em aberto (caso existam).
2️⃣ Entrando em contato com a nossa assistente virtual pelo WhatsApp 📲 (11) 93036-0000 e solicitando o aumento de pontos.

✨ Assim você conseguirá regularizar sua situação e aumentar seu limite com mais facilidade!`,
        },

        {
          title: "Reparações - Incorporação",
          content: `O sistema disponibilizou a incorporação como forma de reparação. Você já sabe como funciona? 🤔


A incorporação é a disponibilização dos produtos danificados ou faltantes no seu pedido. Para resgatá-la, basta passar pedidos dentro de até 2 ciclos (não no próximo pedido, mas dentro de 2 ciclos).
No momento de passar o pedido, clique em “aceitar” e o produto será adicionado à sua caixa, totalmente sem custos! 🎁
Caso você não consiga passar pedidos nesse prazo, ou se o produto incorporado não estiver disponível em estoque, ele será convertido em vale-pontos para que você possa resgatar brindes e outros produtos não promocionais. 🎟️
Lembre-se que, após a solução ser disponibilizada, não é possível alterá-la.
Você aceita essa forma de reparação? ✔️❓`,
        },
        {
          title: "Reparações - Nota de Crédito",
          content: `Nota de crédito é, como o próprio nome diz, um crédito disponível no sistema referente ao valor dos produtos que estavam danificados ou faltaram nos pedidos das consultoras. 💳

Essa nota será abatida automaticamente pelo sistema no seu próximo pedido ou em um título já em aberto. Isso significa que você pagará apenas a diferença entre o valor do título e o valor da nota de crédito! ⚖️

Com a nota de crédito, o valor fica disponível no seu cadastro e pode ser utilizado de três formas:

* Abatido automaticamente no próximo pedido via boleto tradicional 📄
* Solicitado o abatimento em boleto tradicional já em aberto 🧾
* Solicitação de reembolso do valor em conta corrente do titular 💰

Importante: o reembolso precisa ser feito em conta corrente em nome do titular, não sendo permitida conta conjunta. 🚫👥. 
`,
        },

        {
          title: "Status do Pedido",
          content: `🚨 Importante:

• Essa solicitação só pode ser feita pelo sistema após o faturamento do pedido.

⏳ Peço que aguarde a atualização do status para "faturado em transporte" no seu app/site para que possamos prosseguir com o seu caso. Tudo bem?

⚠️ O sistema permite a abertura dessa solicitação somente após a entrega do pedido.

📲 Aguarde a atualização do status para "entregue" no seu app/site e, por favor, retorne para continuarmos com o atendimento. `,
        },
        {
          title: "Acordo de Pagamento",
          content: `💳 Para o parcelamento, você pode escolher a data da 1ª parcela entre: xx, xx, xx, xx ou xx/xxxx. Qual dessas datas fica melhor pra você? 😊

💰 As opções de pagamento disponíveis são:

XXx de R$ xxx,xx
XXx de R$ xxx,xx
XXx de R$ xxx,xx
XXx de R$ xxx,xx
XXx de R$ xxx,xx
XXx de R$ xxx,xx

✨ Me conta como você prefere prosseguir com a negociação, que vamos te ajudar rapidinho! 🙌`,
        },

        {
          title: "Pedido Pendente por Crédito",
          content: `O pedido excedeu o limite de crédito. ⚠️
Se o limite for reajustado até a data, o pedido será liberado. ✅
Caso contrário, será cancelado automaticamente. ❌`,
        },

        {
          title: "Crítica",
          content: `Obrigado pelo seu feedback! Sua crítica foi encaminhada para o setor responsável.
Protocolo: xxxxxx.

Neste caso, não há retorno, mas fique tranquilo(a), seu comentário será considerado para melhorar nossos serviços. 😊`,
        },

        {
          title: "Elogio",
          content: `Agradecemos muito a sua preferência! 💚
Sua solicitação será encaminhada ao setor responsável.
Protocolo: xxxxxx.

Estamos à disposição para ajudar no que precisar! 😊`,
        },
        {
          title: "Sugestão",
          content: `Sua sugestão é muito importante para nós! 🙌
Já encaminhamos para o setor responsável.
Protocolo: xxxxxx.

Obrigado por contribuir com a melhoria dos nossos serviços! 😊`,
        },

        {
          title: "Squid - Atendimento N1 – Prestar informações | Beedoo",
          content: `📝 Orientações para Abertura de Chamado na Plataforma Squid

• A CB Treinadora deve abrir chamado na plataforma de treinamentos Squid sempre que encontrar algum dos seguintes casos:

🚩 Casos que devem gerar abertura de chamado:

1️⃣ Problemas de agendamento e reagendamento
2️⃣ Problemas técnicos na plataforma de transmissão
3️⃣ Problemas com cálculo de pagamento ou regras de cálculo
4️⃣ Dificuldades para subir a Nota Fiscal (NF)
5️⃣ Dúvidas e/ou questionamentos sobre Relatórios automatizados de treinamentos realizados e/ou avaliação de treinamentos
👉 Estes devem ser encaminhados diretamente para os canais de atendimento da Squid.

📞 Canais de Atendimento Squid:

• 📱 WhatsApp: +55 (11) 94897-2729
• 📧 E-mail: meajuda.natura@squidit.com.br
• 🔧 Procedimentos para abertura de chamado - Tabulação Nível 1 (N1):

1️⃣ Categorizar:

• Primeira Categoria: Apoio a Atividade
• Segunda Categoria: Recursos de apoio
• Motivo: Treinamento

2️⃣ Detalhar (OBRIGATÓRIO):
No campo descrição, informe todas as informações prestadas e o motivo do contato.

3️⃣ Selecionar solução manual N1:
Escolher a opção Informação.

4️⃣ Finalizar:
Clique em Salvar ocorrência para concluir a abertura do chamado.

https://naturaeavon.beedoo.io/wiki/403201/consultora-de-beleza-treinadora
`,
        },

        {
          title: "Minha Loja - Atendimento | Beedoo",
          content: `🚨 Atenção, Consultora! 🚨

🛒 Problemas relacionados a pedidos realizados na Minha Loja serão atendidos exclusivamente pela célula de atendimento via WhatsApp.

📲 WhatsApp: +55 (11) 4389-9441

✨ Importante:
A consultora de beleza precisa informar o código de consultora.
👉 Caso ela faça parte do projeto Minha Loja, será direcionada para o atendimento humano.

💎 EXTRA – Comissão sobre compras online Avon 💎

🌱 Semente: 20%
🥉 Bronze: 30%
🥈 Prata: 35%
🥇 Ouro: 38%
💎 Diamante: 38%

🏡 Para todos os níveis, nas compras de Casa & Estilo, a comissão é de 15%.
https://naturaeavon.beedoo.io/wiki/464839/minha-loja`,
        },

        {
          title: "Tecnologia - B.O no Aplicativo | Beedoo",
          content: `📲 Para que possamos prosseguir com a solicitação, peço que me encaminhe os seguintes dados, por gentileza:

📱 Qual o modelo do celular:
🛠️ Versão do sistema operacional:
📌 Qual o nome do aplicativo:
🔢 Versão do aplicativo:
🧹 Já realizou a limpeza de cache?:
🔄 Já tentou reinstalar o aplicativo?:
📸 Encaminhe uma evidência do problema:
📞 Telefone para contato:
📧 E-mail para contato:

==============================================================================================================

Dados a parte para tabulação.

* Data e hora: A evidência deve ser do mesmo dia do contato.
* Descrever testes realizados com a consultora em linha conforme artigo Suporte: 
* Acesso via site: descrever qual o tipo de navegador está utilizando e qual a versão
* Descrição detalhada do erro: 

https://naturaeavon.beedoo.io/wiki/322563/tecnologia-problemas-sites-e-apps
`,
        },

        {
          title: "ERRO APLICATIVO",
          content: `Nossos sistemas estão com inconsistências no momento mas isso já está sendo resolvido pelo nosso time de tecnologia. Eles indicam realizar a limpeza de cache do seu celular, desinstalar e reinstalar novamente o aplicativo ou tentar pela internet para ver se o problema foi resolvido. Caso não, aguardar de 1h a 2h para tentar novamente já que as correções estão em andamento`,
        },

        {
          title:
            "PRORROGAÇÃO DE BOLETO PAGPAY (EMANA PAY) | PRAZO NÃO COMPORTADO",
          content: `Olá, XXXXXXXXX,

Infelizmente, não será possível prorrogar os boletos deste pedido, pois os boletos PagPay (EmanaPay) têm condições específicas para prorrogação. Veja abaixo os critérios para que isso seja possível:

🔄 Condições para Prorrogação de Boleto 🔄

1️⃣ Somente a primeira parcela pode ser prorrogada. Caso haja mais de uma parcela, apenas a primeira pode ser alterada.
2️⃣ A solicitação de prorrogação é válida apenas se o pedido for realizado com menos de 8 dias de antecedência ao vencimento da primeira parcela.

🔍 Análise do Pedido 🔍

O seu pedido de nº XXXXXXXXX foi entregue no dia XX/XX, e a primeira parcela vence em XX/XX. Como há XX dias para o vencimento do primeiro boleto desde a entrega do pedido, não é possível realizar a prorrogação dessa parcela, nem de nenhuma outra.

Pedimos desculpas pelo inconveniente e agradecemos pela compreensão. Se precisar de mais informações ou tiver outras dúvidas, estamos à disposição para ajudar! 😊`,
        },

        {
          title: "INCORPORAÇÃO (ITENS A MAIS)",
          content: `A incorporação foi realizada com sucesso através do protocolo nº XXXXXXXXXXXXXX.

🧾 Sobre os itens recebidos a mais:

📌 Você deverá guardar os itens por 90 dias corridos, contados a partir do recebimento. Durante esse período, alguém da nossa equipe poderá entrar em contato para agendar a coleta.

🔔 Caso não haja contato dentro desse prazo, os itens poderão permanecer com você, e o destino deles ficará a seu critério.

⚠️ Importante:

Os itens não devem ser entregues aos entregadores comuns (responsáveis pelos pedidos regulares).
A coleta, se for realizada, será feita por uma equipe especializada, mediante contato prévio.

📄 Protocolo da ocorrência: xxxxxxxxxxxx`,
        },

        {
          title: "N2 - CASO PARA SUPORTE",
          content: `Encaminhei a ocorrência de xxxxxxxxx para a área interna da Natura. Eles têm até 72h úteis para analisar e finalizar a tratativa. ⏳✅
 
O contato do nosso time interno geralmente é feito por telefone, então fique atenta a todo e qualquer contato por telefone, ligação ou whatsapp que receber. 👀
 
OBS: Caso não receba o contato até o prazo informado, você pode retornar um dia depois com o protocolo para que possamos verificar e te atualizar. 🔄📞
 
O protocolo da ocorrência é xxxxxxxxxxxx. 🆔`,
        },

        {
          title: "N2 - DESISTÊNCIA DE PRODUTO",
          content: `O cancelamento do produto foi processado com sucesso. Agora é só aguardar o prazo de até 90 dias corridos a partir da abertura da ocorrência para que a equipe responsável entre em contato e realize a coleta dos itens.

📦 Importante: Todos os itens citados na solicitação devem estar disponíveis no momento da coleta.
Se houver alguma divergência ou item faltando, a coleta não será realizada.

Caso a coleta não aconteça dentro do prazo, você poderá decidir o que fazer com os itens: pode usar, vender, doar, descartar… fica totalmente a seu critério. 😉

💰 Um crédito no valor de R$xx,xx será gerado em até 2 dias úteis e ficará disponível no sistema para ser:

° Reembolsado em uma conta corrente no seu nome 🏦
° Abatido de um boleto mercantil 💳
° Utilizado em um próximo pedido 🛒
O protocolo da ocorrência é xxxxxxxxxxxx. 🆔
`,
        },

        {
          title: "PROTOCOLO INCORRETO",
          content: `Perdão mas não conseguimos verificar protocolos como esse. Os protocolos gerados pelo atendimento da natura seguem esse padrão: NAT-XXXXXXXX-XXXXXXX.`,
        },

        {
          title: "ATALHOS - CAPTA",
          content: `http://pedidoscan.natura.net/captacao/consultar_pedido_CRM.html?codConsultora=xxxxxxxxx&origem=1
 
http://pedidoscan.natura.net/captacao/exibirIndividualizacoes.html?codConsultora=xxxxxxxxx&orig…
 
http://pedidoscan.natura.net/captacao/obter_extrato_crm.html?codConsultora=xxxxxxxxx&origem=1

http://pedidoscan.natura.net/captacao/simuladorCRM.html
 `,
        },

        {
          title: "PROMOÇÃO MMBB (CICLO 15)",
          content: `A cb informa que fez o pedido do kit da linha MMBB, que incluía a mala e os produtos da linha junto com a mala. Porém, a cb recebeu somente a mala, sem os produtos correspondentes.
 
Número do pedido:
COG: 173327
Ciclo: 15
Brinde: mala MMBB, que deveria vir acompanhada dos produtos da linha.
 
Descrição da promoção: Correção sobre caso do kit MMBB com a mala maternidade, onde o código estava divergente na revista impressa e foi enviado apenas a mala para as consultoras.

código dos brindes:

92786 - MMBB ÁGUA DE COLÔNIA 100ML NV
92798 - MMBB LENÇOS UMEDECIDOS C/50UN
97955 - MMBB CREME PREVENTIDO DE ASSADURAS 60G
130049 - MMBB SABONETE LÍQUIDO GLICERINADO 100ML
135049 - MMBB LOÇÃO HIDRATANTE PROTETORA 100ML
`,
        },

        {
          title: "Acordo de Espera",
          content: `• Pedir para aguardar ⏳

Peço que aguarde um momento, pois vou registrar as informações e logo retorno com você, tudo bem? 😊

Aguarde um momento, por gentileza, enquanto registro a solicitação no sistema. Caso necessário, estou à disposição. 📝💻

Aguarde um momento, por favor, enquanto verifico a informação no sistema. Caso precise, estou à disposição. 🔍📊

A solicitação será encaminhada ao setor responsável. ✅

Protocolo: xxxxxx. 🆔

• Pedir um momento 🙏

Mais um momento, por gentileza, estou verificando a informação. 👀

Mais um momento, por gentileza, estou registrando a informação. 🖋️

Só mais um momento, por gentileza, estou registrando as informações na ocorrência. Logo retorno com você. ⏳😊.
`,
        },

        /*{
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


`,
        },*/

        {
          title: "NOSSOS CONTATOS",
          content: `GUIA DE CONTATOS – NATURA

💄 CAN – Atendimento da Consultora
Telefone: 0800 762 8872
E-mail: natconsultora@natura.net
Horário de atendimento:
Segunda a sexta-feira, das 7h às 22h
Sábados, das 9h às 20h


👩‍💻 ATO e CIN – Atendimento para Líderes e Gerentes
Telefone: 0800 776 0013
E-mails: natgerente@natura.net | natlider@natura.net
Horário de atendimento: Segunda a sexta-feira, das 8h às 00h


💻 Exclusivo para Gerentes de Vendas e Gerentes de Mercado
WhatsApp: (11) 4389 7400
Atendimento via WhatsApp:
• Opção 1 – Criação de login genérico
• Opção 2 – Experiência CB


📱 Nat WhatsApp
WhatsApp: (11) 93036 0000
Horário de atendimento: 24 horas por dia, 7 dias por semana


💳 Cartão de Crédito Emana Pay
Telefone: 0800 777 0006
Horário de atendimento: Segunda a sábado, das 6h às 22h


💰 Central de Contas Emana Pay
Telefone: 0800 445 0009
Horário de atendimento: 24 horas por dia, 7 dias por semana


💰 Emana Pay – Seguros (Estoque e Casa)
Atendimento Emana Pay – Seguros: 0800 237 1368
Abertura de sinistros: 0800 646 8378
Assistência 24h: 0800 000 3095


🤝 Central de Apoio Social e Cidadania
Consultoras de Beleza:
Telefone: 0800 762 8872 (opção 6)

Líderes de Negócios:
Telefone: 0800 776 0013 (opção 5)

Horário de atendimento: Segunda a sábado, das 9h às 18h


👩‍🎓 Atendimento Líder Bolsista
Telefone: 0800 776 0013 (opção 4)
Horário de atendimento: Segunda a sexta-feira, das 9h às 18h


🫂 Ângela – Apoio a Mulheres Vítimas de Violência
Telefone: (11) 94494-2415


🗣️ Ligue Câncer
Telefone: 0800 773 1666
Horário de atendimento: Segunda a sexta-feira (exceto feriados), das 10h às 17h


👩🏾‍💻 Portal de Benefícios – Consultoras e Líderes
Acesso: https://consultoria.natura.com.br/webfv/beneficios


💻 Site Instituto Natura
Acesso: https://www.institutonatura.org/


🧑‍💻 Consumidor Final – Rede Natura e SNAC
Telefone fixo: 0800 011 5566
Celular: 0300 711 5566
Opção 1 – SNAC
Opção 2 – Rede Natura

AVON: 0800 708 2866

Horário de atendimento: Segunda a sexta-feira, das 8h às 21h

E-mail: consumidor_natura@natura.net


🛍️ Varejo – Empresárias e CNPJ
Telefone: 0800 779 1929
E-mail: natempresaria@natura.net
Horário de atendimento:
Segunda a sexta-feira, das 8h às 20h
Sábados, das 9h às 20h`,
        },

        {
          title: "GUIA DE CONTATOS INTERNACIONAIS – NATURA / AVON",
          content: `🇦🇷 Argentina 📞 0800 888 6288

🇨🇱 Chile 📞 800 11 5566

🇵🇪 Peru 📞 0800 11 556

🇧🇴 Bolívia 📞 800 10886

🇲🇽 México 📞 01 800 890 9294

🇨🇴 Colômbia 📞 01 8000 964 949`,
        },

        {
          title: "PARCEIROS DE COBRANÇA",
          content: `GUIA DE CONTATOS – PARCEIROS DE COBRANÇA (AVON)


GRUPO SERVICES
Código: 5
Telefone: 0800 647 2626
WhatsApp: (41) 8415-9812
Site: https://grupoervices.com.br/
E-mail exclusivo Avon: avon@servicesdigital.com.br


COBRATEL
Código: 47
Telefones:
0800 721 3701
(19) 3404 3800
WhatsApp: (19) 98219-9083

Sites oficiais e exclusivos Avon:
www.cobratel.com.br
www.dividaavon.com.br

E-mail exclusivo Avon: Cobratel.limeira@cobratel.com.br


PASCHOALOTTO
Códigos: 3 / 524 / 284
Telefones:
0800 400 4611
0800 400 4573
WhatsApp:
(14) 3201 5611
(14) 3201 5612

Site: www.paschoalotto.com.br

Plataforma Avon – Pagou Fácil: https://avon.pagoufacil.com.br/login

E-mail exclusivo Avon: avon@paschoalotto.com.br


PHERFIL
Código: 529
Telefone: 0800 018 0038
WhatsApp: (11) 97496-9785
SMS: 29220

Sites:
www.pherfiltec.com.br
https://phtec.ink/avon

E-mail exclusivo Avon: Boleto.avon@pherfil.com.br


A1 SOLUÇÕES
Código: 531
Telefone: 0800 600 9520
WhatsApp: (11) 99232-1316

Site oficial e plataforma: www.a1solucoes.com.br


ROBERTA NASCIMENTO ADVOGADOS ASSOCIADOS
Fase 1 – Telefone: 0800 4004 611
Fase 2 – Telefone: 0800 4004 573

Observação: Incobrável / Não cobrar


BLU365 / BLU
Códigos: 199 / 998
Plataforma Blu365 (Avon): https://blu365.com.br/avon/

Atendimento Blu: Exclusivamente via Messenger (Facebook)


SERASA
Telefone: 0800 591 1222
WhatsApp: (11) 99575-2096

Plataforma Limpa Nome – Avon: https://www.serasa.com.br/limpa-nome-online/parceiros/avon


PAGOU FÁCIL
Plataforma:
https://avon.pagoufacil.com.br/login

Telefone: (14) 3303-4784`,
        },

        {
          title: "Desistência de Pedido - Antes da Nota",
          content: `❌ Não foi possível cancelar o seu pedido neste momento, pois a nota fiscal ainda não foi emitida e o pedido não foi faturado.

⏳ Por favor, retorne assim que o status do pedido aparecer como "FATURADO E EM TRANSPORTE" para que possamos ajudar você..
`,
        },

        {
          title: "Captação de Pedido - Link",
          content: `http://pedidoscan.natura.net/captacao/consultar_pedido_CRM.html?codConsultora=26320096&origem=1`,
        },

        {
          title: "Contatos EmanaPay / PagPay",
          content: `📞 Negociação de boletos EmanaPay: 0800 646 2727

💳 Cartão de Crédito EmanaPay: 0800 777 0006 — (Transferência VDN: 80195)

🏦 Contas EmanaPay: 0800 445 0009 — (Transferência VDN: 80195)

🛡️ EmanaPay Seguros: 0800 237 1368 — (Dúvidas, 2ª via de documentos ou cancelamento)

💬 Central de Contas EmanaPay (Chat): https://suac.com/?08000008005`,
        },

        {
          title: "Reembolso",
          content: `💸 Para que possamos realizar o reembolso, preciso que você me informe os seguintes dados:

📝 Documento ( CPF ):
🏦 Banco:
🏤 Agência:
💳 Conta (em nome do titular):

👉 Você consegue me passar essas informações, por favor?`,
        },

        {
          title: "TRANSFERÊNCIA EMPRESÁRIA",
          content: `Verifiquei aqui e, como o seu atendimento é referente ao perfil de Empresária / CNPJ, esse tipo de solicitação é tratada por um setor exclusivo do Varejo.

Para te ajudarem da melhor forma, peço por gentileza que entre em contato diretamente pelos canais abaixo:

🛍️ VAREJO
📞 Telefone: 0800-799-1929
📧 E-mail: natempresaria@natura.net

⏰ Horário de atendimento:
• Segunda a Sexta: 08h às 20h
• Sábados: 09h às 20h`,
        },

        {
          title: "VOLUME DE BOLETOS",
          content: `Acabei de verificar por aqui e identifiquei que há diversos boletos em atraso no seu cadastro. Por esse motivo, não será possível realizar a negociação por este canal, devido ao volume de títulos vencidos.

📧 Nessa situação, orientamos que você entre em contato com nossa equipe responsável por e-mail, explicando o seu caso e solicitando a renegociação das dívidas por lá.

➡️ E-mail para contato: natconsultora@natura.net

🙏 Agradeço a sua compreensão e fico à disposição caso precise de qualquer outra orientação! 💖`,
        },

        {
          title: "AGUARDANDO PREPARAÇÃO DA CAIXA",
          content: `Verifiquei aqui e, no momento, não é possível abrir uma ocorrência, pois seu pedido ainda está com o status “Aguardando preparação da caixa”. Para cancelarmos ele precisa ao menos constar “Em Transporte”. Para realizar o recálculo da diferença do pedido, caso necessário, ele precisa constar como "Entregue" no sistema.

📦 Para seguir com qualquer análise, é necessário que o pedido:

1️⃣ **Conste como “Entregue” no sistema**, *ou*
2️⃣ **Tenha sua data limite de entrega extrapolada**, ou seja, passe do prazo previsto.

✨ Assim que uma dessas situações acontecer, posso abrir a ocorrência normalmente e te ajudar com o que for necessário, combinado?

🙏 Agradeço muito pela sua compreensão e permaneço à disposição! 💖`,
        },

        {
          title: "PORTE PAGO",
          content: `Encaminhei a ocorrência de XXXXXXX para a área interna da Natura. Foi gerado o porte pago, então você terá que encaminhar os itens para uma agêcia dos correios até o dia XX/XX. ⏳✅

O porte pago é um processo gratuito de devolução para o consumidor, logo, nada deve ser cobrado a você.

Lembre-se que as demais informações sobre o que você precisará fazer a seguir chegarão para você por e-mail. É só aguardar e acompanhar por lá. 📧👀

OBS: Caso não receba as informações por e-mail em até 5 dias após a abertura dessa ocorrência, você deve retornar um dia depois com o protocolo para que possamos verificar e te atualizar. 🔄📞

O protocolo da ocorrência é XXXXXXXXXXXX. 🆔`,
        },

        {
          title: "PEDIDO FATURADO E EM TRANSPORTE",
          content: `Verifiquei aqui e, no momento, não é possível abrir uma ocorrência, pois o seu pedido ainda está com o status “Faturado e em Transporte”.

📦 Para seguir com qualquer análise, é necessário que o pedido:

1️⃣ Conste como “Entregue” no sistema, ou
2️⃣ Tenha sua data limite de entrega extrapolada, ou seja, passe do prazo previsto.

✨ Assim que uma dessas situações acontecer, posso abrir a ocorrência normalmente e te ajudar com o que for necessário, combinado?

🙏 Agradeço muito pela sua compreensão e permaneço à disposição! 💖`,
        },

        {
          title: "Encerramento / Máximo 1 hora",
          content: `🔖 Protocolo aberto: XXXXXXXXXXXXXXX

💬 O atendimento atingiu o tempo máximo permitido de 1 hora, e por isso o chat foi encerrado automaticamente.

🌸 A Consultoria de Beleza agradece o seu contato e permanece à disposição sempre que precisar, XXXXXXX.

⏰ Nosso horário de atendimento:
• Segunda a Sexta: 07h às 22h
• Sábado: 09h às 20h

🌞 Agradecemos o seu contato, querida consultora! Até breve! 👋✨`,
        },

        {
          title: "REPARAÇÃO - ESPAÇO DIGITAL",
          content: `🚚✨ O sistema liberou duas opções de reparação para o seu caso, e gostaria de te explicar rapidinho como cada uma funciona:

🔄 Reenvio do produto

Nesta opção, o produto será enviado novamente para o seu endereço, sem nenhum custo adicional. Assim que a solicitação for confirmada, o reenvio segue para processamento e você receberá o item normalmente.

💰 Devolução do valor

Se preferir, você pode optar pela devolução do valor pago referente ao produto.
A restituição é realizada pelo mesmo método de pagamento utilizado na compra e segue os prazos padrão da operadora ou instituição financeira.

Agora que o sistema já disponibilizou essas duas alternativas, gostaria de saber:
Qual opção você deseja seguir — o reenvio do produto ou a devolução do valor? ❓🤝✨`,
        },

        {
          title: "INDISPONIBILIDADE - COBNET",
          content: `💻 No momento, o site e o aplicativo da Consultoria estão passando por uma indisponibilidade geral. Por isso, não será possível realizar nenhuma ação, como passar pedidos, verificar boletos, concluir pagamentos ou consultar informações.

🙏 Pedimos desculpas pelo transtorno e contamos com a sua compreensão!

Antes de aguardar o retorno do sistema, por gentileza, tente as seguintes ações:

🧹 Já realizou a limpeza de cache?
🔄 Já tentou reinstalar o aplicativo?
🌐 Tente também alternar o meio de acesso: use o navegador (pelo celular ou computador) ou o aplicativo, caso ainda não tenha tentado.

⏳ Caso o problema persista, pedimos que retorne o contato em aproximadamente 2 horas, para que possamos continuar o seu atendimento assim que o sistema estiver normalizado.

📅 Horário de funcionamento da central:

Segunda a Sexta: 07h às 22h

Sábado: 09h às 20h

✨ Agradecemos a sua paciência e deixamos um abraço carinhoso da Consultoria de Beleza! 💖`,
        },

        {
          title: "🏦 Informações de Bancos – Códigos, Contas e Agências",
          content: `
Agi (Agibank)           | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: – | Dígito: –
BTG Pactual             | CC: 8 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
C6                      | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
Banco de Brasília       | CC: 9 dígitos                  | CP: –                          | Agência: 4 | Dígito: 0
Banco do Brasil         | CC: 8 dígitos + 1 verificador  | CP: 8 dígitos + 1 verificador  | Agência: 4 | Dígito: 1
Next                    | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 1
Original                | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
Pan                     | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: – | Dígito: –
Safra                   | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
Votorantim              | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
BANES                   | CC: 7 dígitos + 1 verificador  | CP: –                          | Agência: 3 | Dígito: 0
Banrisul                | CC: 8 dígitos + 1 verificador  | CP: 8 dígitos + 1 verificador  | Agência: 4 | Dígito: 2
Bradesco                | CC: 7 dígitos + 1 verificador  | CP: 7 dígitos + 1 verificador  | Agência: 4 | Dígito: 1
BS2                     | CC: 11 dígitos + 1 verificador | CP: –                          | Agência: – | Dígito: –
Caixa Econômica Federal | CC: 11 dígitos + 1 verificador | CP: 11 dígitos + 1 verificador | Agência: 4 | Dígito: 0
Citibank                | CC: 7 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
BANCOOB                 | CC: 5 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 1
SICREDI                 | CC: 5 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
Inter                   | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 1
Itaú                    | CC: 5 dígitos + 1 verificador  | CP: 5 dígitos + 1 verificador  | Agência: 4 | Dígito: 0
Mercado Pago            | CC: 7 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
Mercantil do Brasil     | CC: 8 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
Modalmais               | CC: 8 dígitos + 1 verificador  | CP: –                          | Agência: – | Dígito: –
Neon                    | CC: 10 dígitos + 1 verificador | CP: –                          | Agência: – | Dígito: –
Nubank                  | CC: 10 dígitos + 1 verificador | CP: –                          | Agência: 4 | Dígito: 0
PagSeguro (PagBank)     | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
PicPay                  | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
Santander               | CC: 9 dígitos + 1 verificador  | CP: 9 dígitos + 1 verificador  | Agência: 4 | Dígito: 0
SICOOB                  | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: 4 | Dígito: 0
WillBank                | CC: 9 dígitos + 1 verificador  | CP: –                          | Agência: – | Dígito: –
Z1                      | CC: 8 dígitos + 1 verificador  | CP: –                          | Agência: – | Dígito: –
`,
        },

        {
          title: "PEDIDO CANCELADO - PRAZO (10 DIAS ÚTEIS)",
          content: `Por padrão, os estornos em cartão de crédito são realizados em até 10 dias úteis, independentemente da bandeira ou administradora responsável 🕒💰

📅 Considerando que o cancelamento foi feito em XX/XX, o prazo estimado para o estorno é até o dia XX/XX.

Se o valor não aparecer na fatura atual, não se preocupe! 😌
Ele será lançado automaticamente na próxima fatura — é só aguardar, tudo bem? 💳✨

💖 Agradecemos a sua compreensão e estamos por aqui caso precise de algo mais! 🤝🌷

O protocolo da ocorrência é XXXXX. 🆔`,
        },

        {
          title: "💳 Aviso sobre o sistema de pagamentos",
          content: `No momento, nossos sistemas de pagamento estão passando por uma indisponibilidade temporária. O EmanaPay está com dificuldades para realizar a baixa dos boletos, mas já estamos acompanhando tudo de pertinho 👀💼

👉 A orientação é aguardar até o final do dia de hoje (31/10/2025).
Caso o boleto ainda não seja baixado, pedimos que retorne o contato amanhã, entre 9h e 22h, para que possamos ajudar você direitinho 💬🤝

🌞 Agradecemos o seu contato e a sua paciência!
Até breve! 👋✨

O protocolo da ocorrência é XXXXX. 🆔`,
        },

        {
          title: "RESUMO DE CONTRATO - PAGPAY",
          content: `Resumo do contrato
Número da entrega: 
Número do contrato: 
Situação do contrato: 
Contratado em: 
Valor financiado: 
Data de vencimento: 
Parcelado em:`,
        },

        {
          title: "IMPOSSIBILIDADE SISTÊMICA - DYNAMICS",
          content: `💻 Devido a uma indisponibilidade no sistema de análise do cadastro consultoria, eu não conseguirei prosseguir com a sua solicitação neste momento.
 
🙏 Eu peço desculpas pelo transtorno e contamos com a sua compreensão.
 
⏳ Por gentileza, eu peço que retorne o contato em aproximadamente 2 horas, para que possamos dar continuidade à sua solicitação.
 
📅 Nossa central funciona:
 
* Segunda a Sexta: 07h às 22h
* Sábado: 09h às 20h
 
Novamente, peço mil desculpas pelo transtorno causado!
meu sistema está inoperante no momento, retorne em até 2 horas, por gentileza.
 
✨ Agradecemos a sua paciência e deixamos um abraço da Consultoria de Beleza!

O protocolo da ocorrência é XXXXX. 🆔`,
        },

        {
          title: "Comissão Espaço Digital / Minha Loja - Prazo 2 dias úteis",
          content: `Sobre os pedidos realizados pelo Espaço Digital ou pela Minha Loja, a comissão pode ser creditada em até 2 dias úteis após a realização do pedido. Esse é o prazo necessário para que o valor seja processado e compensado pela Natura para você.

📅 Sendo assim, o pagamento está previsto para até o dia XX/XX.
Caso você não receba após essa data, pode retornar o contato com a gente, que vamos verificar direitinho para você, combinado? 🤝✨`,
        },

        {
          title: "PRÉ-CADASTRO",
          content: `Verifiquei aqui e, no momento, seu cadastro consta como cessado.

Se você desejar realizar o pré-cadastro novamente e voltar a revender, será necessário entrar em contato diretamente com a nossa central de atendimento da consultora (CAN) ou tentar pelo site/app de consultoria.
👉 Esse processo não pode ser realizado por aqui nem por e-mail, combinado?

📞 Central de CAN – Atendimento da Consultora
Telefone: 0800 762 8872

✨ Assim, você conseguirá retomar seu cadastro da forma correta e com todo o suporte necessário!`,
        },

        {
          title: "MOTIVO - ATRASO/DEMORA DE FATURAMENTO",
          content: `XXXXXXX, eu entendo totalmente a sua preocupação e sinto muito pela espera. 🙏💛
Aqui do meu lado, não consigo visualizar o motivo exato do atraso no faturamento do seu pedido, mas posso te explicar o que geralmente acontece nesses casos.

Normalmente, a demora pode ocorrer por dois motivos principais:
• Alguns itens do seu pedido podem não estar disponíveis no momento da montagem, e isso acaba segurando o processo;
• Ou o centro de distribuição da sua região pode estar passando por um período de demanda muito alta, o que deixa o faturamento um pouquinho mais lento.

De verdade, lamento não conseguir te dizer exatamente qual desses fatores impactou o seu pedido.
Mas fico aqui à disposição para te acompanhar no que precisar e agradeço muito pela sua compreensão. 💛✨`,
        },

        {
          title: "ERRO - CADASTRO BLOQUEADO E COM DÉBITOS",
          content: `XXXXXX, acabei de conferir tudo com cuidado por aqui e está tudo certinho no seu cadastro. Não consta nenhum boleto vencido, nenhum bloqueio e nenhuma restrição. Seu cadastro está ativo e regular, tá? 💛✨

Sobre aquela mensagem que você recebeu, pode ficar tranquila. Muitas consultoras também relataram isso nos últimos dias, e já identificamos que se trata de um erro geral do sistema, que a Natura já está ajustando.

Então, por enquanto, você pode desconsiderar essas notificações, combinado?
E, claro, qualquer dúvida sobre débitos, cadastro ou qualquer outra coisa, pode voltar a falar com a gente sempre que quiser. Você também pode conferir tudo diretamente na sua guia de títulos pelo app ou site da consultoria.

Estou aqui para te ajudar no que precisar! 💖`,
        },

        {
          title: "COMO PEGAR E ENVIAR OS COMPROVANTES",
          content: `Aqui vai um **script simples, direto e fácil de seguir**, explicando como obter o comprovante de pagamento e como enviar pelo chat/WhatsApp:

---

📄 **Como pegar seu comprovante de pagamento**
É bem rapidinho! Siga estes passos:

1. **Acesse o aplicativo ou site do seu banco**.
2. Vá até a área de **"Comprovantes"**, **"Pagamentos"** ou **"Extrato"** (o nome pode mudar dependendo do banco).
3. Localize o pagamento que você realizou.
4. Toque em **“Ver comprovante”**.
5. Depois, selecione **“Salvar”**, **“Baixar PDF”** ou **“Compartilhar”**, conforme a opção que aparecer.

---

📲 **Como enviar o comprovante pelo chat/WhatsApp**

1. Depois de salvar o comprovante no seu celular, entre aqui no chat ou no WhatsApp.
2. Toque no ícone de **clipe 📎 / anexar**.
3. Escolha **“Documento”**, **“Imagem”** ou **“Galeria”**, dependendo de como ele foi salvo.
4. Selecione o arquivo do comprovante.
5. Clique em **Enviar**. ✔️
`,
        },

        {
          title: "FALTA - NOTA DE CRÉDITO REPARAÇÃO",
          content: `Encaminhei a ocorrência de falta para a área interna da Natura selecionando a nota de crédito como forma de reparação.

💰 Um crédito no valor de R$XXXX será gerado em até 2 dias úteis e ficará disponível no sistema para ser:
° Reembolsado em uma conta corrente no seu nome 🏦
° Abatido de um boleto mercantil 💳
° Utilizado em um próximo pedido 🛒

O protocolo da ocorrência é XXXXXXXXXX. 🆔`,
        },

        {
          title: "N2 - EM ANDAMENTO",
          content: `Acabei de verificar e já há uma ocorrência de XXXXXXXX que foi encaminhada para a área interna da Natura. Eles têm até o dia XXXX para analisar e finalizar a tratativa. Então nesse caso é só aguardar. ⏳✅

Lembre-se que as demais informações chegarão para você por e-mail. É só aguardar e acompanhar por lá. 📧👀

OBS: Caso não receba as informações por e-mail até o prazo informado, você pode retornar um dia depois com o protocolo para que possamos verificar e te atualizar. 🔄📞

O protocolo da ocorrência é XXXXXXXXXXXX. 🆔`,
        },

        {
          title: "CANCELAMENTO PRÉ-PEDIDO",
          content: `XXXXXXXX, ainda não é possível realizar o cancelamento neste momento.

Como se trata de um pedido de pré-venda, ele só fica liberado para cancelamento quando estiver em um desses estágios:

• No primeiro dia do ciclo do pré-pedido
• Faturado e em transporte
• Ou já constando como entregue

Até que uma dessas etapas seja alcançada, o sistema não permite abrir o cancelamento.
Peço sua compreensão e gentileza para aguardar esse período, tudo bem?

Se tiver qualquer outra dúvida ou precisar que eu acompanhe esse pedido com você, estou à disposição.`,
        },

        {
          title: "VENDA IRREGULAR",
          content: `XXXXXX, caso você identifique ou presencie irregularidades nas vendas, como anúncios indevidos na internet, redes sociais, estabelecimentos físicos ou qualquer outra prática fora das normas, a orientação é realizar a denúncia pelos canais oficiais.

Você pode encaminhar um e-mail para:
vendairregularonline@natura.net

Nesse e-mail, é importante:
• Descrever detalhadamente o ocorrido;
• Informar quando e onde a irregularidade foi identificada;
• Relatar o que você presenciou ou tomou conhecimento;
• E, se possível, anexar evidências, como prints, links, fotos ou outros materiais que ajudem na análise.

Além disso, tanto consultoras quanto pessoas que não são consultoras também podem registrar a denúncia de forma anônima ou se identificando, por meio do formulário disponível no site:
www.natura.com.br > Atendimento > Ouvidoria.

Esses canais são os responsáveis por receber e apurar esse tipo de situação.
Agradeço por contribuir para um ambiente de vendas mais justo e alinhado às normas. Fico à disposição caso precise de mais alguma orientação.`,
        },

        {
          title: "VALOR DE CADA VALE-PONTO",
          content: `O valor de um Vale-ponto pode variar bastante, não havendo um valor exato para representá-lo. No entanto, o valor médio aproximado de 1 Vale-ponto é de cerca de R$ 5,60 💰📊.`,
        },

        <!--
        {
          title: "",
          content: ``,
        },
        -->
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
  const regexBeedoo = /https?:\/\/[^\s]*beedoo\.io[^\s]*/g;
  const cleanContent = content.replace(regexBeedoo, "").trim();
      navigator.clipboard.writeText(cleanContent);
      btn.textContent = "Copiado!";
      setTimeout(() => (btn.textContent = "Copiar"), 1500);
    };

    section.appendChild(h2);
    section.appendChild(pre);
    section.appendChild(btn);
    container.appendChild(section);
    addOpenLinkButton(section, content); 
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
  const regexBeedoo = /https?:\/\/[^\s]*beedoo\.io[^\s]*/g;
  const cleanContent = content.replace(regexBeedoo, "").trim();
  navigator.clipboard.writeText(cleanContent);
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
  addOpenLinkButton(section, content); 
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
  const regexBeedoo = /https?:\/\/[^\s]*beedoo\.io[^\s]*/g;
  const cleanContent = content.replace(regexBeedoo, "").trim();
  navigator.clipboard.writeText(cleanContent);
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
    addOpenLinkButton(section, content); 

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


let intervaloDigitando;
let timeoutEsconder;
let timeoutTroca;

// Função que mostra a fala do mascote simulando digitação
function mostrarFalaMascote(frases) {
  const fala = document.getElementById("fala-do-mascote");
  if (!fala) return;

  // limpa timers antigos (evita acumular ao trocar de aba)
  clearInterval(intervaloDigitando);
  clearTimeout(timeoutEsconder);
  clearTimeout(timeoutTroca);

  const frase = frases[Math.floor(Math.random() * frases.length)];
  fala.textContent = "";
  fala.classList.add("show");

  let i = 0;
  intervaloDigitando = setInterval(() => {
    fala.textContent += frase[i];
    i++;
    if (i >= frase.length) {
      clearInterval(intervaloDigitando);

      // esconde depois de 4s
      timeoutEsconder = setTimeout(() => {
        fala.classList.remove("show");
      }, 4000);

      // mostra outra frase depois de 10s
      timeoutTroca = setTimeout(() => {
        mostrarFalaMascote(frases);
      }, 10000);
    }
  }, 100); // velocidade da digitação
}


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

// iniciar
mostrarFalaMascote(frasesMascote);

// pausar/reiniciar ao trocar de aba
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(intervaloDigitando);
    clearTimeout(timeoutEsconder);
    clearTimeout(timeoutTroca);
  } else {
    mostrarFalaMascote(frasesMascote);
  }
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

function addOpenLinkButton(section, content) {
  const regex = /https?:\/\/[^\s]*beedoo\.io[^\s]*/g;
  const match = content.match(regex);
  if (match && match.length > 0) {
    // remove o link do texto mostrado
    const pre = section.querySelector("pre");
    pre.textContent = content.replace(regex, "").trim();

    // cria botão verde
    const btnLink = document.createElement("button");
    btnLink.textContent = "📝 Beedoo";
    btnLink.className = "open-link-btn";
    btnLink.title = "Abrir link do Beedoo";
    btnLink.onclick = () => window.open(match[0], "_blank");
    section.appendChild(btnLink);
  }
}

// ---- BOTÃO DE TEMAS ----
const botaoTema = document.getElementById("botaoTema");
const temaContainer = document.getElementById("temaContainer");
const listaTemas = document.getElementById("listaTemas");

botaoTema.addEventListener("click", () => {
  temaContainer.classList.toggle("show");
});

listaTemas.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    const tema = item.dataset.tema;
    aplicarTema(tema);
    temaContainer.classList.remove("show");
  });
});


// 🔹 Tema atual começa como Girassol (padrão)
let temaAtual = "girassol";

function aplicarTema(tema) {
  const overlay = document.querySelector(".theme-transition");

  // ativa o fade
  overlay.classList.add("active");

  setTimeout(() => {
    // aplica o tema normalmente
    aplicarTemaInterno(tema);
    temaAtual = tema; // guarda o último tema escolhido

    // desativa o fade suavemente
    setTimeout(() => {
      overlay.classList.remove("active");
    }, 400); // fade out
  }, 1000); // loading
}

function aplicarTemaInterno(tema) {
  const logoEquipe = document.querySelector(".logo-girassol");
  const logoChat = document.querySelector(".logo-diamante");
  const favicon = document.getElementById("favicon");
  const atendimentoDiv = document.querySelector(".Atendimento");
  const mascoteImg = document.querySelector("#mascote img");

  // seleciona os mascotes do header
  const mascoteLeft = document.querySelector(".mascote-left");
  const mascoteRight = document.querySelector(".mascote-right");

  // =====================
  // 🔹 Tema Querubim 🐷
  // =====================
  if (tema === "querubim") {
    favicon.href = "https://emojiapi.dev/api/v1/1f437.svg";
    document.body.classList.add("tema-querubim");

    if (atendimentoDiv) atendimentoDiv.textContent = "🐷 Atendimento";
    document.title = "Equipe Querubim • Atendimento Can 🐷";
    logoEquipe.textContent = "🐷 Equipe Querubim";
    logoChat.textContent = "";

    // estilos texto
    logoEquipe.style.color = "#ffffff";
    logoEquipe.style.textShadow = `
      -1px -1px 0 #3B2F2F, 
       1px -1px 0 #3B2F2F,
      -1px  1px 0 #3B2F2F,
       1px  1px 0 #3B2F2F
    `;
    logoChat.style.color = "#ffffff";
    logoChat.style.textShadow = `
      -1px -1px 0 #3B2F2F, 
       1px -1px 0 #3B2F2F,
      -1px  1px 0 #3B2F2F,
       1px  1px 0 #3B2F2F
    `;

    // supervisora
    document.querySelector(".supervisora strong").textContent = "Victoria Ferracin";

    // cores do header e body
    document.querySelector("header").style.background = "#4aa3a3";
    document.body.style.background = "#fcd5b5";

    document.querySelector("header").style.backgroundImage =
      "radial-gradient(rgba(30, 90, 90, 0.3) 30%, transparent 30%)";
    document.querySelector("header").style.backgroundSize = "20px 20px";

    document.body.style.backgroundImage =
      "radial-gradient(rgba(240, 150, 120, 0.25) 25%, transparent 25%), linear-gradient(to bottom, #fcd5b5, #fcd5b5)";
    document.body.style.backgroundSize = "50px 50px, 100% 100%";

    // mascote principal
    mascoteImg.src = "mascote2.png";
    mascoteImg.alt = "Mascote Querubim";
    document.getElementById("fala-do-mascote").textContent = "Olá Querubim 🐷";

    // mascotes do header somem
    if (mascoteLeft) mascoteLeft.style.display = "none";
    if (mascoteRight) mascoteRight.style.display = "none";
  }

  // =====================
  // 🔹 Tema Girassol 🌻 (reset)
  // =====================
  else if (tema === "girassol") {
    favicon.href = "https://emojiapi.dev/api/v1/1f33b.svg";
    document.body.classList.remove("tema-querubim");

    if (atendimentoDiv) atendimentoDiv.textContent = "🌻 Atendimento";
    document.title = "Equipe Girassol 🌻 | Atendimento Diamante 💎";
    logoEquipe.textContent = "🌻 Equipe Girassol";
    logoChat.textContent = "• Chat Diamante 💎";

    // reset estilos texto
    logoEquipe.style.color = "";
    logoEquipe.style.textShadow = "";
    logoChat.style.color = "";
    logoChat.style.textShadow = "";

    // supervisora original
    document.querySelector(".supervisora strong").textContent = "Maria Alice";

    // reset cores
    document.querySelector("header").style.background = "";
    document.querySelector("header").style.backgroundImage = "";
    document.querySelector("header").style.backgroundSize = "";
    document.body.style.background = "";
    document.body.style.backgroundImage = "";
    document.body.style.backgroundSize = "";

    // mascote original
    mascoteImg.src = "mascote.png";
    mascoteImg.alt = "Mascote Girassol Diamante";
    document.getElementById("fala-do-mascote").textContent = "Olá Girassol 🌻";

    // mascotes do header voltam
    if (mascoteLeft) mascoteLeft.style.display = "block";
    if (mascoteRight) mascoteRight.style.display = "block";
  }
}
