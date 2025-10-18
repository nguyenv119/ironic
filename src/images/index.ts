import type { StaticImageData } from "next/image";
import suscat from './suscat.png';
import cooldog from './cooldog.png';
import dexter from './dexter.png';
import invincible_kid from './invincible_kid.png';
import strawberry_head from './strawberry_head.png';
import lockedin_cat from './lockedin_cat.png';
import sad_clown from './sad_clown.png';
import rickross from './rickross.png';
import lebron_kyrie from './lebron_kyrie.png';
import kevinhart from './kevinhart.png';

export const memeImages: MemeImage[] = [
  { id: "sus_cat", label: "Sus Cat", src: suscat },
  { id: "cool_dog", label: "Cool Dog", src: cooldog },
  { id: "dexter", label: "Dexter", src: dexter },
  { id: "invincible_kid", label: "Invincible Kid", src: invincible_kid },
  { id: "strawberry_head", label: "Strawberry Head", src: strawberry_head },
  { id: "lockedin_cat", label: "Locked in Cat", src: lockedin_cat },
  { id: "sad_clown", label: "Sad Clwon", src: sad_clown },
  { id: "kevinhart", label: "Kevin Hart", src: kevinhart },
  { id: "rickross", label: "Rick Ross", src: rickross },
  { id: "lebron_kyrie", label: "Lebron Kyrie", src: lebron_kyrie },
];

export type MemeImage = {
  id: string;
  label: string;
  src: StaticImageData;
};
