import moment from 'moment';
import Planta from '../../model/Planta';

export default [
  new Planta({
    nome: 'Alecrim Rosmarino',
    familia: 'Lamiaceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 12 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 15 }),
      fim: moment.duration({ days: 25 }),
    },
    colheita: {
      inicio: moment.duration({ days: 80 }),
      fim: moment.duration({ days: 100 }),
    },
    clima: { inicio: 16, fim: 35 },
    iluminacaoPorDia: moment.duration({ hours: 5 }),
  }),
  new Planta({
    nome: 'Alface Baby Leaf',
    familia: 'Asteraceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: moment.duration({ months: 2 }),
      fim: moment.duration({ months: 3 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 4 }),
      fim: moment.duration({ days: 6 }),
    },
    colheita: {
      inicio: moment.duration({ days: 35 }),
      fim: moment.duration({ days: 40 }),
    },
    clima: { inicio: 10, fim: 24 },
    iluminacaoPorDia: moment.duration({ hours: 5 }),
    obs: 'Ao colher, retire as folhas mais externas!',
  }),
  new Planta({
    nome: 'Camomila Húngara',
    familia: 'Asteraceae',
    origem: 'Europa e Norte da África',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 12 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 7 }),
      fim: moment.duration({ days: 15 }),
    },
    colheita: {
      inicio: moment.duration({ days: 90 }),
      fim: moment.duration({ days: 120 }),
    },
    clima: { inicio: 7, fim: 26 },
    iluminacaoPorDia: moment.duration({ hours: 6 }),
    obs: 'Ao colher, opte por flores mais jovens!',
  }),
  new Planta({
    nome: 'Cebolinha Verde',
    familia: 'Amarylidaceae',
    origem: 'China e Sibéria',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 12 }),
    },
    germinacao: {
      fim: moment.duration({ days: 15 }),
    },
    colheita: {
      inicio: moment.duration({ days: 75 }),
      fim: moment.duration({ days: 120 }),
    },
    clima: { inicio: 13, fim: 24 },
    iluminacaoPorDia: moment.duration({ hours: 4 }),
    obs: 'Cuidado com o vento!',
  }),
  new Planta({
    nome: 'Coentro Português',
    familia: 'Apiaceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 12 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 4 }),
      fim: moment.duration({ days: 7 }),
    },
    colheita: {
      inicio: moment.duration({ days: 35 }),
    },
    clima: { inicio: 20, fim: 30 },
    iluminacaoPorDia: moment.duration({ hours: 4 }),
  }),
  new Planta({
    nome: 'Hortelã',
    familia: 'Lamiaceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 8 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 15 }),
      fim: moment.duration({ days: 20 }),
    },
    colheita: {
      inicio: moment.duration({ days: 35 }),
    },
    clima: { inicio: 13, fim: 24 },
    iluminacaoPorDia: moment.duration({ hours: 6 }),
    obs: 'Proteja suas plantinhas do vento!',
  }),
  new Planta({
    nome: 'Manjericão Italiano',
    familia: 'Lamiaceae',
    origem: 'Ásia e África',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 8 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 5 }),
      fim: moment.duration({ days: 15 }),
    },
    colheita: {
      inicio: moment.duration({ days: 60 }),
      fim: moment.duration({ days: 90 }),
    },
    clima: { inicio: 18, fim: 30 },
    iluminacaoPorDia: moment.duration({ hours: 6 }),
    obs: 'Pode suas florzinhas!',
  }),
  new Planta({
    nome: 'Orégano Bravo-Europeu',
    familia: 'Lamiaceae',
    origem: 'Sul da Europa',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 12 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 5 }),
      fim: moment.duration({ days: 15 }),
    },
    colheita: {
      inicio: moment.duration({ days: 60 }),
      fim: moment.duration({ days: 70 }),
    },
    clima: { inicio: 4, fim: 32 },
    iluminacaoPorDia: moment.duration({ hours: 6 }),
    obs: 'Quanto mais sol, mais sabor!',
  }),
  new Planta({
    nome: 'Pimenta Calabresa',
    familia: 'Solanaceae',
    origem: 'Entre Bolívia e Peru',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 12 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 7 }),
      fim: moment.duration({ days: 14 }),
    },
    colheita: {
      inicio: moment.duration({ days: 80 }),
      fim: moment.duration({ days: 150 }),
    },
    clima: { inicio: 16, fim: 35 },
    iluminacaoPorDia: moment.duration({ hours: 6 }),
  }),
  new Planta({
    nome: 'Rúcula Rokita',
    familia: 'Brassicaceae',
    origem: 'Mediterrâneo e Ásia Ocidental',
    tempoDeVida: {
      inicio: moment.duration({ months: 2 }),
      fim: moment.duration({ months: 3 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 2 }),
      fim: moment.duration({ days: 8 }),
    },
    colheita: {
      inicio: moment.duration({ days: 20 }),
      fim: moment.duration({ days: 60 }),
    },
    clima: { inicio: 16, fim: 22 },
    iluminacaoPorDia: moment.duration({ hours: 5 }),
    obs: 'Quanto mais quente, mais amargas!',
  }),
  new Planta({
    nome: 'Salsa Hortense',
    familia: 'Apiaceae',
    origem: 'Mediterrâneo',
    tempoDeVida: {
      inicio: moment.duration({ months: 6 }),
      fim: moment.duration({ months: 12 }),
    },
    germinacao: {
      inicio: moment.duration({ days: 15 }),
      fim: moment.duration({ days: 30 }),
    },
    colheita: {
      inicio: moment.duration({ days: 45 }),
    },
    clima: { inicio: 13, fim: 24 },
    iluminacaoPorDia: moment.duration({ hours: 5 }),
    obs: 'Pode suas florzinhas!',
  }),
];
