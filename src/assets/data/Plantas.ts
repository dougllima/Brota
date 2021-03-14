import Planta from '../../model/Planta';

export default [
  new Planta({
    nome: 'Alecrim Rosmarino',
    familia: 'Lamiaceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 12, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 15, unidade: 'dias' },
      fim: { valor: 25, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 80, unidade: 'dias' },
      fim: { valor: 100, unidade: 'dias' },
    },
    clima: { inicio: 16, fim: 35 },
    iluminacaoPorDia: { valor: 6, unidade: 'horas' },
  }),
  new Planta({
    nome: 'Alface Baby Leaf',
    familia: 'Asteraceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: { valor: 2, unidade: 'meses' },
      fim: { valor: 3, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 4, unidade: 'dias' },
      fim: { valor: 6, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 35, unidade: 'dias' },
      fim: { valor: 40, unidade: 'dias' },
    },
    clima: { inicio: 10, fim: 24 },
    iluminacaoPorDia: { valor: 5, unidade: 'horas' },
    obs: 'Ao colher, retire as folhas mais externas!',
  }),
  new Planta({
    nome: 'Camomila Húngara',
    familia: 'Asteraceae',
    origem: 'Europa e Norte da África',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 12, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 7, unidade: 'dias' },
      fim: { valor: 15, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 90, unidade: 'dias' },
      fim: { valor: 120, unidade: 'dias' },
    },
    clima: { inicio: 7, fim: 26 },
    iluminacaoPorDia: { valor: 6, unidade: 'horas' },
    obs: 'Ao colher, opte por flores mais jovens!',
  }),
  new Planta({
    nome: 'Cebolinha Verde',
    familia: 'Amarylidaceae',
    origem: 'China e Sibéria',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 12, unidade: 'meses' },
    },
    germinacao: {
      fim: { valor: 15, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 75, unidade: 'dias' },
      fim: { valor: 120, unidade: 'dias' },
    },
    clima: { inicio: 13, fim: 24 },
    iluminacaoPorDia: { valor: 4, unidade: 'horas' },
    obs: 'Cuidado com o vento!',
  }),
  new Planta({
    nome: 'Coentro Português',
    familia: 'Apiaceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 12, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 4, unidade: 'dias' },
      fim: { valor: 7, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 35, unidade: 'dias' },
    },
    clima: { inicio: 20, fim: 30 },
    iluminacaoPorDia: { valor: 4, unidade: 'horas' },
  }),
  new Planta({
    nome: 'Hortelã',
    familia: 'Lamiaceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 8, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 15, unidade: 'dias' },
      fim: { valor: 20, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 35, unidade: 'dias' },
    },
    clima: { inicio: 13, fim: 24 },
    iluminacaoPorDia: { valor: 6, unidade: 'horas' },
    obs: 'Proteja suas plantinhas do vento!',
  }),
  new Planta({
    nome: 'Manjericão Italiano',
    familia: 'Lamiaceae',
    origem: 'Ásia e África',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 8, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 5, unidade: 'dias' },
      fim: { valor: 15, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 60, unidade: 'dias' },
      fim: { valor: 90, unidade: 'dias' },
    },
    clima: { inicio: 18, fim: 30 },
    iluminacaoPorDia: { valor: 6, unidade: 'horas' },
    obs: 'Pode suas florzinhas!',
  }),
  new Planta({
    nome: 'Orégano Bravo-Europeu',
    familia: 'Lamiaceae',
    origem: 'Sul da Europa',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 12, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 5, unidade: 'dias' },
      fim: { valor: 15, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 60, unidade: 'dias' },
      fim: { valor: 70, unidade: 'dias' },
    },
    clima: { inicio: 4, fim: 32 },
    iluminacaoPorDia: { valor: 6, unidade: 'horas' },
    obs: 'Quanto mais sol, mais sabor!',
  }),
  new Planta({
    nome: 'Pimenta Calabresa',
    familia: 'Solanaceae',
    origem: 'Entre Bolívia e Peru',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 12, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 7, unidade: 'dias' },
      fim: { valor: 14, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 80, unidade: 'dias' },
      fim: { valor: 150, unidade: 'dias' },
    },
    clima: { inicio: 16, fim: 35 },
    iluminacaoPorDia: { valor: 6, unidade: 'horas' },
  }),
  new Planta({
    nome: 'Rúcula Rokita',
    familia: 'Brassicaceae',
    origem: 'Mediterrâneo e Ásia Ocidental',
    tempoDeVida: {
      inicio: { valor: 2, unidade: 'meses' },
      fim: { valor: 3, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 2, unidade: 'dias' },
      fim: { valor: 8, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 20, unidade: 'dias' },
      fim: { valor: 60, unidade: 'dias' },
    },
    clima: { inicio: 16, fim: 22 },
    iluminacaoPorDia: { valor: 5, unidade: 'horas' },
    obs: 'Quanto mais quente, mais amargas!',
  }),
  new Planta({
    nome: 'Salsa Hortense',
    familia: 'Apiaceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: { valor: 6, unidade: 'meses' },
      fim: { valor: 12, unidade: 'meses' },
    },
    germinacao: {
      inicio: { valor: 15, unidade: 'dias' },
      fim: { valor: 30, unidade: 'dias' },
    },
    colheita: {
      inicio: { valor: 45, unidade: 'dias' },
    },
    clima: { inicio: 13, fim: 24 },
    iluminacaoPorDia: { valor: { inicio: 4, fim: 6 }, unidade: 'horas' },
    obs: 'Pode suas florzinhas!',
  }),
];
