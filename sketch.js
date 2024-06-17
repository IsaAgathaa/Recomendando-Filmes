let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("15");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background(85,7,114);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao (idade, gostaDeFantasia, gostaDeAventura);
  fill(color(255,255,255));
  textAlign(CENTER, CENTER)
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura){
  if (idade >= 10) {
    if(idade >= 14) {
      return "Donzela"
    } else {
      if(idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Jumanji";
        } else {
          return "Crepúsculo"
        }
      } else {
      if(gostaDeFantasia) {
        return  "Coraline"
      } else {
        return "Terra dos sonhos";
      }
      }
   }
  } else {
    if(gostaDeFantasia) {
    return "Harry potter e a câmera secreta";
    } else {
      return "Tinker Bell";
    }
  }
}