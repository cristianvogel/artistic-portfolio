export const ABSTRACT_DATA = {
  candidate: "Cristián Vogel",
  position: "PhD in Music (Artistic Research) with a specialisation in experimental music drama",
  institution: "Lund University / Malmö Academy of Music",
  duration: "2027–2031",
  title: "The Mesh Cycle Project",
    subtitle: "Portfolio of Relevant Works",
  text: "The Mesh Cycle is an inquiry into music drama in the 21st century through the lens of emergent off-grid radio. It asks how we might relate artistically with de-centralised technologies. By treating open-source mesh networking over LoRa radios as a compositional partner, the project generates new knowledge about the aesthetics of constraint and the politics of data communication. It demonstrates that the fluidity of the network including errors, hops and decay are not simply failures, but can be encompassed within an off-grid musical drama. This research commits to developing highly original sound art on a decentralised medium, aiming to demonstrate how the LoRa protocol was applied to collectively establish a new music drama experience."
};

export const PROJECTS = [
  {
    id: "p1",
    title: "Acousmatic Action",
    year: "2016",
    category: "Interdisciplinary",
    type: "Generative Performance",
    focusTags: ["Action Score", "Generative Combinatorics", "Acousmatic", "Symbolic", "Shortwave Sounds"],
    description: "Video artwork exploring action score and critical theory representation./n/n" + "Driven by acousmatic drift, stray radio waves, and slow-motion recordings, a tautological music machine simulates activity to an empty room. The human operator gets hungry, abandons the frame for a late-night grill house, and leaves the apparatus behind, fully capable of churning away its own existence without him.",
    chronology: {
      primary: "14 Aug 2016",
      year: "2016",
      label: "YouTube upload",
      iso: "2016-08-14T06:21:52-07:00",
      source: "https://www.youtube.com/watch?v=g25OYPpf1kg"
    },
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/g25OYPpf1kg",
      caption: "Video"
    }
  },
  {
    id: "p2",
    title: "Stefan Bruggerman Collaboration",
    year: "2007",
    category: "Composition",
    type: "Installation / Sound Art",
    focusTags: ["Original Score", "No-Input Mixer"],
    description: "A collaborative piece with Mexican installation artist Stefan Bruggerman, relying heavily on no-input mixing techniques.",
    chronology: {
      primary: "19 Feb 2007",
      year: "2007",
      label: "YouTube upload",
      iso: "2007-02-19T04:35:34-08:00",
      source: "https://www.youtube.com/watch?v=eLegrc_mdnI"
    },
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/eLegrc_mdnI",
      caption: "Exhibition Documentation"
    }
  },
  {
    id: "p5",
    title: "Agnete & The Merman",
    year: "2017",
    category: "Major Works",
    type: "Feature Length Experimental Dance Film",
    focusTags: ["Feature Film", "Experimental Dance", "Immersive Sound", "High Order Ambisonics", "Surround Sound"],
    description: "A 55 minute film adaptation of Cristian Vogel's spatial sound and live theatre production, commissioned by Aarhus European Capital of Culture 2017 and filmed by The Automatic Message during the Danish production.",
    chronology: {
      primary: "2017",
      year: "2017",
      label: "Partner page metadata",
      iso: "2017",
      source: "https://www.theautomaticmessage.com/work/agnete-the-merman"
    },
    media: {
      type: "vimeo",
      id: "534604452",
      hash: "b8559b5d39",
      poster: "https://images.squarespace-cdn.com/content/v1/6000fbd74b905b61b3fe1094/1610689038725-YX0XMIY0BYCEH6310554/Agnete%26TheMerman-7524v2.jpg",
      caption: "Feature film hosted by The Automatic Message on Vimeo"
    },
    loops: [
      {
        src: "/agnete-loops/loop-01.mp4",
        poster: "/agnete-stills/still-01.jpg",
        alt: "Agnete & The Merman 15 second loop at 05:40",
        timecode: "05:40"
      },
      {
        src: "/agnete-loops/loop-02.mp4",
        poster: "/agnete-stills/still-02.jpg",
        alt: "Agnete & The Merman 15 second loop at 14:20",
        timecode: "14:20"
      },
      {
        src: "/agnete-loops/loop-03.mp4",
        poster: "/agnete-stills/still-04.jpg",
        alt: "Agnete & The Merman 15 second loop at 36:45",
        timecode: "36:45"
      },
      {
        src: "/agnete-loops/loop-04.mp4",
        poster: "/agnete-stills/still-05.jpg",
        alt: "Agnete & The Merman 15 second loop at 48:30",
        timecode: "48:30"
      }
    ]
  },
  {
    id: "p3",
    title: "further_in (Live at BrokenSonics2020)",
    year: "2020",
    category: "Realtime",
    type: "Generative Performance",
    focusTags: ["Generative", "Geo-Location", "Sound Score"],
    description: "A live broadcast performance functioning as a geo-location based generative sound score. Mapping coordinate data is actively tracked and translated into musical instructions.",
    chronology: {
      primary: "04 Jul 2020",
      year: "2020",
      label: "YouTube upload",
      iso: "2020-07-04T12:06:53-07:00",
      source: "https://www.youtube.com/watch?v=tYQxM1MP6AI"
    },
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/tYQxM1MP6AI",
      caption: "further_in live performance screen capture"
    }
  },
  {
    id: "p6",
    title: "Inglorious Images live at HEARding Cats Collective",
    year: "2026",
    category: "Realtime",
    type: "Live Performance",
    focusTags: ["Realtime", "Live Electronics", "Performance", "Pandemic"],
    description: "Live code streaming performance commissioned by HEARding Cats Collective (St.Louis, USA) during pandemic. Connects live electronic music practice with creative code. Realtime parametric sound synthesis and fixed-field world-building simultaneously driven by real geo-locative data.",
    chronology: {
      primary: "2020",
      year: "2020",
      label: "HEARding Cats Collective page",
      iso: "2020",
      source: "https://www.heardingcatscollective.com/cristian-vogel"
    },
    media: {
      type: "multi-work",
      works: [
        {
          title: "HEARding Cats Collective page",
          url: "https://www.heardingcatscollective.com/cristian-vogel",
          date: "2020",
          metaLabel: "external reference",
          metaIso: "2020",
          image: "/other-stills/ingloriousImages.webp"
        }
      ],
      caption: "Open the HEARding Cats Collective page for event and artist context."
    },
    loops: [
      {
        src: "/generated-loops/hearding-cats/loop-01.mp4",
        poster: "/generated-loops/hearding-cats/poster-01.jpg",
        alt: "Cristian Vogel - Inglorious Images 15 second loop at 02:38",
        timecode: "02:38",
        audio: true
      },
      {
        src: "/generated-loops/hearding-cats/loop-02.mp4",
        poster: "/generated-loops/hearding-cats/poster-02.jpg",
        alt: "Cristian Vogel - Inglorious Images 15 second loop at 18:41",
        timecode: "18:41",
        audio: true
      },
      {
        src: "/generated-loops/hearding-cats/loop-03.mp4",
        poster: "/generated-loops/hearding-cats/poster-03.jpg",
        alt: "Cristian Vogel - Inglorious Images 15 second loop at 30:04",
        timecode: "30:04",
        audio: true
      },
      {
        src: "/generated-loops/hearding-cats/loop-04.mp4",
        poster: "/generated-loops/hearding-cats/poster-04.jpg",
        alt: "Cristian Vogel - Inglorious Images 15 second loop at 45:47",
        timecode: "45:47",
        audio: true
      },
      {
        src: "/generated-loops/hearding-cats/loop-05.mp4",
        poster: "/generated-loops/hearding-cats/poster-05.jpg",
        alt: "Cristian Vogel - Inglorious Images 15 second loop at 59:30",
        timecode: "59:30",
        audio: true
      }
    ]
  },
  {
    id: "p4",
    title: "Locative Audio Series",
    year: "2021",
    category: "Interdisciplinary",
    type: "Locative Media / Spatial Sound",
    focusTags: ["Locative Audio", "Public Space", "GPS Tracking"],
    description: "A series of three geo-located audio works hosted on the Echoes platform, designed to be experienced by listeners moving through specific physical environments.",
    chronology: {
      primary: "02 Oct - 17 Nov 2021",
      year: "2021",
      label: "Echoes first published",
      iso: "2021-10-02T10:32:22.275Z",
      endIso: "2021-11-17T14:55:48.422Z",
      source: "https://explore.echoes.xyz"
    },
    media: {
      type: "multi-work",
      works: [
        {
          title: "The Age of Wire and String",
          url: "https://explore.echoes.xyz/collections/R9zVoH1A0Y2hDZ4g",
          date: "02 Oct 2021",
          metaLabel: "first published",
          metaIso: "2021-10-02T10:32:22.275Z",
          metaCreated: "2021-09-13T07:25:14.437Z",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Becoming Bird (DK)",
          url: "https://explore.echoes.xyz/collections/AJEL0JE4EuaMGV95",
          date: "17 Nov 2021",
          metaLabel: "first published",
          metaIso: "2021-11-17T14:55:48.422Z",
          metaCreated: "2021-11-15T18:52:45.902Z",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Collection III (TBD)",
          url: "#",
          image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800"
        }
      ],
      caption: "Select an artwork to open the locative audio environments via Echoes."
    }
  }
];

export const THESIS_TAGS_BY_PROJECT = {
  p1: [
    "acousmatic",
    "decay time",
    "electromechanical",
    "local installation",
    "critical theory",
    "performative"
  ],
  p2: [
    "technical constraints",
    "qualitative sound gestures",
    "opacity",
    "abstraction",
    "interference",
    "congestion",
    "dramaturgical events"
  ],
  p3: [
    "situated interaction",
    "local geography",
    "nomadic performance",
    "network field",
    "real-time",
    "decentralised direction",
    "call for action"
  ],
    // Inglorious Images
  p6: [
    "real-time",
    "parametric synthesis",
    "experimental programming",
    "situated performance",
      "live stream",
    "networked context"
  ],
    // Pod walks
  p4: [
      "music drama",
      "situated story telling",
    "centralised",
    "platform controlled",
    "non-sovereign",
      "heteronomy",
    "world-inhabiting",
    "geo-locative",
    "action based",
      "streaming",
      "sensor-driven",
      "spatial composition"
  ],
  p5: [
    "music drama",
    "restorative arc",
    "listening to its conditions",
    "dramaturgical events",
    "sound design",
    "world-building",
    "resilient music"
  ]
};

export const YOUTUBE_INFO_BY_PROJECT = {
  p1: {
    label: "more info",
    publishedDescription: [
      "Tying helium party balloons to motorised studio faders for no particular reason. The party is over, the social is collapsing, and the debris of a particularly indulgent picnic lies all over the place. Is there more fun to be had, or is it time to step outside?",
      "Driven by acousmatic drift, stray radio waves, and slow-motion recordings, a tautological music machine simulates activity to an empty room. The human operator gets hungry, abandons the frame for a late-night grill house, and leaves the apparatus behind, fully capable of churning away its own existence without him.",
      "Mechanical redundancy with a large helping of basic exhaustion."
    ],
    metadata: {
      title: "\"What are you doing after the Orgy?\" (after Jean Baudrillard)",
      channel: "Cristián Vogel",
      category: "Comedy",
      uploaded: "14 Aug 2016",
      duration: "09:19",
      views: "20",
      comments: "archive",
      source: "https://www.youtube.com/watch?v=g25OYPpf1kg"
    }
  },
  p2: {
    label: "more info",
    publishedDescription: [
      "The fifth part of a trilogy: a rare short film by Stefan Bruggemann."
    ],
    metadata: {
      title: "A PRODUCTION OF NOTHING",
      channel: "monkeyartbcn",
      category: "Film & Animation",
      uploaded: "19 Feb 2007",
      duration: "04:51",
      views: "2,265",
      comments: "archive",
      source: "https://www.youtube.com/watch?v=eLegrc_mdnI"
    }
  },
  p3: {
    label: "more info",
    publishedDescription: [
      "No YouTube description was available from the public watch metadata for this upload."
    ],
    metadata: {
      title: "Cristian Vogel live @ BrokenSonics2020, further_in 28/06/20",
      channel: "further_in",
      category: "People & Blogs",
      uploaded: "04 Jul 2020",
      duration: "21:58",
      views: "241",
      comments: "archive",
      source: "https://www.youtube.com/watch?v=tYQxM1MP6AI"
    }
  }
};

export const WRITINGS = [
  {
    id: "w1",
    title: "Aesthetics of Constraint in Low-Bandwidth Networks",
    publication: "Journal of Artistic Research (Pending)",
    year: "2025",
    excerpt: "When the primary goal of a network is minimal power consumption and extended range, bandwidth becomes a severely limited resource. This paper examines how these strict technical limitations can be co-opted as an aesthetic framework for contemporary music drama..."
  },
  {
    id: "w2",
    title: "The Politics of Data Communication in Sound Art",
    publication: "Proceedings of the International Computer Music Conference",
    year: "2024",
    excerpt: "To rely on cellular networks or commercial cloud services for the distribution of art is to accept a hidden layer of corporate infrastructure. Building independent LoRa meshes offers a model for localized, sovereign communication..."
  }
];

export const COLLABORATORS = [
  { name: "Dr. Elena Rostova", role: "Network Engineering Consultant", link: "#" },
  { name: "Malmö Experimental Percussion Ensemble", role: "Performance", link: "#" },
  { name: "Studio XYZ", role: "Hardware Fabrication", link: "#" },
  { name: "Lund University Radio Society", role: "Testing and Infrastructure", link: "#" }
];
