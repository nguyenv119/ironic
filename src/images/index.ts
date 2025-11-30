import type { StaticImageData } from "next/image";
import suscat from './suscat.png';
import cooldog from './cooldog.png';
import dexter from './dexter.png';
import invincible_kid from './invincible_kid.png';
import strawberry_head from './strawberry_head.png';
import lockedin_cat from './lockedin_cat.png';
import sad_clown from './sad_clown.png';
import sideeye from './sideeye.png';
import funny_lebron from './funny_lebron.png';
import kevinhart from './kevinhart.png';
import rickross from './rickross.png';
import lebron_kyrie from './lebron_kyrie.png';
import cute_cat from './cute_cat.png';
import tom_holland from './tom_holland.jpg';
import sad_cat from './sad_cat.png';
import willem_dafoe from './willem_dafoe.jpg';
import curry_moon from './curry_moon.jpg';
import elon from './elon.png';
import elon_smoking from './elon_smoking.png';
import mamdani_cute from './mamdani_cute.png';
import sad_cat_2 from './sad_cat_2.png';
import praying from './praying.png';
import sus_kid from './sus_kid.jpg';
import crying_lebron from './crying_lebron.jpg';
import emoji_flower from './emoji_flower.jpg';
import guy_crying from './guy_crying.jpg';
import guy_praying from './guy_praying.jpg';
import curry_universe from './curry_universe.jpg';
import tiger from './tiger.jpeg';
import sad_cat_3 from './sad_cat.jpg';
import super_crying from './super_crying.jpg';
import sad_squidward from './sad_squidward.jpg';
import charlie_kirk_girly from './charlie_kirk_girly.jpg';
import squirrel_evaporating from './squirrel_evaporating.jpg';
import charlie_kirk_rowley from './charlie_kirk_rowley.jpg';
import tai_lung_computer from './tai_lung_computer.jpg';
import big_leagues from './big_leagues.jpg';

export const memeImages: MemeImage[] = [
  { id: "sus_cat", label: "Sus Cat", src: suscat },
  { id: "cool_dog", label: "Cool Dog", src: cooldog },
  { id: "dexter", label: "Dexter", src: dexter },
  { id: "invincible_kid", label: "Invincible Kid", src: invincible_kid },
  { id: "strawberry_head", label: "Strawberry Head", src: strawberry_head },
  { id: "lockedin_cat", label: "Locked in Cat", src: lockedin_cat },
  { id: "sad_clown", label: "Sad Clwon", src: sad_clown },
  { id: "sideeye", label: "Sideeye", src: sideeye },
  { id: "funny_lebron", label: "Funny Lebron", src: funny_lebron },
  { id: "kevinhart", label: "Kevin Hart", src: kevinhart },
  { id: "rickross", label: "Rick Ross", src: rickross },
  { id: "lebron_kyrie", label: "Lebron Kyrie", src: lebron_kyrie },
  { id: "cute_cat", label: "Lebron Kyrie", src: cute_cat },
  { id: "tom_holland", label: "Tom Holland", src: tom_holland },
  { id: "sad_cat", label: "Sad Cat", src: sad_cat },
  { id: "willem_dafoe", label: "Willem Dafoe", src: willem_dafoe },
  { id: "curry_moon", label: "Curry Moon", src: curry_moon },
  { id: "elon", label: "Elon", src: elon },
  { id: "elon_smoking", label: "Elon Smoking", src: elon_smoking },
  { id: "mamdani_cute", label: "Mamdani Cute", src: mamdani_cute },
  { id: "sad_cat_2", label: "Sad Cat 2", src: sad_cat_2 },
  { id: "praying", label: "Praying", src: praying },
  { id: "sus_kid", label: "Sus Kid", src: sus_kid },
  { id: "crying_lebron", label: "Crying Lebron", src: crying_lebron },
  { id: "emoji_flower", label: "Emoji Flower", src: emoji_flower },
  { id: "guy_crying", label: "Guy Crying", src: guy_crying },
  { id: "guy_praying", label: "Guy Praying", src: guy_praying },
  { id: "curry_universe", label: "Curry Universe", src: curry_universe },
  { id: "tiger", label: "Tiger", src: tiger },
  { id: "sad_cat_3", label: "Sad Cat 3", src: sad_cat_3 },
  { id: "super_crying", label: "Super Crying", src: super_crying },
  { id: "sad_squidward", label: "Sad Squidward", src: sad_squidward },
  { id: "charlie_kirk_girly", label: "Charlie Kirk Girly", src: charlie_kirk_girly },
  { id: "squirrel_evaporating", label: "Squirrel Evaporating", src: squirrel_evaporating },
  { id: "charlie_kirk_rowley", label: "Charlie Kirk Rowley", src: charlie_kirk_rowley },
  { id: "tai_lung_computer", label: "Tai Lung Computer", src: tai_lung_computer },
  { id: "big_leagues", label: "Big Leagues", src: big_leagues },
];

export type MemeImage = {
  id: string;
  label: string;
  src: StaticImageData;
};
