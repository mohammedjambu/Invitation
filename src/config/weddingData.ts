export interface EventItem {
  id: string;
  title: string;
  subTitle?: string;
  date: string;
  time: string;
  venue: string;
  dressCode?: string;
  description: string;
  iconName: string;
  isMainEvent?: boolean;
}

export interface WeddingConfig {
  brideName: string;
  brideFullName: string;
  groomName: string;
  groomFullName: string;
  monogram: string;
  weddingDateISO: string; // ISO 8601 string for countdown
  dateDisplay: string;
  hijriDateDisplay: string; // Marriage Hijri Date
  hijriNikahDateDisplay?: string; // Nikah Hijri Date
  bismillahArabic: string;
  nikahHeadlineArabic: string;
  nikahStatement: string;
  nikahLocation?: string;
  nikahShortBlessing?: string;
  nikahImage?: string;
  formalInvitationText: string;
  groomParents: string;
  brideParents: string;
  events: EventItem[];
  venue: {
    name: string;
    subHeading: string;
    address: string;
    city: string;
    mapUrl: string;
    googleMapsEmbedUrl: string;
    image: string;
  };
  quranicVerse: {
    arabic: string;
    english: string;
    reference: string;
  };
  closingMessage: string;
  closingFamilies: string;
  coupleStory: {
    title: string;
    quote: string;
    text: string;
    image: string;
  };
  backgroundAudio: {
    title: string;
    movie: string;
    src: string;
    startOffsetSeconds: number;
  };
}

export const weddingData: WeddingConfig = {
  brideName: "Mariya",
  brideFullName: "Mariya Sodawala",
  groomName: "Nuruddin",
  groomFullName: "Nuruddin Kagalwala",
  monogram: "M & N",
  weddingDateISO: "2026-11-27T17:30:00+04:00",
  dateDisplay: "Friday, 27th November 2026",
  hijriDateDisplay: "18th Jamadal Ukhra 1448H",
  hijriNikahDateDisplay: "7th Shawwal al Mukarram 1447H",
  bismillahArabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
  nikahHeadlineArabic: "بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
  nikahStatement: "Nikah performed on the hands of Moula TUS",
  nikahLocation: "Khandala",
  nikahShortBlessing: "A blessed beginning, under the Du'a and Raza Mubarak of Moula TUS.",
  nikahImage: "/images/nikah.jpeg",
  formalInvitationText: "Together with their families, Mr. & Mrs. Mustafa Kagal and Mr. & Mrs. Zulfiqar Sodawala cordially request the honor of your gracious presence to celebrate the Wedding of their beloved children.",
  groomParents: "Son of Mr. Mustafa & Mrs. Fatema Kagalwala",
  brideParents: "Daughter of Mr. Zulfiqar & Mrs. Mariyam Sodawala",
  events: [
    {
      id: "shitabi",
      title: "Shitabi",
      subTitle: "Sacred Congregation & Morning Gratitude",
      date: "Tuesday, 24th November 2026",
      time: "Morning",
      venue: "Husaini Hall, Sujai Bagh",
      description: "",
      iconName: "Sun"
    },
    {
      id: "mehendi",
      title: "Mehendi",
      subTitle: "Henna Artistry & Joyful Melodies",
      date: "Wednesday, 25th November 2026",
      time: "Morning",
      venue: "AD Tower, Godi Road",
      description: "",
      iconName: "Flower2"
    },
    {
      id: "mosalu",
      title: "Mosalu",
      subTitle: "Maternal Blessings & Family Gathering",
      date: "Thursday, 26th November 2026",
      time: "Afternoon",
      venue: "JiruWala Farmhouse",
      description: "",
      iconName: "Users"
    },
    {
      id: "zafaf-jaman",
      title: "Zafaf Jaman",
      subTitle: "Bride's Main Celebration",
      date: "Friday, 27th November 2026",
      time: "Dinner",
      venue: "Batul Hall",
      description: "",
      iconName: "Crown",
      isMainEvent: true
    },
    {
      id: "nikah-jaman",
      title: "Nikah Jaman",
      subTitle: "Grand Reception & Festive Dinner",
      date: "Saturday, 28th November 2026",
      time: "Dinner",
      venue: "Ahmedabad",
      description: "",
      iconName: "Moon"
    }
  ],
  venue: {
    name: "Sodawala Palace",
    subHeading: "A Sanctuary of Architectural Grandeur & Elegance",
    address: "Sujai bagh, Godhra road",
    city: "Dahod",
    mapUrl: "https://maps.app.goo.gl/HpcLrSi1vN98bjao9",
    googleMapsEmbedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.713939272613!2d74.24617577476457!3d22.830475123470535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39611d00658c9d85%3A0x538400b1c33dff6a!2sSujai%20baug!5e1!3m2!1sen!2sin!4v1786994261938!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin`,
    image: "/images/venue_architecture.jpg"
  },
  quranicVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    english: "“And among His Signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has placed love and mercy between your hearts.”",
    reference: "Surah Ar-Rum 30:21"
  },
  closingMessage: "We eagerly await the pleasure of your company, your blessings, and your prayers as we embark on this sacred journey of togetherness.",
  closingFamilies: "The Sodawala Family",
  coupleStory: {
    title: "A Covenant of Devotion & Grace",
    quote: "“Two souls united under divine grace, embarking on a lifelong path of faith, love, and harmony.”",
    text: "Bound by shared heritage, deep affection, and the divine blessings of Moula TUS, Mariya & Nuruddin invite you to share in the beginning of their new chapter.",
    image: "/images/couple.jpeg"
  },
  backgroundAudio: {
    title: "Kudmayi",
    movie: "Rocky Aur Rani Kii Prem Kahaani",
    src: "/audio/kudmayi.mp3",
    startOffsetSeconds: 16
  }
};
