export type ChildTribute = {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  message: string[];
};

export const site = {
  title: "For Mum, With Love",
  description:
    "A Mother’s Day tribute — messages from your children, gathered in one place with love.",
};

export const hero = {
  kicker: "Mother’s Day",
  headline: "Every quiet sacrifice you made became the ground we grew on.",
};

export type HeroSlide = {
  src: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/hero/hero-01.png",
    alt: "A smiling couple in matching white traditional dress standing together in bright sunlight in front of a tall brown gate and clear blue sky.",
  },
  {
    src: "/hero/hero-02.png",
    alt: "Portrait of a woman with short silver hair and glasses, wearing an emerald and gold patterned dress with a wide collar, smiling in a sunlit garden with palm trees behind her.",
  },
  {
    src: "/hero/hero-03.png",
    alt: "A couple in colourful kente cloth standing close and smiling in front of a wrought-iron gate beneath a soft, clouded sky.",
  },
  {
    src: "/hero/hero-04.png",
    alt: "A warm group selfie of four family members smiling together under a corrugated roof in front of a peach-coloured wall.",
  },
  {
    src: "/hero/hero-05.png",
    alt: "A joyful group selfie of five family members in light clothing in front of salmon-pink walls and arched doorways.",
  },
  {
    src: "/hero/hero-06.png",
    alt: "A woman in vibrant woven kente fabric waves gently toward the camera with a bright gate and soft sky behind her.",
  },
  {
    src: "/hero/hero-07.png",
    alt: "Two women sitting side by side in a car, smiling warmly with soft daylight on their faces and the sunroof visible above.",
  },
];

export const intro = {
  heading: "To the woman who held the center",
  paragraphs: [
    "We have watched you carry days that were too heavy, soften rooms with your patience, and turn ordinary evenings into something that felt like home. You did not ask for applause. You asked if we had eaten. You asked if we were alright.",
    "We made this page as a small, serious thank-you — a place where your children can stand still long enough to tell you what you deserve to hear more often.",
  ],
};

export const children: ChildTribute[] = [
  {
    id: "belinda",
    name: "Belinda",
    role: "Your eldest",
    imageSrc: "/children/belinda.png",
    imageAlt:
      "Belinda in a full-length white dress with floral embroidery and sheer lace at the hem, smiling in front of a tall dark gate with gold finials and a peach wall under a bright sky.",
    message: [
      "Mum, I still remember you staying up folding laundry like it was a prayer — like care could be folded into piles.",
      "You taught me that strength isn’t loud. It’s showing up early, apologizing honestly, and making room when you are tired.",
      "If I am gentle with anyone in this world, I learned it first from watching you refuse to become hard.",
      "Thank you for being the dependable line on the horizon when everything else swayed.",
    ],
  },
  {
    id: "mog",
    name: "M O G",
    role: "Your child",
    imageSrc: "/children/mog.png",
    imageAlt:
      "M O G in a white button-down shirt and black trousers, standing centered on a sunlit two-lane road with blue sky, trees, and low buildings behind.",
    message: [
      "When I panic, my mind still searches for your voice — not to fix everything, just to steady the room.",
      "You gifted me curiosity without making me ashamed of tenderness. That changed the shape of my life.",
      "I think about how you learned new things late at night just so we could feel brave about trying.",
      "I love you beyond easy words — in the stubborn, daily kind of love that insists on remembering you accurately.",
    ],
  },
  {
    id: "ohenewaa",
    name: "Ohenewaa",
    role: "The middle child",
    imageSrc: "/children/ohenewaa.png",
    imageAlt:
      "Ohenewaa on an outdoor balcony in a dusty rose shirt and light blue jeans, long braids and beaded earrings, leaning near glass doors with city light behind her.",
    message: [
      "Sometimes I pretend I grew up fearless. The truth is: you practiced courage in front of us until courage felt normal.",
      "You defended our joy like it mattered — not as performance, but as nourishment.",
      "I used to roll my eyes when you reminded me to zip my coat. Now I recognize it as the sound of devotion.",
      "You are my favorite storyteller — not because the stories were perfect, because you made us feel remembered inside them.",
    ],
  },
  {
    id: "kojo",
    name: "Kojo",
    role: "The youngest",
    imageSrc: "/children/kojo.png",
    imageAlt:
      "Kojo in a white and green sporty shirt and jeans, smiling on red-and-white patterned patio tiles before a tall stone and stucco home with columns and balcony.",
    message: [
      "Mum, when the day sharpens, your calm is still how I remember what safety sounds like.",
      "You never made love a performance — you made it a practice, and we learned by watching.",
      "I used to roll my eyes at your caution; now I see it as devotion with a practical face.",
      "Thank you for cheering the small wins as loudly as the big ones — it taught me I was never invisible to you.",
    ],
  },
];

export const closing = {
  heading: "For all the breakfasts, bedtime stories, brave smiles, and second chances",
  paragraphs: [
    "If loving you could be weighed, it would be heavier than luggage, lighter than laughter, and exact in the places it meets your hands.",
    "Thank you for the years you softened your own sharp edges so we could discover ours safely. Thank you for the apologies that taught us repair. Thank you for the ordinary miracles — the lunches, the notes, the drive home when you must have been empty and still sang anyway.",
    "We carry you forward in instinct: how we apologize, how we listen, how we feed people when they are frightened.",
    "Whatever this life brings next, please know — you did not merely raise children. You raised a constellation around you.",
  ],
};

export const finale = {
  line: "With love, always — from the four corners of your world.",
  signoff: "Your children",
};
