/* ==========================
   JWChat – app.js
   Uso privado | jw.org
   ========================== */

window.onload = () => {
  addMessage(
    "Olá 😊<br><br>Sou o <b>JWChat</b>.<br>Digite uma pergunta bíblica.<br>duvida? digite cmd",
    "bot"
  );
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const texto = input.value.trim();
  if (!texto) return;

  addMessage(texto, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(responder(texto), "bot");
  }, 300);
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = type;
  div.innerHTML = text;
  document.getElementById("messages").appendChild(div);
  div.scrollIntoView({ behavior: "smooth" });
}

function norm(t) {
  return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* ==========================
   PERGUNTAS E RESPOSTAS
   ========================== */

const base = [

{
  perguntas: ["quem é jeová","nome de deus","deus tem nome"],
  resposta: `
<b>Quem é Jeová?</b><br><br>
Jeová é o nome pessoal do Deus Todo-Poderoso.
Ele é o Criador de todas as coisas e deseja que as pessoas o conheçam.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/nome-de-deus/
`
},

{
  perguntas: ["jesus é deus","jesus e deus"],
  resposta: `
<b>Jesus é Deus?</b><br><br>
A Bíblia ensina que Jesus é o Filho de Deus.
Ele sempre reconheceu Jeová como seu Pai.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/wp20090401/jesus-e-deus/
`
},

{
  perguntas: ["quem é jesus"],
  resposta: `
<b>Quem é Jesus?</b><br><br>
Jesus é o Filho unigênito de Deus e o Messias prometido.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/wp20110301/Quem-%C3%A9-Jesus-Cristo/
`
},

{
  perguntas: ["o que acontece quando morremos","depois da morte"],
  resposta: `
<b>O que acontece quando morremos?</b><br><br>
A morte é como um sono profundo.
Os mortos não têm consciência nem sofrem.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/quando-morremos/
`
},

{
  perguntas: ["ressurreição"],
  resposta: `
<b>O que é a ressurreição?</b><br><br>
Jeová promete trazer de volta à vida pessoas que morreram.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/wp20150801/ressurreicao-esperanca-para-mortos/
`
},

{
  perguntas: ["vida eterna"],
  resposta: `
<b>O que é vida eterna?</b><br><br>
Vida eterna é viver para sempre sob o Reino de Deus.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/w20090815/Vida-eterna-na-Terra-uma-esperan%C3%A7a-que-Deus-nos-oferece/
`
},

{
  perguntas: ["paraíso"],
  resposta: `
<b>O que é o Paraíso?</b><br><br>
O Paraíso será a Terra transformada em um lugar perfeito.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/g201301/o-que-e-paraiso/
`
},

{
  perguntas: ["reino de deus"],
  resposta: `
<b>O que é o Reino de Deus?</b><br><br>
É o governo celestial estabelecido por Jeová.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/que-e-reino-de-deus/
`
},

{
  perguntas: ["oração","como orar"],
  resposta: `
<b>O que é oração?</b><br><br>
A oração é uma forma de falar com Jeová de maneira sincera.
<br><br>
📖 https://www.jw.org/pt/biblioteca/livros/estudo-da-biblia/como-orar/
`
},

{
  perguntas: ["deus ouve orações"],
  resposta: `
<b>Deus ouve orações?</b><br><br>
Jeová ouve orações feitas com fé e sinceridade.
<br><br>
📖 https://www.jw.org/pt/biblioteca/livros/estudo-da-biblia/como-orar/
`
},

{
  perguntas: ["sofrimento","por que existe sofrimento"],
  resposta: `
<b>Por que existe sofrimento?</b><br><br>
Deus não criou o sofrimento e promete acabar com ele.
<br><br>
📖 https://www.jw.org/pt/biblioteca/videos/Boas-Not%C3%ADcias-de-Deus-para-Voc%C3%AA-V%C3%ADdeos/video-por-que-existe-sofrimento/
`
},

{
  perguntas: ["inferno"],
  resposta: `
<b>Existe inferno?</b><br><br>
A Bíblia não ensina tormento eterno.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/sera-que-o-inferno-existe/
`
},

{
  perguntas: ["alma imortal"],
  resposta: `
<b>A alma é imortal?</b><br><br>
A Bíblia não ensina que a alma é imortal.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/wp20091101/mito-a-alma-e-imortal/
`
},

{
  perguntas: ["trindade"],
  resposta: `
<b>A Trindade é bíblica?</b><br><br>
A Bíblia não ensina a Trindade.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/g201308/trindade/
`
},

{
  perguntas: ["satanás"],
  resposta: `
<b>Quem é Satanás?</b><br><br>
Satanás é um anjo que se rebelou contra Deus.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/g200702/quem-e-satanas-ele-existe/
`
},

{
  perguntas: ["família"],
  resposta: `
<b>Família segundo a Bíblia</b><br><br>
A Bíblia ensina princípios para famílias felizes.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/familia/
`
},

{
  perguntas: ["casamento"],
  resposta: `
<b>O que a Bíblia diz sobre casamento?</b><br><br>
O casamento é uma instituição criada por Deus.
<br><br>
📖 https://www.jw.org/pt/biblioteca/livros/continue-a-amar-a-deus/casamento-presente-de-deus/
`
},

{
  perguntas: ["jovens"],
  resposta: `
<b>Conselhos para jovens</b><br><br>
A Bíblia ajuda jovens a tomar boas decisões.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/jovens/
`
},

{
  perguntas: ["ansiedade"],
  resposta: `
<b>Ansiedade</b><br><br>
A Bíblia oferece consolo e esperança para quem sofre ansiedade.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/jovens/perguntam/controlar-a-ansiedade/
`
},

{
  perguntas: ["esperança"],
  resposta: `
<b>Esperança bíblica</b><br><br>
A Bíblia oferece uma esperança segura para o futuro.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/textos-biblicos-esperanca/
`
},

{
  perguntas: ["fé","o que é fé"],
  resposta: `
<b>O que é fé?</b><br><br>
A fé verdadeira se baseia em provas confiáveis.
Ela envolve confiança em Jeová e em suas promessas.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/wp20090501/O-que-%C3%A9-f%C3%A9/
`
},

{
  perguntas: ["amor","o que é amor"],
  resposta: `
<b>O que é amor?</b><br><br>
O amor é a principal qualidade ensinada na Bíblia.
Jeová é a maior fonte de amor.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/g201502/amor/
`
},

{
  perguntas: ["perdão","perdoar"],
  resposta: `
<b>O que a Bíblia diz sobre perdão?</b><br><br>
Jeová ensina a perdoar de coração.
O perdão traz paz e alívio emocional.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/o-que-significa-perdoar/
`
},

{
  perguntas: ["bíblia é confiável","a bíblia é confiável"],
  resposta: `
<b>A Bíblia é confiável?</b><br><br>
A Bíblia é historicamente precisa
e contém profecias que se cumpriram.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/sentinela-no1-2020-jan-fev/biblia-confiavel-fala-verdade/
`
},

{
  perguntas: ["espírito santo"],
  resposta: `
<b>O que é o espírito santo?</b><br><br>
O espírito santo é a força ativa de Deus,
usada para cumprir sua vontade.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/o-que-e-o-espirito-santo/
`
},

{
  perguntas: ["anjos","quem são os anjos"],
  resposta: `
<b>Quem são os anjos?</b><br><br>
Os anjos são criaturas espirituais
criadas por Jeová para servir a ele.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/o-que-sao-anjos/
`
},

{
  perguntas: ["demônios","demônio existe"],
  resposta: `
<b>Os demônios existem?</b><br><br>
A Bíblia ensina que os demônios
são anjos que se rebelaram com Satanás.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/demonios-existem/
`
},

{
  perguntas: ["céu","ir para o céu"],
  resposta: `
<b>Quem vai para o céu?</b><br><br>
A Bíblia mostra que apenas um grupo limitado(144mil)
governa com Cristo no céu.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/quem-vai-para-o-ceu/
`
},

{
  perguntas: ["terra vai acabar","fim da terra"],
  resposta: `
<b>A Terra vai acabar?</b><br><br>
A Bíblia ensina que a Terra foi criada
para durar para sempre.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/terra-destruida/
`
},

{
  perguntas: ["mandamentos","dez mandamentos"],
  resposta: `
<b>Os Dez Mandamentos ainda valem?</b><br><br>
Os princípios dos mandamentos continuam úteis,
mas os cristãos seguem a lei de Cristo.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/10-mandamentos/
`
},

{
  perguntas: ["pecado","o que é pecado"],
  resposta: `
<b>O que é pecado?</b><br><br>
Pecado é qualquer ação ou pensamento
que desagrada a Jeová.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/o-que-e-pecado/
`
},

{
  perguntas: ["arrependimento"],
  resposta: `
<b>O que é arrependimento?</b><br><br>
Arrependimento envolve reconhecer o erro,
mudar de atitude e buscar o perdão de Deus.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/sentinela-estudo-outubro-2021/O-que-%C3%A9-o-verdadeiro-arrependimento/
`
},

{
  perguntas: ["batismo"],
  resposta: `
<b>O que é o batismo?</b><br><br>
O batismo é um símbolo público
de dedicação a Jeová.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/perguntas/o-que-e-batismo/
`
},

{
  perguntas: ["testemunhas de jeová","quem são as testemunhas de jeová"],
  resposta: `
<b>Quem são as Testemunhas de Jeová?</b><br><br>
São cristãos que se esforçam para seguir
os ensinamentos da Bíblia.
<br><br>
📖 https://www.jw.org/pt/testemunhas-de-jeova/
`
},

{
  perguntas: ["reuniões cristãs","reuniões da congregação"],
  resposta: `
<b>O que são as reuniões cristãs?</b><br><br>
As reuniões ajudam a aprender a Bíblia
e a fortalecer a fé.
<br><br>
📖 https://www.jw.org/pt/testemunhas-de-jeova/reunioes/
`
},

{
  perguntas: ["pregação","obra de pregação"],
  resposta: `
<b>Por que os cristãos pregam?</b><br><br>
Jesus ordenou que as boas novas
fossem pregadas no mundo todo.
<br><br>
📖 https://www.jw.org/pt/testemunhas-de-jeova/atividades/pregacao/
`
},

{
  perguntas: ["bíblia e ciência"],
  resposta: `
<b>A Bíblia contradiz a ciência?</b><br><br>
A Bíblia está em harmonia com fatos científicos
quando corretamente entendida.
<br><br>
📖 https://www.jw.org/pt/ensinos-biblicos/ciencia/
`
},

{
  perguntas: ["educação dos filhos"],
  resposta: `
<b>Como educar filhos segundo a Bíblia?</b><br><br>
A Bíblia incentiva disciplina amorosa
e bons valores morais.
<br><br>
📖 https://www.jw.org/pt/biblioteca/brochuras/familia-feliz/como-educar-seus-filhos/
`
},

{
  perguntas: ["trabalho","emprego"],
  resposta: `
<b>O que a Bíblia diz sobre trabalho?</b><br><br>
A Bíblia incentiva o trabalho honesto
e a responsabilidade.
<br><br>
📖 https://www.jw.org/pt/biblioteca/revistas/wp20150201/gostar-trabalho-duro/
`
},

{
  perguntas: ["governos","autoridades"],
  resposta: `
<b>Qual é a posição cristã sobre governos?</b><br><br>
A Bíblia ensina respeito às autoridades,
sem colocar governos acima de Deus.
<br><br>
📖 https://www.jw.org/pt/informacoes-autoridades-jornalistas/
`
},

{
  perguntas: ["cmd","cmds","ajuda"],
  resposta: `
<b>AQUI ESTÁ A LISTA DE PERGUNTAS</b><br><br>
* quem é jeová / nome de deus / deus tem nome<br>
* jesus é deus / jesus e deus<br>
* quem é jesus<br>
* o que acontece quando morremos / depois da morte<br>
* ressurreição<br>
* vida eterna<br>
* paraíso<br>
* reino de deus<br>
* oração / como orar<br>
* deus ouve orações<br>
* sofrimento / por que existe sofrimento<br>
* inferno<br>
* alma imortal<br>
* trindade<br>
* satanás<br>
* família<br>
* casamento<br>
* jovens<br>
* ansiedade<br>
* esperança<br>
* fé / o que é fé<br>
* amor / o que é amor<br>
* perdão / perdoar<br>
* bíblia é confiável / a bíblia é confiável<br>
* espírito santo<br>
* anjos / quem são os anjos<br>
* demônios / demônio existe<br>
* céu / ir para o céu<br>
* terra vai acabar / fim da terra<br>
* mandamentos / dez mandamentos<br>
* pecado / o que é pecado<br>
* arrependimento<br>
* batismo<br>
* testemunhas de jeová / quem são as testemunhas de jeová<br>
* reuniões cristãs / reuniões da congregação<br>
* pregação / obra de pregação<br>
* bíblia e ciência<br>
* educação dos filhos<br>
* trabalho / emprego<br>
* governos / autoridades<br>
<br>
Para ver detalhes de algum tema, digite exatamente como está na lista.
`
}



];

/* ==========================
   MOTOR
   ========================== */

function responder(texto) {
  const t = norm(texto);

  if (["oi","olá","ola","bom dia","boa tarde","boa noite"].includes(t)) {
    return "Olá 😊 Pode fazer sua pergunta bíblica.";
  }

  for (const item of base) {
    if (item.perguntas.some(p => t === norm(p))) {
      return item.resposta;
    }
  }

  return `
Não encontrei essa pergunta exata, pois a ia ainda esta em uma faze beta.<br><br>
🔎 https://www.jw.org/pt/pesquisa/
`;
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = type;
  div.innerHTML = text;

  // transformar todos os links <a> em abertos em nova aba
  div.querySelectorAll("a").forEach(a => {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  // substituir links de texto simples (https://...) por <a> clicável
  div.innerHTML = div.innerHTML.replace(
    /(https?:\/\/[^\s<]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  document.getElementById("messages").appendChild(div);
  div.scrollIntoView({ behavior: "smooth" });
}
