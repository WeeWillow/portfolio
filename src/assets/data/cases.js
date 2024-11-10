export const cases = [
  {
    id: 1,
    metadata: {
      project_status: 'completed',
      tags: ['mobile first'],
      project_duration: null,
      version: '1.0.0',
      date_completed: null,
    },
    details: {
      title: 'Den blå festival',
      roles: [
        {
          title: 'UX-Research',
          desc: null,
        },
        {
          title: 'UX/UI-Design',
          desc: null,
        },
        {
          name: 'Frontend Udvikling',
          desc: null,
        },
      ],
      type: {
        icon: null,
        content: 'Web App'
      },
      project_img: {
        src: null,
        alt: null,
      },
      tools: [
        {
          name: 'VSCode',
          icon: null,
          desc: 'Til udvikling af kode, i form af HTML, CSS, JS.',
        },
        {
          name: 'Figma',
          icon: null,
          desc: 'Til research, idégenerering, planlægning og gruppearbejde.',
        },
        {
          name: 'GitHub',
          icon: null,
          desc: 'Til koderepository med asynkront arbejde i separate branches, senere merged sammen.',
        },
        {
          name: 'Adobe XD',
          icon: null,
          desc: 'Til wireframes, mock-ups og interaktiv prototyping.',
        },
      ],
    },
    description: {
      focus_area: [
        {
          name: 'Research',
          desc: null,
          icon: null,
        },
        {
          name: 'Indhold',
          desc: null,
          icon: null,
        },
        {
          name: 'Design',
          desc: null,
          icon: null,
        },
        {
          name: 'Realisering',
          desc: null,
          icon: null,
        }
      ],
      problem: [
        {
          title: 'Manglende digital integration og overskuelighed i koncertprogrammet',
          desc: '"Den Blå Festival" er en gratis Jazz Festival i Aalborg, med et omfattende udbud af koncerter. De har et trykt program, som de også har publiceret som PDF på deres hjemmeside. Det trykte program format, er ikke ideelt for digitalt brug, og de har behov for en digital løsning, der giver brugerne et overskueligt overblik.',
        }
      ],
      solution: [
        {
          title: 'Supplerende Webapp',
          desc: 'Udvikling af en supplerende webapp til hjemmesiden, med en interaktiv programoversigt, der er let tilgængelig og kan tilgås før og under festivalen.',
        },
      ],
    },
    process_steps: [
      {
        id: 1,
        step_order: 1,
        title: 'Forstå brugeren',
        desc: 'Vi var nødt til at forstå brugeren for at kunne udvikle en webapp, der opfyldte deres behov. Denne proces bestod af research, brugersegmentering og at finde standarddata til at understøtte vores arbejde og beslutninger. Derefter oprettede vi brugergrupper, som vi anvendte til at finde interviewpersoner. Disse interviewpersoner blev brugt til at skabe personas, hvilket også var starten på indholdsprocessen.',
        icon: null,
      },
      {
        id: 2,
        step_order: 2,
        title: 'Skab indhold',
        desc: 'Med en bedre forståelse af brugeren og deres behov, var det tid til at planlægge, forberede og skabe indhold til webappen.',
        icon: null,
      },
      {
        id: 3,
        step_order: 3,
        title: 'Udvikle design',
        desc: 'Med research, brugerundersøgelser og indhold på plads, skulle vi skabe selve designet, hvilket vi gjorde i tre faser: Skitser, wireframes og high fidelity mock-ups og interaktiv prototype.',
        icon: null,
      },
      {
        id: 4,
        step_order: 4,
        title: 'Realisering',
        desc: null,
        icon: null,
      },
      {
        id: 5,
        step_order: 5,
        title: 'Konklusion',
        desc: 'Kom vi i mål?',
        icon: null,
      },
    ],
    section: [
      {
        id: 1,
        title: 'Segmentering',
        active: true,
        subsection: [
          {
            id: 1,
            active: true,
            sub_title: 'Brugersegmentering',
            content: [
              'Vi arbejdede i FigJam, hvor vi skabte en brugersegmentering, der til en start var baseret på vores egne generelle antagelser, med afsæt i objektive og subjektive kriterier, såsom geografisk lokation og musikpræferencer. Det gjorde vi for at etablere et udgangspunkt at arbejde med, hvorefter vi begyndte den faktiske research for standard data.',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
          {
            id: 2,
            active: false,
            sub_title: 'Standard Data',
            content: [
              'Standard dataene ville enten understøtte vores antagelser, eller give os en dybere forståelse for de faktiske brugere. Typen af data vi fandt, var dels surveys der omhandler danskernes festival vaner og deres syn på jazzmusik, men også mulige køns- og aldersfordelinger.',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
          {
            id: 3,
            active: false,
            sub_title: 'Brugergrupper',
            content: [
              'Med standard data på plads, skabte vi tre brugergrupper.',
              'Dataene viste ikke nogen klar opdeling baseret på køn eller lignende kriterier, og vi valgte derfor at basere grupperne på subjektive kriterier, så som social tilgang og musikpræferencer.',
            ],
            list_items: [
              'Folk der kommer for Jazz og blues',
              'Folk der deltager fordi det er gratis entré',
              'Folk der deltager for det sociale',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Interviewer',
        active: false,
        subsection: [
          {
            id: 1,
            active: true,
            sub_title: 'Interview process',
            content: [
              'Da grupperne var på plads, gik vi videre til interviewprocessen. Vi ønskede at interviewe folk fra disse grupper, med fokus på folk, der har deltaget i en festival før. Vores undersøgelsesspørgsmål var "Hvilken information lægger festivaldeltagere mest vægt på før og under festivalen?".',
              'Vi valgte at formulere spørgsmålet på denne måde for at få indblik i deres behov før, under og muligvis også efter begivenheden for at kunne skabe en webapp, der ville være et praktisk og nyttigt værktøj.',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
          {
            id: 2,
            active: false,
            sub_title: 'Tematisering',
            content: [
              'Som forberedelse til interviewene, skabte vi en tematisering, der bestod af et formål og et undersøgelsesspørgsmål. Typisk vil man også skabe en hypotese, men vi mente ikke at vi havde nogen konkret forventning eller forestilling, og besluttede os for at undlade den del. Med tematiseringen af interviewet på plads, skabte vi en interviewguide, der bestod af vores undersøgelsesspørgsmål, og ud fra det, skabte vi et interview script som vi anvendte til vores interviewer.',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
          {
            id: 3,
            active: false,
            sub_title: 'Opsummering',
            content: [
              'I alt udførte vi 3 interviewer, ét for hvert gruppemedlem. Vi transskriberede og anonymiserede dem, og derefter lavede vi tematisk analyse af transskriberingerne. Den data vi fik ud af analysen, brugte vi til at sammenligne behov og finde temaer, som vi kunne bruge til webappen.',
              'Vores interviewpersoner lagde vægt på praktisk information, såsom en oversigt over toiletter, priser af events, programoversigt og transportmuligheder. Ud over de praktiske behov, var der også en gennemgående tråd af, at social sammenhold betød mere end selve musikken.',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Personas',
        active: false,
        subsection: [
          {
            id: 1,
            active: true,
            sub_title: 'Interview process',
            content: [
              'Da grupperne var på plads, gik vi videre til interviewprocessen. Vi ønskede at interviewe folk fra disse grupper, med fokus på folk, der har deltaget i en festival før. Vores undersøgelsesspørgsmål var "Hvilken information lægger festivaldeltagere mest vægt på før og under festivalen?".',
              'Vi valgte at formulere spørgsmålet på denne måde for at få indblik i deres behov før, under og muligvis også efter begivenheden for at kunne skabe en webapp, der ville være et praktisk og nyttigt værktøj.',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
          {
            id: 2,
            active: false,
            sub_title: 'Tematisering',
            content: [
              'Som forberedelse til interviewene, skabte vi en tematisering, der bestod af et formål og et undersøgelsesspørgsmål. Typisk vil man også skabe en hypotese, men vi mente ikke at vi havde nogen konkret forventning eller forestilling, og besluttede os for at undlade den del. Med tematiseringen af interviewet på plads, skabte vi en interviewguide, der bestod af vores undersøgelsesspørgsmål, og ud fra det, skabte vi et interview script som vi anvendte til vores interviewer.',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
          {
            id: 3,
            active: false,
            sub_title: 'Opsummering',
            content: [
              'I alt udførte vi 3 interviewer, ét for hvert gruppemedlem. Vi transskriberede og anonymiserede dem, og derefter lavede vi tematisk analyse af transskriberingerne. Den data vi fik ud af analysen, brugte vi til at sammenligne behov og finde temaer, som vi kunne bruge til webappen.',
              'Vores interviewpersoner lagde vægt på praktisk information, såsom en oversigt over toiletter, priser af events, programoversigt og transportmuligheder. Ud over de praktiske behov, var der også en gennemgående tråd af, at social sammenhold betød mere end selve musikken.',
            ],
            img: [
              {
                src: null,
                alt: null,
              }
            ],
          },
        ],
      },
    ],
  },
];