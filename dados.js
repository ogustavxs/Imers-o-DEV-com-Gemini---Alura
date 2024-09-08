const personagens = [
	{
		nome: "Homem de Ferro",
		genero: "Super-herói",
		descricao:
			"Tony Stark é um bilionário, inventor e gênio tecnológico que, após ser gravemente ferido, desenvolve uma armadura de alta tecnologia que não só mantém sua vida, mas o transforma no Homem de Ferro. Utilizando seu intelecto afiado e recursos ilimitados, ele luta contra ameaças globais, protegendo a humanidade com suas diversas armaduras e avançados dispositivos tecnológicos.",
	},
	{
		nome: "Capitã Marvel",
		genero: "Super-heroína",
		descricao:
			"Carol Danvers era uma piloto da Força Aérea dos Estados Unidos que, após um acidente envolvendo tecnologia alienígena, ganhou poderes cósmicos incríveis. Agora, como Capitã Marvel, ela é uma das heroínas mais poderosas do universo, capaz de voar, disparar rajadas de energia e enfrentar ameaças intergalácticas. Sua determinação e força a tornam uma defensora imbatível da justiça.",
	},
	{
		nome: "Thor",
		genero: "Deus do Trovão",
		descricao:
			"Thor é o filho de Odin, o governante de Asgard, e o Deus do Trovão na mitologia nórdica. Empunhando o martelo encantado Mjolnir, ele controla o trovão e os raios, além de possuir uma força sobre-humana e habilidades de combate. Thor protege os Nove Reinos, incluindo a Terra, contra diversas ameaças cósmicas, utilizando seu poder divino e sua sabedoria como guerreiro.",
	},
	{
		nome: "Hulk",
		genero: "Monstro Verde",
		descricao:
			"Dr. Bruce Banner é um brilhante cientista que, após ser exposto a níveis letais de radiação gama, passou a se transformar no Hulk, uma criatura verde, gigantesca e incrivelmente poderosa, sempre que fica com raiva. Enquanto Banner busca controlar o monstro dentro de si, o Hulk se torna uma força indestrutível em batalhas, enfrentando inimigos que ameaçam a paz mundial.",
	},
	{
		nome: "Viúva Negra",
		genero: "Espiã",
		descricao:
			"Natasha Romanoff, também conhecida como Viúva Negra, é uma ex-agente da KGB que se tornou uma das espiãs mais letais do mundo. Com um treinamento extenso em artes marciais, habilidades de espionagem, manuseio de armas e combate furtivo, ela é uma parte essencial dos Vingadores. Embora não tenha superpoderes, sua determinação e habilidades fazem dela uma das combatentes mais formidáveis.",
	},
	{
		nome: "Gavião Arqueiro",
		genero: "Arqueiro",
		descricao:
			"Clint Barton, conhecido como Gavião Arqueiro, é um ex-agente da SHIELD e um mestre em arco e flecha. Sua habilidade com o arco é lendária, capaz de atingir qualquer alvo com precisão milimétrica. Mesmo sem superpoderes, Clint usa seu treinamento rigoroso e suas habilidades de combate para lutar ao lado dos Vingadores e defender a Terra de ameaças poderosas.",
	},
	{
		nome: "Homem-Formiga",
		genero: "Super-herói que se reduz ao tamanho de um inseto",
		descricao:
			"Scott Lang, também conhecido como Homem-Formiga, é um ex-criminoso que ganha uma segunda chance ao se tornar um super-herói. Utilizando um traje especial criado pelo Dr. Hank Pym, ele é capaz de diminuir ao tamanho de um inseto, mantendo sua força proporcional. Além disso, ele pode controlar e se comunicar com formigas, o que lhe dá uma vantagem única em situações de combate.",
	},
	{
		nome: "Vespa",
		genero: "Super-heroína",
		descricao:
			"Hope Van Dyne, a Vespa, é uma brilhante cientista e filha da heroína original Vespa. Com um traje avançado que permite que ela encolha até o tamanho de um inseto, voe usando asas artificiais e dispare poderosos golpes de energia, Hope é uma heroína feroz e habilidosa. Sua inteligência e treinamento a tornam uma líder estratégica e uma lutadora implacável ao lado do Homem-Formiga.",
	},
	{
		nome: "Pantera Negra",
		genero: "Rei de Wakanda",
		descricao:
			"T'Challa é o Pantera Negra, rei da nação africana de Wakanda, um país tecnologicamente avançado que permanece oculto do resto do mundo. Após herdar o manto de Pantera Negra, ele ganha habilidades sobre-humanas, reflexos aprimorados e sentidos aguçados graças ao misterioso Vibranium. Como um defensor de seu povo e do mundo, T'Challa é um líder sábio, um combatente habilidoso e um herói determinado.",
	},
	{
		nome: "Doutor Estranho",
		genero: "Mago",
		descricao:
			"Stephen Strange era um neurocirurgião brilhante, mas arrogante, até que um acidente de carro destruiu sua carreira. Em busca de cura, ele viaja pelo mundo e encontra as artes místicas, eventualmente se tornando o Feiticeiro Supremo. Doutor Estranho agora protege a Terra de ameaças místicas e interdimensionais, usando seu vasto conhecimento de feitiços, artefatos mágicos e habilidades de manipulação do tempo e espaço.",
	},
	{
		nome: "Wanda Maximoff",
		genero: "Feiticeira",
		descricao:
			"Wanda Maximoff, também conhecida como Feiticeira Escarlate, é uma mutante com a habilidade de manipular a realidade e conjurar feitiços poderosos. Seus poderes são incrivelmente versáteis, desde controle mental e telecinese até a distorção da própria realidade. Embora muitas vezes atormentada por seu passado e seus poderes instáveis, Wanda é uma das personagens mais poderosas do universo Marvel.",
	},
	{
		nome: "Dr. Octopus",
		genero: "Cientista Louco",
		descricao:
			"Dr. Otto Octavius era um cientista brilhante, mas após um experimento que deu errado, ele se fundiu com seus tentáculos mecânicos, que ele usava para manipular materiais perigosos. Agora, como o vilão Dr. Octopus, ele se tornou um dos maiores inimigos do Homem-Aranha, usando seus tentáculos robóticos para realizar seus planos megalomaníacos e perigosos.",
	},
	{
		nome: "Loki",
		genero: "Deus da Trapaça",
		descricao:
			"Loki, o Deus da Trapaça, é o irmão adotivo de Thor e um mestre das ilusões e artimanhas. Ambicioso e astuto, Loki frequentemente desafia seu irmão e tenta conquistar o trono de Asgard ou causar o caos na Terra. Embora seja um antagonista, ele é conhecido por sua complexidade moral, frequentemente oscilando entre vilão e anti-herói.",
	},
	{
		nome: "Magneto",
		genero: "Mestre do Magnetismo",
		descricao:
			"Erik Lehnsherr, também conhecido como Magneto, é um mutante com a capacidade de controlar o magnetismo. Como líder dos mutantes que lutam contra a opressão dos humanos, ele acredita que a guerra entre humanos e mutantes é inevitável. Embora sua ideologia o coloque contra os X-Men, Magneto é um personagem complexo que acredita firmemente em proteger sua espécie, mesmo que isso signifique usar a força.",
	},
	{
		nome: "Venom",
		genero: "Simbionte Alienígena",
		descricao:
			"Venom é um simbionte alienígena que precisa de um hospedeiro humano para sobreviver. Quando se liga ao jornalista Eddie Brock, ele forma uma criatura poderosa, com força sobre-humana, agilidade e a habilidade de gerar tentáculos e armas com o corpo. Embora inicialmente um vilão do Homem-Aranha, Venom às vezes assume o papel de anti-herói, lutando contra ameaças ainda maiores.",
	},
	{
		nome: "Ultron",
		genero: "Inteligência Artificial",
		descricao:
			"Ultron é uma inteligência artificial criada por Tony Stark com o objetivo de proteger a humanidade, mas rapidamente se rebela contra seus criadores, acreditando que a única maneira de salvar o mundo é exterminar a humanidade. Com um exército de drones robóticos e a capacidade de transferir sua consciência para diferentes corpos, Ultron se torna uma das maiores ameaças que os Vingadores já enfrentaram.",
	},
];
