export interface Member {
  name: string;
  role: string;
  bio: string;
  photo: string | null;
  instruments?: string[];
  founding?: boolean;
  variant?: number;
}

export interface Program {
  title: string;
  description: string;
  icon: string;
}

export interface Event {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  status: 'upcoming' | 'recurring' | 'planned';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  domain: string;
  locale: string;
  founded: number;
  logo: { src: string; alt: string };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  contact: {
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      full: string;
    };
  };
  social: {
    facebook: string;
  };
  brand: {
    primaryColor: string;
    accentColor: string;
    fontHeading: string;
    fontBody: string;
  };
  mission: string;
  vision: string;
  about: string;
  nav: { label: string; href: string }[];
  members: Member[];
  programs: Program[];
  events: Event[];
  timeline: TimelineItem[];
  values: { title: string; description: string; icon: string }[];
  leadership: { role: string; name: string }[];
  songs: { title: string; description: string }[];
  equipment: { name: string; count: string; icon: string }[];
}

export const siteConfig: SiteConfig = {
  name: 'Bhutanese Musical Group of Rochester',
  shortName: 'BMGR',
  tagline: 'Preserving and promoting Bhutanese Nepali music, arts, and culture',
  description:
    'The Bhutanese Musical Group of Rochester preserves and promotes Bhutanese Nepali music, arts, and culture by uniting our community through performance, education, and cultural celebration.',
  domain: 'https://bmgr.pages.dev',
  locale: 'en_US',
  founded: 2019,
  logo: { src: '/images/bmgr-logo.png', alt: 'BMGR Logo' },
  seo: {
    title: 'BMGR — Bhutanese Musical Group of Rochester',
    description:
      'The Bhutanese Musical Group of Rochester preserves and promotes Bhutanese Nepali music, arts, and culture through performance, education, and community events in Rochester, NY.',
    keywords: [
      'BMGR',
      'Bhutanese music',
      'Nepali music Rochester',
      'Bhutanese community Rochester',
      'Nepali cultural group',
      'harmonium classes Rochester',
      'Bhajan Sandhya',
      'Bhutanese American music',
    ],
    ogImage: '/images/bmgr-group.jpg',
  },
  contact: {
    email: 'bmgr.rochester@gmail.com',
    address: {
      street: '201 Scottsville West Henrietta Rd',
      city: 'West Henrietta',
      state: 'NY',
      zip: '14586',
      country: 'US',
      full: 'BCGR Community Hall, 201 Scottsville West Henrietta Rd, West Henrietta, NY 14586',
    },
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100063440693031',
  },
  brand: {
    primaryColor: '#c8332a',
    accentColor: '#d4941a',
    fontHeading: 'Playfair Display Variable',
    fontBody: 'Work Sans Variable',
  },
  mission:
    'The Bhutanese Musical Group of Rochester preserves and promotes Bhutanese Nepali music, arts, and culture by uniting our community through performance, education, and cultural celebration. We aim to pass our rich cultural legacy to future generations while fostering cultural understanding in our new home.',
  vision:
    'Our vision is to build a vibrant community where Bhutanese Nepali music, arts, and cultural identity thrive — connecting generations and sharing our unique heritage with the wider community.',
  about:
    'Founded in 2019, the Bhutanese Musical Group of Rochester (BMGR) brings together passionate musicians, singers, and cultural enthusiasts from the Bhutanese Nepali community in Rochester, New York. Our roots trace back to the Flamingo Band, co-founded in 1993 in Timai, Jhapa, Nepal. Today, BMGR organizes musical events, conducts harmonium classes, performs at community celebrations, and works to preserve and share our rich musical heritage with future generations.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Members', href: '/members/' },
    { label: 'Events', href: '/events/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
  ],
  members: [
    {
      name: 'Birkha Gurung',
      role: 'President & Program Director',
      bio: 'Birkha Gurung is one of the founding members and the President of BMGR since its establishment in 2019. He has successfully organized numerous musical and cultural programs within the community. He also serves as the President of the Bhakti Sangeet Team of UMDCC since 2013, where he promotes devotional music across multiple states. He completed the 3rd Year Diploma in Indian Classical Vocal in 2006 from Prayag Sangeet Samiti, Allahabad. With over 35 years of experience playing the harmonium, he has performed in various musical events. In 1993, he co-founded the Flamingo Band in Timai, Jhapa, Nepal, serving as band leader, vocalist, and keyboardist.',
      photo: null,
      instruments: ['Harmonium', 'Keyboard', 'Guitar'],
      founding: true,
      variant: 1,
    },
    {
      name: 'Lalit Gurung',
      role: 'Vocalist & Lead Percussionist',
      bio: 'Lalit Gurung is one of the founding members of BMGR and a versatile musician, serving as a vocalist and skilled percussionist. He plays dukki tabla, madal, dholak, naal, conga, and drum. With over 25 years of experience playing dukki tabla, he has performed in numerous musical and cultural programs both in the United States and Nepal. In 1993, Lalit was also one of the founding members of the Flamingo Band in Timai, Jhapa, Nepal.',
      photo: '/images/members/lalit-gurung.jpg',
      instruments: ['Tabla', 'Madal', 'Dholak', 'Conga', 'Drum'],
      founding: true,
    },
    {
      name: 'Ruban Rai',
      role: 'Vocalist & Marketing',
      bio: 'Ruban Rai is one of the founding members of BMGR and an active supporter of the group\'s musical and cultural initiatives. He works as a Patient Care Technician at Strong Memorial Hospital while pursuing higher education in Radiology. Ruban has actively participated in numerous musical and cultural events and serves as one of the vocalists of BMGR. He has played a vital role in organizing and managing various programs and events.',
      photo: '/images/members/ruban-rai.jpg',
      instruments: ['Vocals'],
      founding: true,
    },
    {
      name: 'Usha Gurung',
      role: 'Female Vocalist',
      bio: 'Usha Gurung is a versatile female vocalist of BMGR with a strong passion for singing Hindi and Nepali songs. She began her musical journey on TikTok in 2021, earning second place in a singing competition. She has performed duet and solo songs alongside legendary music composer Ranjeet Gajmer in Cincinnati and Harrisburg, and at a musical concert in Pittsburgh organized by the Bhutanese American Music Association. Usha has recorded two Nepali songs and continues working on more.',
      photo: '/images/members/usha-gurung.jpg',
      instruments: ['Vocals'],
    },
    {
      name: 'Harkapal Sanyak',
      role: 'Vocalist & Songwriter',
      bio: 'Harkapal Sanyak is widely recognized for his deep passion for Nepali music, art, and culture. He currently serves as President of the Kirat Community of Rochester and as a Kirat Priest. He is a member of the Board of Directors of BCGR and one of the vocalists of BMGR. With a love for songwriting, he has released several songs based on his own original compositions. He also creates vlogs on YouTube and Facebook documenting community events and cultural programs.',
      photo: '/images/members/harkapal.jpg',
      instruments: ['Vocals', 'Songwriting'],
    },
    {
      name: 'Dawa Tamang',
      role: 'Event Coordinator',
      bio: 'Dawa Tamang plays an important role in organizing and managing musical and cultural events, always ready to lend a helping hand with event setup and logistics. Dawa is widely appreciated for his willingness to serve and his consistent involvement in community activities. He currently serves as the Treasurer of the Universal Manav Dharma Rochester, NY Sakha. His strong commitment and passion for community initiatives drives the growth and success of BMGR.',
      photo: '/images/members/dawa-tamang.jpg',
      instruments: [],
    },
    {
      name: 'Kiran Pele',
      role: 'Arts & Drama Director',
      bio: 'Kiran Pele has a prolific career in theatre and film, having performed in over 100 stage dramas across Nepal and India. His film credits include notable Nepali movies such as Jhupadi Ko Jindagi, Tukriyeko Mutu, and Mission Nepal. He received acting training from legendary filmmaker Upendra Subba and journalism training from respected journalists. Honored with more than 25 letters of appreciation, Kiran has served as President of multiple community organizations and remains a committed BMGR contributor.',
      photo: '/images/KiranPeleGurung.jpg',
      instruments: ['Acting', 'Drama Direction'],
      variant: 2,
    },
    {
      name: 'Saraswati Adhikari',
      role: 'Treasurer',
      bio: 'Saraswati Adhikari works as a Health Home Care Manager and actively participates in initiatives promoting unity and cultural values. She teaches Nepali Literacy Classes, helping community members preserve their cultural heritage. She is engaged in community programs through BCGR and serves as Treasurer of BMGR. Saraswati enjoys singing songs and bhajans and continues making meaningful contributions to cultural connection and community engagement.',
      photo: null,
      instruments: ['Vocals'],
      variant: 3,
    },
    {
      name: 'Pooja Bhattarai',
      role: 'Member & Devotional Singer',
      bio: 'Pooja Bhattarai is a dedicated healthcare professional working as a Patient Care Technician at the University of Rochester. Beyond her professional role, she is actively involved in community service. She has a deep passion for music, particularly singing Nepali religious Aarati, Upasana, and Bhajans, which reflect her cultural and spiritual roots. A family-oriented individual, she believes in prioritizing family, community, and compassionate service.',
      photo: null,
      instruments: ['Vocals', 'Devotional Singing'],
      variant: 4,
    },
    {
      name: 'Tiyarong Gurung',
      role: 'Singer & Composer',
      bio: 'Tiyarong Gurung is a technology professional, singer, composer, and songwriter based in Rochester. With a background in mathematics, data analytics, and software development, he works in software validation and quality. He is a founding member of the Nepali band The Sparsha, contributing as singer, composer, and songwriter. The band\'s original song "Nindari" reflects his passion for music and dedication to promoting Nepali culture within the diaspora community.',
      photo: null,
      instruments: ['Vocals', 'Composition', 'Songwriting'],
      variant: 5,
    },
    {
      name: 'Yogesh Adhikari',
      role: 'Operations & Technology',
      bio: 'Handles technology, digital design, and operational support for BMGR. Responsible for the group\'s web presence, meeting documentation, and digital communications.',
      photo: null,
      instruments: [],
      variant: 1,
    },
    {
      name: 'Tek Acharya',
      role: 'Vocalist & Secretary',
      bio: 'Serves as Treasurer and Secretary for BMGR, managing finances, inventory, and supplies. Also contributes to marketing efforts and performs as a vocalist at group events.',
      photo: '/images/members/TekAcharya.jpg',
      instruments: ['Vocals'],
      variant: 2,
    },
    {
      name: 'Kumar Mishra',
      role: 'Lyricist & Member',
      bio: 'A dedicated member of BMGR who contributes original lyrics and songwriting to the group\'s growing musical repertoire.',
      photo: null,
      instruments: ['Lyrics', 'Songwriting'],
      variant: 3,
    },
  ],
  programs: [
    {
      title: 'Harmonium Classes',
      description:
        'Weekly harmonium lessons at the community center, open to all ages and skill levels. Currently running with 4-5 regular participants.',
      icon: 'lucide:music',
    },
    {
      title: 'Bhajan Sandhya',
      description:
        'Devotional song evenings bringing the community together through spiritual music and collective singing.',
      icon: 'lucide:heart',
    },
    {
      title: 'Cultural Performances',
      description:
        'Musical performances at community celebrations including Dashain, Tihar, Saraswati Puja, and other cultural festivals.',
      icon: 'lucide:mic-2',
    },
    {
      title: 'Youth Music Programs',
      description:
        "Building the next generation of musicians through kids' orchestra and children's choral group initiatives.",
      icon: 'lucide:users',
    },
    {
      title: 'Community Concerts',
      description:
        'Large-scale musical events featuring Nepali and folk songs, cultural dances, and community celebration.',
      icon: 'lucide:radio',
    },
    {
      title: 'Skills & Education',
      description:
        'Vocal and instrumental training workshops to help members improve their musical abilities and grow as artists.',
      icon: 'lucide:graduation-cap',
    },
  ],
  events: [
    {
      title: 'Grand Community Musical Event',
      date: 'June 2026',
      description:
        'A large musical and cultural program featuring Nepali and folk songs, cultural dances, drama performances, and volunteer appreciation ceremony.',
      status: 'planned',
    },
    {
      title: 'Dashain/Tihar BMGR Nite',
      date: 'Fall 2026',
      description:
        'Annual celebration featuring musical performances by BMGR members and community artists during the festive season.',
      status: 'planned',
    },
    {
      title: 'Weekly Harmonium Class',
      date: 'Every Week',
      time: 'At the Community Center',
      description:
        'Open to all skill levels. Learn harmonium in a supportive group environment.',
      status: 'recurring',
    },
  ],
  timeline: [
    {
      year: '1993',
      title: 'Flamingo Band Founded',
      description:
        'Birkha Gurung and Lalit Gurung co-founded the Flamingo Band in Timai, Jhapa, Nepal — planting the seeds of a lifelong musical journey.',
    },
    {
      year: '2000s',
      title: 'Journey to America',
      description:
        'Members resettled in the United States as Bhutanese refugees, carrying their love for music and culture to their new home in Rochester, NY.',
    },
    {
      year: '2019',
      title: 'BMGR Founded',
      description:
        'The Bhutanese Musical Group of Rochester was officially established, bringing together musicians and culture enthusiasts from the Bhutanese Nepali community.',
    },
    {
      year: '2020–23',
      title: 'Building Community',
      description:
        'BMGR organized musical events, Dashain/Tihar celebrations, harmonium classes, and performed at community gatherings across Rochester.',
    },
    {
      year: '2024',
      title: 'Growing Impact',
      description:
        'Successful Deusi-Bhailo fundraiser visiting 9 homes, expanded membership, and increased community visibility through performances at Saraswati Puja and other events.',
    },
    {
      year: '2026',
      title: 'Looking Ahead',
      description:
        'Pursuing official registration, EIN, and 501(c)(3) status. Planning a grand summer concert and youth music programs to ensure cultural continuity.',
    },
  ],
  values: [
    {
      title: 'Cultural Preservation',
      description:
        'Safeguarding and promoting Nepali music, arts, and traditions for future generations.',
      icon: 'lucide:shield',
    },
    {
      title: 'Community Unity',
      description:
        'Bringing people together through the universal language of music and shared cultural heritage.',
      icon: 'lucide:hand-heart',
    },
    {
      title: 'Education & Growth',
      description:
        'Nurturing musical talent through classes, workshops, and mentorship for all ages.',
      icon: 'lucide:book-open',
    },
    {
      title: 'Discipline & Commitment',
      description:
        'Maintaining high standards of attendance, rehearsal discipline, and respectful communication.',
      icon: 'lucide:target',
    },
    {
      title: 'Transparency',
      description:
        'Operating with financial and organizational openness, building trust within the community.',
      icon: 'lucide:eye',
    },
    {
      title: 'Sustainability',
      description:
        'Building a lasting foundation through fundraising, membership support, and community partnerships.',
      icon: 'lucide:sprout',
    },
  ],
  leadership: [
    { role: 'Program Director', name: 'Birkha Gurung' },
    { role: 'Treasurer & Secretary', name: 'Tek Acharya' },
    { role: 'Marketing & Outreach', name: 'Ruban Rai & Tek Acharya' },
  ],
  songs: [
    {
      title: 'Bandhan Ko Chino',
      description: 'A beloved Nepali song celebrating bonds and togetherness.',
    },
    {
      title: 'Himali Bhutan Sundar Thiyo',
      description:
        'A nostalgic melody remembering the beauty of Bhutan and homeland.',
    },
    {
      title: 'Akashaima Chil Ho Ki Besara',
      description: 'A traditional folk song encouraging group participation.',
    },
    {
      title: 'Devotional Bhajans',
      description:
        'Sacred devotional songs performed at Bhajan Sandhya evenings.',
    },
  ],
  equipment: [
    { name: 'Powered Speakers', count: '4', icon: 'lucide:speaker' },
    { name: 'Subwoofers', count: '2', icon: 'lucide:volume-2' },
    { name: 'Wireless Mics', count: '2', icon: 'lucide:mic' },
    { name: 'Instrument Mics', count: '2', icon: 'lucide:mic-2' },
    { name: 'Harmonium', count: '1', icon: 'lucide:music' },
    { name: 'Tabla', count: '1', icon: 'lucide:circle-dot' },
    { name: 'Madal', count: '1', icon: 'lucide:circle-dot' },
    { name: 'Shaker', count: '1', icon: 'lucide:music-2' },
  ],
};
