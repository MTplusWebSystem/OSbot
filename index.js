const { Client, WhatsAppBot } = require("rompot");

const client = new Client(new WhatsAppBot(), {
  disableAutoCommand: false,
  disableAutoTyping: false,
  disableAutoRead: true,
});

client.on("open", (open) => {
  console.log("Cliente conectado!");
});

client.on("close", (close) => {
  console.log("Cliente desconectado!");
});

client.on("stop", (closed) => {
  console.log("Cliente parado!");
});

client.on("connecting", (conn) => {
  console.log("Conectando cliente...");
});

client.on("reconnecting", (conn) => {
  console.log("Reconectando cliente...");
});
  
let responseSent = false; // Variável de controle para rastrear se uma resposta foi enviada

client.on("message", (message) => {
  console.log(`Mensagem recebida de ${message.user.name}`);

  if (!responseSent) {
if (message.text == "P" ){
  message.reply(
    "=================== \n"+    
    "*1️⃣ BÁSICO*\n\n"+
    "*2️⃣ Plus*\n\n"+
    "*3️⃣ Família*\n\n"+
    "```Digite o número da opção\nPara ter mais informações``` \n"
    );
  responseSent = true;
}
else if (message.text == "1" ){
  message.reply(
  "-----> BÁSICO <-----"+"\n"+
    "    R$ 10,00 "+"\n"+
    "------------------"+"\n"+
  "⭕️ SERVIDOR BRASILEIRO🇧🇷"+"\n"+
  "⭕️ LIMITE DE ACESSO 1"+"\n"+
  "⭕️ CHAMADA VOIP ✔️"+"\n"+
  "⭕️ FRANQUIA ILIMITADA✔️"+"\n"+
  "⭕️ JOGOS ONLINES✔️"+"\n"+
  "⭕️ BANCOS✔️"+"\n"+
  "⭕️ STRIMER DE SERES E FILMES FHD✔️"+"\n"+
  "⭕️ PROIBIDO Torrent🚫"+"\n");
  responseSent = true;
}
else if (message.text == "2" ){
  message.reply(
    "-----> PLUS <-----"+"\n"+
    "    R$ 10,00 "+"\n"+
    "------------------"+"\n"+
  "⭕️ SERVIDOR BRASILEIRO🇧🇷"+"\n"+
  "⭕️ LIMITE DE ACESSO 1"+"\n"+
  "⭕️ CHAMADA VOIP ✔️"+"\n"+
  "⭕️ FRANQUIA ILIMITADA✔️"+"\n"+
  "⭕️ JOGOS ONLINES✔️"+"\n"+
  "⭕️ BANCOS✔️"+"\n"+
  "⭕️ STRIMER DE SERES E FILMES FHD✔️"+"\n"+
  "⭕️ PROIBIDO Torrent🚫"+"\n");
  responseSent = true;
}
else if (message.text == "3" ){
  message.reply(
    "-----> FAMÍLIA <-----"+"\n"+
    "    R$ 10,00 "+"\n"+
    "------------------"+"\n"+
  "⭕️ SERVIDOR BRASILEIRO🇧🇷"+"\n"+
  "⭕️ LIMITE DE ACESSO 1"+"\n"+
  "⭕️ CHAMADA VOIP ✔️"+"\n"+
  "⭕️ FRANQUIA ILIMITADA✔️"+"\n"+
  "⭕️ JOGOS ONLINES✔️"+"\n"+
  "⭕️ BANCOS✔️"+"\n"+
  "⭕️ STRIMER DE SERES E FILMES FHD✔️"+"\n"+
  "⭕️ PROIBIDO Torrent🚫"+"\n");
  responseSent = true;
}
else if (message.text == "T" ){
  message.reply(
    "Aula 1: seu link aqui "+"\n"+
    "Aula 2: seu link aqui "+"\n"+
    "Aula 3: seu link aqui "+"\n"+
    "Aula 4: seu link aqui "+"\n"+
    "Aula 5: seu link aqui "+"\n"
    );
    responseSent = true;
}
else if (message.text == "B" ){
  message.reply(
    "Play Store: seu link aqui "+"\n"+
    "Dropbox: seu link aqui "+"\n"
    );
    responseSent = true;
}
else if (message.text == "S" ){
  message.reply(
    "Suporte humano: seu link dou WhatsApp ou telegram"+"\n"
    )
  responseSent = true;
}
  else {
  message.reply(
    "=================== \n" +
    "*P ➡️  PLANOS*\n" +
    "*T ➡️  TUTORIAL*\n" +
    "*B ➡️  BAIXAR APP*\n" +
    "*S ➡️  SUPORTE*\n" +
    "\n```Digite a primeira letra```\n" +
    "\n===================");
    responseSent = true;
  }
    
  } else {
    responseSent = false;
  }
});

client.connect(" ./path-to-authh");

