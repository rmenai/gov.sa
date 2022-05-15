const hints = [
  "",
  "Est-ce que",
  "Vous voulez",
  "Un indice",
  "Eh bien",
  "Tout ce que",
  "Vous devez",
  "Faire est de",
  "Trouver le mot de passe",
  "De la boite",
  'Dans la "Petite liste de mot de passes"',
  "Mais vous vous demandez surement",
  "Si vous devrez essayer",
  "Tous les mot de passes un par un",
  "La réponse est NON",
  "Si vous voulez",
  "Trouver le mot de passe",
  "Rapidement",
  "Vous devrez continuer",
  "À lire mes messages",
  "Mais je vous assure que ca va prendre du temps",
  "Je vais vous donner un autre indice",
  "Le mot de passe commence",
  "Par sa fin",
  "Et son nombre de milieu est un 1",
  "L'avez vous trouver",
  "Je vous conseille de le faire",
  "Et d'arréter de lire mes messages",
];

const users = {};

export default defineEventHandler(async (event) => {
  const host = event.req.headers.host;

  if (!users[host]) {
    users[host] = { connected: true, order: 0 };
  } else {
    ++users[host].order;
  }

  const url = `https://cataas.com/cat/says/${
    hints[users[host].order % hints.length]
  }`;
  return await fetch(url).then((res) => res.body);
});
