import premierLeague from '../../public/images/premierleague.png';
import laliga from '../../public/images/laliga.png';
import seriea from '../../public/images/seriea.png';
import bundesliga from '../../public/images/bundesliga.png';
import ligue1 from '../../public/images/ligue1.png';
// import mls from '../../dist/images/mls-logo-png-transparent.png'

//Teams 
import realmadrid from '../../public/images/real-madrid.png';
import liverpool from '../../public/images/liverpool.png';
import mancity from '../../public/images/mancity.png';
import arsenal from '../../public/images/arsenal.png';
import manunited from '../../public/images/manchester-united.png';
import chelseas from '../../public/images/chelsea.png';
import barcelona from '../../public/images/barcelona.png';
import acmilan from '../../public/images/ac-milan.png';
import intermilan from '../../public/images/inter-milan.png';
import psg from '../../public/images/psg.png';
import bayern from '../../public/images/bayern.png';
export const apiKey = import.meta.env.VITE_API_KEY;
export const apiKeyAlt = import.meta.env.VITE_API_KEY_ALT;
export const leagues = [{
  id: '4328',
  idAlt: 'English%20Premier%20League',
  statsID: '39',
  name: 'Premier League',
  image: premierLeague
}, {
  id: '4335',
  idAlt: 'Spanish%20La%20Liga',
  statsID: '140',
  name: 'La Liga',
  image: laliga
}, {
  id: '4332',
  idAlt: 'Italian%20Serie%20A',
  statsID: '135',
  name: 'Serie A',
  image: seriea
}, {
  id: '4331',
  idAlt: 'German%20Bundesliga',
  statsID: '78',
  name: 'Bundesliga',
  image: bundesliga
}, {
  id: '4334',
  idAlt: 'French%20Ligue%201',
  statsID: '61',
  name: 'Ligue 1',
  image: ligue1
}];
export const menuTeams = [{
  image: realmadrid,
  name: "Real Madrid",
  id: '133738'
}, {
  image: liverpool,
  name: "Liverpool",
  id: '133602'
}, {
  image: bayern,
  name: "Bayern Munich",
  id: '133664'
}, {
  image: mancity,
  name: "Manchester City",
  id: '133613'
}, {
  image: intermilan,
  name: "Inter Milan",
  id: '133681'
}, {
  image: barcelona,
  name: "Barcelona",
  id: '133739'
}, {
  image: arsenal,
  name: "Arsenal",
  id: '133604'
}, {
  image: psg,
  name: "PSG",
  id: '133714'
}, {
  image: manunited,
  name: "Manchester United",
  id: '133612'
}, {
  image: acmilan,
  name: "AC Milan",
  id: '133667'
}, {
  image: chelseas,
  name: "Chelsea",
  id: '133610'
}];