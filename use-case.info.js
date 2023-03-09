const { Events } = require("./dist/bundle.js");

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const data = {
  apiKey: "api-sample",
  source: "desktop",
  salesChannel: "desktop",
  user: {
    id: "15078217",
    name: "Teste Linx Impulse",
    email: "teste@linx3.com",
    allowMailMarketing: true,
  },
  info: {
    pageViewId: "c648ac3b-478e-435f-92f7-809d01a2b0f9",
    shopbackCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
    percycleCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
    chaordicCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
    impulseSuiteCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
  },
  identity: {
    anonymousUserId: "anon-fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
    browserId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
    session: "1670871998688-0.43341696150224984",
  },
  url: "https://www.api-sample.com.br/",
};


const server = http.createServer((req, res) => {
  try {  
  Events.homeViewRequest(data).then((result) => {
    console.log(result);    
  });    
} catch (error) {
  console.log(error);
}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
