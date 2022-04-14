const animais = require('./objanimaispai');


let onca = new animais("Chordata", "Mammalia", "Carnívoro", "Felídeos", "Américas", 60, "onça pintada");
let capivara = new animais("Chordata", "Mammalia", "Rodentia", "Hydrochoeridae", "Américas", 30, "capivara");


capivara.inicio(60);
capivara.sentirSede();
capivara.deslocamento(240);
capivara.beberAgua();
onca.inicio(480);
onca.sentirFome();
onca.deslocamento(capivara.posição);
onca.fim();