export const ABSTRACT_DATA = {
  candidate: "Cristián Vogel",
  position: "PhD in Music (Artistic Research) with a specialisation in experimental music drama",
  institution: "Lund University / Malmö Academy of Music",
  duration: "2027–2031",
  title: "The Mesh Cycle Project",
    subtitle: "Portfolio of Relevant Works",
  text: "The Mesh Cycle is an inquiry into music drama in the 21st century through the lens of emergent off-grid radio. It asks how we might relate artistically with de-centralised technologies. By treating open-source mesh networking over LoRa radios as a compositional partner, the project generates new knowledge about the aesthetics of constraint and the politics of data communication. It demonstrates that the fluidity of the network including errors, hops and decay are not simply failures, but can be encompassed within an off-grid musical drama. This research commits to developing highly original sound art on a decentralised medium, aiming to demonstrate how the LoRa protocol was applied to collectively establish a new music drama experience. This portfolio site represents a small selection from my practice, selected as having some overlaps with the doctorate project proposal."
};

export const PROJECTS = [
  {
    id: "p1",
    title: "Acousmatic Video Art",
    year: "2016",
    category: "Interdisciplinary",
    type: "Generative Performance",
    duration: "09:19",
    focusTags: ["Action Score", "Generative Combinatorics", "Acousmatic", "Symbolic", "Shortwave Sounds"],
    description: "Video artwork exploring action score and critical theory representation./n/n" + "Driven by acousmatic drift, stray radio waves, and slow-motion recordings, a tautological music machine simulates activity to an empty room. The human operator gets hungry, abandons the frame for a late-night grill house, and leaves the apparatus behind, fully capable of churning away its own existence without him.",
    chronology: {
      primary: "14 Aug 2016",
      year: "2016",
      label: "Video",
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
    duration: "04:51",
    focusTags: ["Original Score", "No-Input Mixer"],
    description: "A collaborative piece with Mexican installation artist Stefan Bruggerman, relying heavily on no-input mixing techniques as a conceptually aligned generative music system.",
    chronology: {
      primary: "19 Feb 2007",
      year: "2007",
      label: "Video",
      iso: "2007-02-19T04:35:34-08:00",
      source: "https://www.youtube.com/watch?v=eLegrc_mdnI"
    },
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/eLegrc_mdnI",
      poster: "https://i.ytimg.com/vi/eLegrc_mdnI/hqdefault.jpg",
      caption: "Exhibition Documentation"
    }
  },
  {
    id: "p7",
    title: "The Siege of Mariupol",
    year: "2024",
    category: "Composition",
    type: "Acousmatic Composition",
    duration: "05:46",
    focusTags: ["Acousmatic", "Competition", "Electroacoustic"],
    description: "Acousmatic composition awarded joint first prize in the Acousmatic category of the 25th International Composition Competitions 2024, presented by via nova.",
    chronology: {
      primary: "26 Jun 2024",
      year: "2024",
      label: "Award",
      iso: "2024-06-26",
      source: "https://via-nova-ev.de/?p=4227"
    },
    media: {
      type: "audio",
      url: "/audio/The%20Siege%20Of%20Mariupol-5m40s-CompetitionWinningEdit.opus",
      caption: "Competition edit"
    }
  },
  {
    id: "p8",
    title: "Etude (Cristian Vogel remix)",
    year: "2017",
    category: "Composition",
    type: "Electroacoustic Remix",
    duration: "05:33",
    focusTags: ["Electroacoustic", "Remix", "Signal Feedback", "Network Delay", "Codec Filtering"],
    description: "A remix composed from source material by Danish electronic music pioneer Else Marie Pade, commissioned for a DaCapo tribute CD. The work treats Pade's 1961 Etude as an early investigation into audio signal feedback, likely made with tape machines and filtering in the feedback path. Vogel translated that idea into a contemporary networked process: sounds from Pade's original were streamed from a Copenhagen studio computer, received on a phone after travelling through the web, then routed back into the mixer. The web's natural latency became the primary delay time, while compression codecs introduced a present-day form of subtractive filtering. The final composition includes the artefacts and timing instabilities of that process.",
    chronology: {
      primary: "09 Mar 2017",
      year: "2017",
      label: "Release",
      iso: "2017-03-09",
      source: "https://cristianvogel.bandcamp.com/track/etude-cristian-vogel-remix"
    },
    media: {
      type: "bandcamp",
      trackId: "33258256",
      url: "https://cristianvogel.bandcamp.com/track/etude-cristian-vogel-remix",
      caption: "Bandcamp stream"
    }
  },
  {
    id: "p9",
    title: "Messagesacomin",
    year: "2002",
    category: "Composition",
    type: "Collaborative Electronic Composition",
    duration: "05:27",
    focusTags: ["Super_Collider", "Jamie Lidell", "Morse Code", "Electronic Funk", "Instrumental Solo"],
    description: "A highlight from Cristian Vogel's collaboration with Jamie Lidell as Super_Collider. Messagesacomin folds experimental electronic production into a sharp funk framework, with Lidell's vocal presence and the duo's unstable rhythmic language pushing against each other. The track is also notable for featuring what may be one of the only instrumental solos built from Morse code, turning encoded communication into a melodic and performative gesture.",
    chronology: {
      primary: "24 Jun 2002",
      year: "2002",
      label: "Release",
      iso: "2002-06-24",
      source: "https://www.forcedexposure.com/Catalog/RRR.001EP.html"
    },
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/-kHvY_cklBM",
      poster: "https://i.ytimg.com/vi/-kHvY_cklBM/hqdefault.jpg",
      caption: "Official video"
    }
  },
  {
    id: "p10",
    title: "Computational Linguistics Sonification",
    year: "2010",
    category: "Practice Based Research",
    type: "Network Art / Creative Coding",
    focusTags: ["Network Art", "Creative Coding", "Sonification", "Corpus Exploration", "Computational Linguistics"],
    description: "Examples of pre-LLM computational linguistic research toward generative acousmatic sonification. Tokens are extracted from generated, scraped, or recombined texts, then ordered into live lookup structures that pull sounds through the Freesound database API. The resulting systems use sonification as a means of exploring text beyond linguistic interpretation, turning corpus navigation, semantic drift, and database retrieval into live acousmatic material.",
    media: {
      type: "multi-work",
      works: [
        {
          title: "Sonified news headlines",
          url: "https://www.youtube.com/watch?v=p3nfs9Y6c5E",
          date: "2010",
          metaLabel: "network sonification study",
          metaIso: "2010",
          image: "https://i.ytimg.com/vi/p3nfs9Y6c5E/hqdefault.jpg"
        },
        {
          title: "Sonified Haiku",
          url: "https://www.youtube.com/watch?v=t9QHZnlB01I",
          date: "2010",
          metaLabel: "computational poetics study",
          metaIso: "2010",
          image: "https://i.ytimg.com/vi/t9QHZnlB01I/hqdefault.jpg"
        },
        {
          title: "Drifting Sense Net demo",
          url: "https://www.youtube.com/watch?v=EVnzy4SJqHw",
          date: "2009",
          metaLabel: "semantic drift demo (RiTa library)",
          metaIso: "2009",
          image: "https://i.ytimg.com/vi/EVnzy4SJqHw/hqdefault.jpg"
        }
      ],
      caption: "Open the YouTube examples documenting token-driven Freesound API sonification."
    }
  },
  {
    id: "p14",
    title: "Ekometic: The Future Is Listening",
    year: "2019",
    category: "Practice Based Research",
    type: "Conference Talk / Hacker Culture",
    duration: "starts at 04:20",
    focusTags: ["BornHack", "Hacker Conference", "Listening Systems", "Practice Research", "Network Culture"],
    description: "BornHack 2019 talk on Ekometic and listening systems, positioned here as practice based research in a hacker conference context. The embedded video starts at 04:20, matching the supplied excerpt point and foregrounding the discussion most relevant to networked listening, creative technical practice, and how sound systems can be treated as research instruments.",
    chronology: {
      primary: "2019",
      year: "2019",
      label: "Talk",
      iso: "2019",
      source: "https://www.youtube.com/watch?v=ZSZFAXJsrOE"
    },
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/ZSZFAXJsrOE",
      startSeconds: 260,
      caption: "BornHack 2019 / starts at 04:20"
    }
  },
  {
    id: "p15",
    title: "How Do We Listen to Data?",
    year: "2023",
    category: "Practice Based Research",
    type: "Artistic Research / Data Sonification",
    focusTags: ["Nye Veje", "Data Sonification", "Data-Driven Music", "AI Models", "Story In Blood"],
    description: "Nye Veje artistic research scholarship from the Danish Composers Society, awarded for a deep dive into data-driven music and data sonification. The research asked how sound can describe complex data models, how abstract data structures can generate new meanings, and how listeners might interpret those meanings through the production of sound. One result was Story In Blood, an audiovisual work made from 600 blood tests tracking a patient overcoming leukemia, using medical data as the basis for data-driven music and video.",
    chronology: {
      primary: "25 Jan 2023",
      year: "2023",
      label: "Grant",
      iso: "2023-01-25",
      source: "https://www.komponistforeningen.dk/seks-modtagere-af-legatet-nye-veje-er-fundet"
    },
    media: {
      type: "vimeo",
      id: "1196769001",
      poster: "/other-stills/StoryInBlood.png",
      autoplay: false,
      caption: "Story In Blood / data-driven audiovisual work from 600 blood tests"
    }
  },
  {
    id: "p11",
    title: "Steak House",
    year: "2005",
    category: "Selected Composition for Dance",
    type: "Realtime Generative Dance Score",
    focusTags: ["Realtime Score", "Generative Music", "G2 Modular", "MIDI Control", "Choreographic Modulation"],
    description: "Composition for Gilles Jobin's Steak House, focused here on the custom adapted realtime music generator built for the production. The score was generated by a recycled vintage radio box customised as an internal MIDI-controlled G2 Modular engine with processed turntable material. Rather than functioning as playback, the system generated the entire score through realtime patches, with a small number of choreographically integrated parametric modulation points that let the musical system lock into the stage action.",
    chronology: {
      primary: "03 Mar 2005",
      year: "2005",
      label: "Website",
      iso: "2005-03-03",
      source: "https://www.gillesjobin.com/en/creation-en/steak-house/"
    },
    media: {
      type: "image",
      url: "https://www.gillesjobin.com/wp-content/uploads/2020/07/hd300_sh15isabellemeister-840x473.jpg",
      caption: "Steak House production image / Cie Gilles Jobin"
    }
  },
  {
    id: "p12",
    title: "Text to speech",
    year: "2008",
    category: "Selected Composition for Dance",
    type: "Dance Score with Realtime Speech Synthesis",
    focusTags: ["Text-to-Speech", "Realtime Speech Synthesis", "Dance Score", "Synthetic Voices", "Computation and Choreography"],
    description: "Composition for Gilles Jobin's Text to speech, focused here on the use of an early form of text-to-speech as a generative scoring material. The work used realtime speech synthesis to generate aspects of the score, bringing synthetic voices, fictionalised news stories, and choreographic timing into the same compositional field. The result treats machine speech not as narration alone, but as a live sonic material situated between semantic language, signal, rhythm, and staged movement.",
    chronology: {
      primary: "06 Mar 2008",
      year: "2008",
      label: "Website",
      iso: "2008-03-06",
      source: "https://www.gillesjobin.com/en/creation-en/text-to-speech/"
    },
    media: {
      type: "image",
      url: "https://www.gillesjobin.com/wp-content/uploads/2020/07/web72_2008_03058f.jpg",
      caption: "Text to speech production image / Cie Gilles Jobin"
    }
  },
  {
    id: "p5",
    title: "Agnete & The Merman",
    year: "2017",
    category: "Audio Visual",
    type: "Feature Length Music Film Documenting Immersive Music Theatre Production",
    duration: "54:12",
    focusTags: ["Feature Film", "Experimental Dance", "Immersive Sound", "High Order Ambisonics", "Surround Sound"],
    description: "A 55 minute film adaptation of Cristian Vogel's spatial sound and live theatre production, commissioned by Aarhus European Capital of Culture 2017, performed on 24 speakers and filmed by The Automatic Message during the Danish production.",
    notes: [
      {
        label: "ZKM inSonic2017",
        venue: "ZKM Karlsruhe / Kubus",
        location: "Karlsruhe",
        date: "Dec 2017",
        text: "Presented at ZKM Karlsruhe as part of inSonic2017: Immersive Future in a fixed-media version for video and multi-channel audio.",
        source: "https://zkm.de/en/event/2017/12/insonic2017-concerts"
      },
      {
        label: "Strom 2020",
        venue: "Berliner Philharmonie",
        location: "Berlin",
        date: "Feb 2020",
        text: "Adapted as a live concert performance for Strom Festival at the Berliner Philharmonie.",
        source: "https://groove.de/2020/02/21/strom-festival-wer-nicht-wagt-der-nicht-gewinnt/"
      }
    ],
    chronology: {
      primary: "2017",
      year: "2017",
      label: "Website",
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
        src: "/generated-loops/agnete-merman/loop-01.mp4",
        poster: "/generated-loops/agnete-merman/poster-01.jpg",
        alt: "Agnete & The Merman 15 second loop at 06:36",
        timecode: "06:36",
        audio: true
      },
      {
        src: "/generated-loops/agnete-merman/loop-02.mp4",
        poster: "/generated-loops/agnete-merman/poster-02.jpg",
        alt: "Agnete & The Merman 15 second loop at 09:44",
        timecode: "09:44",
        audio: true
      },
      {
        src: "/generated-loops/agnete-merman/loop-03.mp4",
        poster: "/generated-loops/agnete-merman/poster-03.jpg",
        alt: "Agnete & The Merman 15 second loop at 25:25",
        timecode: "25:25",
        audio: true
      },
      {
        src: "/generated-loops/agnete-merman/loop-04.mp4",
        poster: "/generated-loops/agnete-merman/poster-04.jpg",
        alt: "Agnete & The Merman 15 second loop at 34:49",
        timecode: "34:49",
        audio: true
      },
      {
        src: "/generated-loops/agnete-merman/loop-05.mp4",
        poster: "/generated-loops/agnete-merman/poster-05.jpg",
        alt: "Agnete & The Merman 15 second loop at 41:05",
        timecode: "41:05",
        audio: true
      },
      {
        src: "/generated-loops/agnete-merman/loop-06.mp4",
        poster: "/generated-loops/agnete-merman/poster-06.jpg",
        alt: "Agnete & The Merman 15 second loop at 44:13",
        timecode: "44:13",
        audio: true
      }
    ]
  },
  {
    id: "p13",
    title: "Requiem for an Age",
    year: "2021",
    category: "Audio Visual",
    type: "Film / Audio Visual Sound Design",
    duration: "starts at 06:29",
    focusTags: ["Political Questions", "Radio Artefacts", "Sound Design", "Voice", "Documentary Fiction"],
    description: "Collaboration with Anja Behrens. For this portfolio the video opens at 06:29, where the sound design is most relevant to The Mesh Cycle: political questions are carried through voice, transmission residue, and radio-like artefacts, with the score treating unstable broadcast textures as dramaturgical material. Cristian Vogel is credited for music, sound design, and editing.",
    chronology: {
      primary: "27 May - 05 Jun 2021",
      year: "2021",
      label: "Website",
      iso: "2021-05-27",
      endIso: "2021-06-05",
      source: "https://anjabehrens.com/portfolio-item/requiem-for-an-age/"
    },
    media: {
      type: "vimeo",
      id: "553049295",
      hash: "22b751fb84",
      startSeconds: 389,
      poster: "https://anjabehrens.com/wp-content/uploads/2021/05/Requiem-pic3-300dpi-1-1030x579-1-e1630654417691.jpg",
      caption: "Vimeo excerpt starts at 06:29"
    }
  },
  {
    id: "p3",
    title: "further_in (Live at BrokenSonics2020)",
    year: "2020",
    category: "Realtime",
    type: "Generative Performance",
    duration: "21:58",
    focusTags: ["Generative", "Geo-Location", "Sound Score"],
    description: "Commissioned by BrokenSonics, London during pandemic lock-down. Live code streaming performance, generative sound score with events driven by geo-locative data.",
    chronology: {
      primary: "04 Jul 2020",
      year: "2020",
      label: "Video",
      iso: "2020-07-04T12:06:53-07:00",
      source: "https://www.youtube.com/watch?v=tYQxM1MP6AI"
    },
    media: {
      type: "youtube",
      url: "https://www.youtube.com/embed/tYQxM1MP6AI",
      caption: "further_in live performance screen capture"
    },
    loops: [
      {
        src: "/generated-loops/further-in-extra/loop-01.mp4",
        poster: "/generated-loops/further-in-extra/poster-01.jpg",
        alt: "further_in live performance 15 second loop at 04:45",
        timecode: "04:45",
        audio: true
      },
      {
        src: "/generated-loops/further-in/loop-01.mp4",
        poster: "/generated-loops/further-in/poster-01.jpg",
        alt: "further_in live performance 15 second loop at 08:26",
        timecode: "08:26",
        audio: true
      },
      {
        src: "/generated-loops/further-in/loop-02.mp4",
        poster: "/generated-loops/further-in/poster-02.jpg",
        alt: "further_in live performance 15 second loop at 11:40",
        timecode: "11:40",
        audio: true
      },
      {
        src: "/generated-loops/further-in-extra/loop-02.mp4",
        poster: "/generated-loops/further-in-extra/poster-02.jpg",
        alt: "further_in live performance 15 second loop at 12:30",
        timecode: "12:30",
        audio: true
      },
      {
        src: "/generated-loops/further-in/loop-03.mp4",
        poster: "/generated-loops/further-in/poster-03.jpg",
        alt: "further_in live performance 15 second loop at 13:17",
        timecode: "13:17",
        audio: true
      },
      {
        src: "/generated-loops/further-in/loop-04.mp4",
        poster: "/generated-loops/further-in/poster-04.jpg",
        alt: "further_in live performance 15 second loop at 18:09",
        timecode: "18:09",
        audio: true
      }
    ]
  },
  {
    id: "p6",
    title: "Inglorious Images",
    year: "2026",
    category: "Realtime",
    type: "Live Performance",
    duration: "1:07:05",
    focusTags: ["Realtime", "Live Electronics", "Performance", "Pandemic"],
    description: "Live code streaming performance commissioned by HEARding Cats Collective (St.Louis, USA) during pandemic. Connects live electronic music practice with creative code. Realtime parametric sound synthesis and fixed-field world-building simultaneously driven by real geo-locative data.",
    chronology: {
      primary: "2020",
      year: "2020",
      label: "Website",
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
      },
      {
        src: "/generated-loops/hearding-cats/loop-06.mp4",
        poster: "/generated-loops/hearding-cats/poster-06.jpg",
        alt: "Cristian Vogel - Inglorious Images 15 second loop at 01:02:25",
        timecode: "01:02:25",
        audio: true
      }
    ]
  },
    // pod walks
  {
    id: "p4",
    title: "Locative Audio Series",
    year: "2021",
    category: "Interdisciplinary",
    type: "Locative Media / Spatial Sound",
    focusTags: ["Locative Audio", "Public Space", "GPS Tracking"],
    description: "A number of geo-located audio works designed to be experienced by listeners moving through specific physical environments. The Age of Wire and String exists on Echoes as a geolocated podwalk, but because that centralised platform is paywalled, this portfolio foregrounds a listenable special version made for broadcast on Kiosk Radio, Brussels, as part of Outsiders: Endless Process.",
    chronology: {
      primary: "02 Oct - 17 Nov 2021",
      year: "2021",
      label: "Website",
      iso: "2021-10-02T10:32:22.275Z",
      endIso: "2021-11-17T14:55:48.422Z",
      source: "https://explore.echoes.xyz"
    },
    media: {
      type: "soundcloud",
      trackUrl: "https://api.soundcloud.com/tracks/2125804401",
      url: "https://soundcloud.com/kioskradio/outsiders-endless-process-w-4?in=cristian-vogel/sets/my-sessions",
      caption: "The Age of Wire and String / special Kiosk Radio broadcast version"
    },
    links: {
      type: "multi-work",
      works: [
        {
          title: "The Age of Wire and String / Echoes podwalk",
          url: "https://explore.echoes.xyz/collections/R9zVoH1A0Y2hDZ4g",
          date: "02 Oct 2021",
          metaLabel: "geolocated version / centralised platform",
          metaIso: "2021-10-02T10:32:22.275Z",
          metaCreated: "2021-09-13T07:25:14.437Z",
          image: "/other-stills/age_of_wire_and_string.png"
        },
        {
          title: "Becoming Bird (DK)",
          url: "https://explore.echoes.xyz/collections/AJEL0JE4EuaMGV95",
          date: "17 Nov 2021",
          metaLabel: "first published",
          metaIso: "2021-11-17T14:55:48.422Z",
          metaCreated: "2021-11-15T18:52:45.902Z",
          image: "/other-stills/becomingbird.gif"
        }
      ],
      caption: "Supporting links to the geolocated Echoes versions and related locative audio environments."
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
    // nothing
  p2: [
    "technical constraints",
    "qualitative sound gestures",
    "error as material",
    "critical theory",
      "collaboration",
    "self-referential",
    "music drama"
  ],
    // siege
  p7: [
      "world-memorialising",
    "acousmatic",
    "music drama",
    "qualitative sound gestures",
    "composition",
    "electroacoustic",
      "neural synthesis"
  ],
    // Further_in
  p3: [
    "situated interaction",
    "local geography",
      "world-modulating",
      "creative coding",
    "digital nomadic",
    "network art",
    "real-time / live-stream",
    "decentralised direction",
      "pandemic art",
      "network art",
      "geo-data driven"
  ],
    // Inglorious Images
  p6: [
    "real-time",
    "parametric synthesis",
      "world-modulating",
    "creative coding",
    "situated performance",
      "pandemic art",
      "real-time / live-stream",
      "digital nomadic",
      "network art",
      "geo-data driven"
  ],
    // Pod walks
  p4: [
      "music drama",
      "situated story telling",
      "participatory",
    "non-sovereign restrictions",
    "world-inhabiting",
    "geo-locative",
    "prompt based",
      "streaming",
      "sensor-driven",
      "spatial composition"
  ],
    // Agnete & The Merman
  p5: [
      "multichannel music drama",
    "restorative mythology",
    "minimal viable staging",
    "dramaturgical events",
    "abstract story-telling",
      "film-making",
      "collaboration",
    "world-building",
      "spatial score",
      "custom engineering",
      "local networking protocols",
      "extended documentation"
  ],
    // Requiem for an Age
  p13: [
      "political questions",
      "radio artefacts",
      "sound design",
      "transmission residue",
      "voice as evidence",
      "documentary fiction",
      "broadcast texture",
      "dramaturgical listening",
      "signal instability"
  ],
    // Etude
    p8: [
        "network latency as effect",
        "concept mapping",
        "embracing artefacts",
        "restorative arc",
        "network art",
        "band filtering"
    ],
    // Messagesacomin
    p9: [
        "coded communication",
        "morse code solo",
        "collaborative composition",
        "voice as signal",
        "electronic funk",
        "encoded melody"
    ],
    // Computational Linguistic Sonification Studies
    p10: [
        "network art",
        "creative coding",
        "meaning extraction",
        "text sonification",
        "corpus exploration",
        "pre-LLM computational linguistics",
        "Freesound API",
        "generative acousmatic sonification",
        "non-linguistic interpretation",
        "semantic drift",
        "sense networks"
    ],
    // Ekometic: The Future Is Listening
    p14: [
        "hacker conference",
        "listening systems",
        "network culture",
        "practice based research",
        "sound as research instrument",
        "creative technical practice",
        "BornHack",
        "Ekometic"
    ],
    // How Do We Listen to Data?
    p15: [
        "artistic research scholarship",
        "Danish Composers Society",
        "data-driven music",
        "data sonification",
        "human centric",
        "recovery arc",
        "music drama",
        "collaboration"
    ],
    // Steak House
    p11: [
        "realtime dance score",
        "custom instrument design",
        "vintage radio interface",
        "G2 Modular",
        "MIDI controlled composition",
        "processed turntable",
        "parametric modulation",
        "choreographic integration"
    ],
    // Text to speech
    p12: [
        "text-to-speech",
        "realtime speech synthesis",
        "synthetic voices",
        "internet text",
        "machine speech",
        "semantic sound",
        "dance score",
        "computation and choreography"
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
    title: "Mu-Psi and Music Space: Insights into a 21st Century Music Practice",
    publication: "Unconventional Computing, Arts, Philosophy / World Scientific",
    year: "2022",
    url: "https://www.worldscientific.com/doi/10.1142/9789811257155_0013",
    excerpt: "A World Scientific book chapter in the WSPC Book Series in Unconventional Computing, published in Unconventional Computing, Arts, Philosophy. The chapter frames Mu-Psi and music space as a way to articulate contemporary music practice across composition, computation, and artistic thought."
  },
  {
    id: "w2",
    title: "Donkey Bridges: On Creative and Technical Process Behind \"Eselsbrücke\"",
    publication: "Hz #18 / FYLKINGEN'S NET JOURNAL",
    year: "2013",
    url: "https://www.hz-journal.org/n18/vogel.html",
    excerpt: "An essay documenting the compositional and technical process behind Eselsbrücke, connecting prime number sieves, additive synthesis, mapping, and the responsibility of decision-making in computer music."
  }
];

export const COLLABORATORS = [

];
