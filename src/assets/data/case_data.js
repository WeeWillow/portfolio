export const cases = [
  {
    id: 0,
    slug: 'den-blaa-festival',
    cover: 'den-blaa-festival.png',
    github: 'https://github.com/WeeWillow/denBlaaFestival',
    live_demo: 'https://mmd.ucn.dk/class/MMD-CSD-S23/10489563/MMD2/denBlaaFestival_sem2_gruppe07/index.html',
    details: {
      title: 'Den Blå Festival',
      desc: 'Den Blå Festival er en gratis Jazz Festival, der årligt tager sted i Aalborg. De tilbyder et bredt udvalg af koncerter, og et trykt program, der også findes som PDF online.',
    },
    tags: {
      roles: ['UX/UI', 'Frontend'],
      type: ['Web App'],
      approach: ['Mobile-first'],
    },
    intro: {
      case: 'Den Blå Festival" afholder en årlig, gratis jazzfestival i Aalborg med et bredt udvalg af koncerter. Festivalen udgiver et trykt program, men oplever, at formatet ikke er optimalt for digitale brugere. Det kan være svært at søge efter specifikke koncerter eller kunstnere i det trykte program, og det er ofte tidskrævende at danne sig et overblik over programmet. Dette gør det vanskeligt for publikum at planlægge deres festivalbesøg på en effektiv måde.',
      solution: 'For at imødekomme brugernes behov udviklede vi en interaktiv webapp, der supplerer det trykte program. Webappen giver festivalgæsterne et brugervenligt overblik over hele programmet. Ved hjælp af søgefunktioner kan brugerne nemt finde de koncerter, der interesserer dem, og sammensætte deres egen personlige festivalplan. Webappen er tilgængelig både før og under festivalen.',
      img: 'den-blaa-festival-img.png',
    },
    articles: [
      {
        id: 1,
        title: 'Forstå brugeren',
        sections: [
          {
            id: 1,
            title: 'Brugersegmentering',
            content: 'Vi startede med at opdele vores potentielle brugere i segmenter baseret på deres interesser og adfærd. Vi brugte FigJam til at visualisere vores antagelser om brugerne, f.eks. deres geografiske placering og musikpræferencer.',
            img: null,
          },
          {
            id: 2,
            title: 'Dataindsamling',
            content: 'For at validere vores antagelser, indsamlede vi data om festivaldeltageres vaner og holdninger gennem surveys og eksisterende forskning.',
            img: null,
          },
          {
            id: 3,
            title: 'Brugergrupper',
            content: 'Baseret på vores data identificerede vi tre primære brugergrupper: Jazz- og blues-entusiaster, Gratis-entusiaster & Socialt orienteret deltagere.',
            img: '/assets/img/segmentering.png',
          },
          {
            id: 4,
            title: 'Interviews',
            content: 'Vi gennemførte interviews med repræsentanter fra hver brugergruppe for at få en dybere forståelse af deres behov og ønsker. Vi fokuserede på: Praktisk information (Toiletter, priser, program, transport) & Sociale aspekter (Samvær med andre, stemning).',
            img: '/assets/img/interview.png',
          },
          {
            id: 5,
            title: 'Personas og Scenarier',
            content: 'For at gøre vores brugere mere konkrete, skabte vi to personas: en jazzentusiast og en social deltager. Vi udviklede scenarier for hver persona, hvor de navigerede i en fiktiv version af vores webapp.',
            img: '/assets/img/personaer.png',
          },
          {
            id: 6,
            title: 'Funktionaliteter',
            content: 'Baseret på vores research og personas definerede vi følgende kernefunktionaliteter for webappen: Detaljeret program (Oversigt over events, inklusive tid, sted, kunstner og genre), Filtrering og sortering (Mulighed for at filtrere efter genre og sortere efter dato og tid), Kort (Oversigt over festivalområdet, inklusive scener, madboder og toiletter) & Favoritter (Mulighed for at gemme yndlingskunstnere og events).',
            img: null,
          },
          {
            id: 7,
            title: 'Opsummering',
            content: 'Ved at kombinere brugerresearch, dataindsamling og persona-udvikling, opnåede vi en dyb forståelse af vores målgruppe. Denne viden var afgørende for at designe en webapp, der opfyldte brugernes behov og skabte en positiv oplevelse.',
            img: null,
          },
        ],
      },
      {
        id: 2,
        title: 'Skabning af indhold',
        sections: [
          {
            id: 1,
            title: 'Affinity Diagram',
            content: 'For at strukturere vores tanker om indholdet, oprettede vi et affinitetsdiagram. I en brainstorm-session samlede vi alle vores ideer om, hvilket indhold der skulle være med i appen. Vi grupperede relaterede ideer for at få et overblik over de forskellige emner.',
            img: '/assets/img/affinity-diagram.png',
          },
          {
            id: 2,
            title: 'Content Sitemap',
            content: 'Baseret på vores affinitetsdiagram udviklede vi et indholdssitemap. Dette sitemap gav os en visuel oversigt over appens struktur og hvordan de forskellige sider og funktioner hang sammen. Målet var at skabe en klar og intuitiv brugeroplevelse.',
            img: '/assets/img/content-sitemap.png',
          },
          {
            id: 3,
            title: 'Opsummering',
            content: 'Ved at bruge et affinitetsdiagram og et content sitemap kunne vi sikre, at indholdet i vores webapp var relevant, velorganiseret og let at finde for brugerne. Disse værktøjer hjalp os med at skabe en klar struktur for vores app, før vi gik videre til det visuelle design og udvikling.',
            img: null,
          },
        ],
      },
      {
        id:3,
        title: 'Udviklingen af design',
        sections: [
          {
            id: 1,
            title: 'Skitsering',
            content: 'Vores designproces var en iterativ proces, hvor vi løbende justerede og forbedrede vores idéer. Vi startede med at lave håndtegnede skitser for at visualisere vores tanker om webappens udseende. Ved at dele og diskutere disse skitser tidligt i processen, sikrede vi, at hele teamet havde en fælles forståelse af designet.',
            img: '/assets/img/wireframes.png',
          },
          {
            id: 2,
            title: 'Mock-ups',
            content: 'Når vi var tilfredse med vores wireframes, udviklede vi detaljerede mock-ups i Adobe XD. Disse mock-ups viste, hvordan webappen ville se ud med farver, typografi og billeder. Vi gjorde mock-ups\'ene interaktive for at skabe en prototype, som vi kunne teste med brugere.',
            img: '/assets/img/mock-ups.png',
          },
          {
            id: 3,
            title: 'Prototype & Usability Tests',
            content: 'Vi gennemførte fem "think-aloud" usability tests med brugere for at evaluere vores design. Under testen bad vi brugerne om at tænke højt, mens de navigerede gennem prototypen. Dette gav os værdifuld feedback om, hvad der fungerede godt og hvad der skulle forbedres. Baseret på resultaterne af usability testene foretog vi mindre justeringer af designet, især i forhold til fontvalg, størrelse og formulering på programoversigten.',
            img: '/assets/img/usability-test.png',
          },
          {
            id: 4,
            title: 'Opsummering',
            content: 'Ved at følge en iterativ designproces fra skitser til interaktive prototyper og usability tests, sikrede vi, at vores design var både æstetisk tiltalende og brugervenligt. Ved at inddrage brugerfeedback tidligt i processen, kunne vi identificere og løse potentielle problemer før udviklingen.',
            img: null,
          },
        ],
      },
      {
        id:4,
        title: 'Udvikling & Implementering',
        sections: [
          {
            id: 1,
            title: 'Setup og Kodebase',
            content: 'For at sikre et effektivt samarbejde og god versionering af vores kode, besluttede vi at bruge GitHub til at hoste vores projekt. Vi oprettede et centralt repository, hvor alle teammedlemmer kunne bidrage med kode. For at organisere vores arbejde og undgå konflikter, oprettede vi forskellige branches for hver side af webappen.',
            img: null,
          },
          {
            id: 2,
            title: 'JavaScript Funktionaliteter: Tabs & Burger Menu',
            content: 'For at skabe en dynamisk og brugervenlig oplevelse implementerede vi to vigtige JavaScript-funktioner: Tabs (HTML: Hver fane tildeles et unikt ID, som JavaScript kan bruge til at identificere den. JavaScript: Når en bruger klikker på en fane, søger JavaScript efter elementet med det tilsvarende ID. Den aktuelle fane får tildelt en bestemt CSS-klasse for at fremhæve den, mens de andre faner får fjernet denne klasse). Burger Menu (HTML: Burger menuen er skjult som standard. Et ikon åbner, når brugeren klikker på det. JavaScript: Når der klikkes på ikonet, tilføjes en CSS-klasse til menuen, der får den til at blive synlig. En lignende mekanisme bruges til at skjule den igen, når brugeren klikker uden for, eller på et element inden i menuen).',
            img: '/assets/img/javascript.png',
          },
          {
            id: 3,
            title: 'Hvorfor JavaScript?',
            content: 'JavaScript var afgørende for at skabe en dynamisk og interaktiv webapp. Ved at manipulere HTML-elementer kunne vi tilføje funktioner som tabs og burger menuer, hvilket gjorde brugeroplevelsen mere engagerende.',
            img: null,
          },
          {
            id: 4,
            title: 'Udfordringer og løsninger',
            content: 'For at sikre en optimal brugeroplevelse på tværs af enheder og for brugere med handicap, fokuserede vi på responsivt design og tilgængelighed. Vi optimerede også vores kode for at sikre en hurtig ydeevne.',
            img: null,
          },
          {
            id: 5,
            title: 'Fremtidige muligheder & Konklusion',
            content: 'Der er flere måder, hvorpå vi kan udvide funktionaliteten yderligere. For eksempel kunne vi tilføje animationer, mere avancerede interaktioner og integrere eksterne biblioteker. JavaScript har været en central del af vores projekt og har gjort det muligt for os at skabe en mere dynamisk og brugervenlig webapp. Vi har lagt et solidt fundament for fremtidige udviklinger.',
            img: null,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    slug: 'cine-seekers',
    cover: 'cine-seekers.png',
    github: 'https://github.com/WeeWillow/cine-seekers_code-challenge',
    live_demo: 'https://cine.weewillow.com/',
    details: {
      title: 'Cine Seekers',
      desc: 'Cine Seekers er en fiktiv filmdatabase, udviklet som del af en praktikansøgningsprocess. Klienten har et simpelt API, brugt til at hente data.',
    },
    tags: {
      roles: ['Frontend', 'UX/UI'],
      type: ['Website'],
      approach: ['Mobile-first'],
    },
    intro: {
      case: 'Jeg har udviklet en hjemmeside for en klient, der ønsker at vise film online. Klienten har allerede et simpelt API, der fungerer som mellemled mellem hjemmesiden og dataleverandøren. Dataleverandøren ejer alle klientens data, herunder film, produkter og medieindhold.',
      solution: 'Jeg har udviklet en responsiv hjemmeside, der præsenterer et overskueligt overblik over trending film. Hjemmesiden er bygget med Vue.js 3, og jeg har benyttet Vite som build-tool og Vue Router til navigation. Designet er skabt med HTML og CSS. Ved at klikke på en film, ledes brugeren til en detaljeret side med relevant information hentet direkte fra API\'et.',
      img: 'cine-seekers-img.png',
    },
    articles: [
      {
        id: 1,
        title: 'API & Data',
        sections: [
          {
            id: 1,
            title: 'API',
            content: 'Projektet benytter sig af et eksternt API, som kræver autentificering via enten et Access Token eller et Bearer Token. Disse tokens er unikke for hver bruger og skal opbevares sikkert. For at beskytte disse sensitive oplysninger, er de gemt i en .env.local fil, som ikke inkluderes i det offentlige Git repository. En detaljeret README.md fil er inkluderet i projektet. Denne fil indeholder instruktioner til hvordan man opretter sit eget token hos API-udbyderen, konfigurerer .env.local filen og kører projektet lokalt.',
            img: '/assets/img/api-token.png',
          },
          {
            id: 2,
            title: 'Fetch',
            content: 'For at trække data ud, til brug i koden, benyttede jeg mig af Fetch-funktionen.',
            img: '/assets/img/fetch.png',
          },
        ],
      },
      {
        id: 2,
        title: 'Trending Film',
        sections: [
          {
            id: 1,
            title: 'Featured',
            content: 'Klienten havde en del ønskede funktioner, som jeg afgrænsede til projektet. For at hente film, startede jeg med API\'ets "discover movies", hvor standard mængden af film er et array af 20. Jeg benytter slice-funktionen, for at beskære antallet ned til hhv. 5 og 7, afhængig af skærmstørrelse. Den første film fra API\'et bruges til featured film på forsiden, og de resterende 4 og 6 film findes under "Trending Films".',
            img: '/assets/img/featured.png',
          },
          {
            id: 2,
            title: 'Trending',
            content: 'Efter at have anvendt slice-funktionen til at reducere datasættet, itererer jeg over det resulterende array. For hver film oprettes et objekt, der indeholder titlen, cover-billedet og ID\'et. Objekterne anvendes derefter til at dynamisk generere HTML-elementer. Hvert film-element indeholder et billede, titlen og fungerer som et card eller en knap, der fører til en detaljeret side for den pågældende film.',
            img: '/assets/img/trending.png',
          },
        ],
      },
      {
        id: 3,
        title: 'Genre',
        sections: [
          {
            id: 1,
            title: 'Filtrering på genrer',
            content: 'Klienten ønskede at fremhæve udvalgte genre på hjemmesiden, med film fra hver genre, samt det totale antal af film. Udover at bruge fetch-funktionen, filtreres der, så kun de udvalgte genres (Action, Comedy, Thriller, War, Romance, Drama, Crime, Documentary, Horror) data trækkes ud. Push-funktionen bruges for at gemme "trending film", hvorefter der også hentes data om antal.',
            img: '/assets/img/genre-amount.png',
          },
        ],
      },
      {
        id: 4,
        title: 'Opsummering',
        sections: [
          {
            id: 1,
            title: 'Slutresultatet',
            content: 'Med tanke på at dette projekt var min først tur med Vue, så er jeg tilfreds. Der er en del mangler, og med presset tid, så er jeg ikke helt vild med designet. Da dette var del af en praktikansøgningsprocess, hvor fokus mere lå på code, var jeg nød til at afgrænse design delen. Den kode som jeg nåede at realisere - forside med trending film, film fra specifikke genre, en oversigts side af det fulde array, og enkelt film side - fungerer godt, siden er hurtig og overordnet responsiv.',
            img: '/assets/img/cine-slut.jpeg',
          },
          {
            id: 2,
            title: 'Videreudvikle',
            content: 'Cine Seekers er en meget fin v1, men jeg kunne godt tænke mig at udvikle mere på den. Der skulle have været flere oplysninger på de enkelte film, som direktører, skuespillere og en trailer. Derudover var det mening at man kunne gemme film til en "watchlist", og klikke ind på hver genre. Designer har nogle mangler, og kunne optimeres. Overordnet set, så er det et godt stykke arbejde på lige rundt en uges tid, med undervisning imellem.',
            img: null,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'sejr-davidsen',
    cover: 'sejr-davidsen.png',
    github: 'https://github.com/WeeWillow/frontend_valgfagseksamen_g5',
    live_demo: 'https://sejrdavidsen.weewillow.com/',
    details: {
      title: 'Sejr & Davidsen',
      desc: 'Sejr & Davidsens er en dyrepension og -internat i Nordjylland, der tilbyder pasning til hunde og katte, samt et internat for herreløse og nødstedte dyr.',
    },
    tags: {
      roles: ['Frontend'],
      type: ['Website'],
      approach: ['Desktop-first'],
    },
    intro: {
      case: 'noget om casen. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum distinctio amet, debitis reprehenderit eum quasi soluta harum perferendis ea quisquam? Iure quo, quasi at molestiae quas qui? Recusandae, expedita soluta.',
      solution: 'hvordan løste vi det. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum distinctio amet, debitis reprehenderit eum quasi soluta harum perferendis ea quisquam? Iure quo, quasi at molestiae quas qui? Recusandae, expedita soluta.',
      img: 'sejr-davidsen-img.png',
    },
    articles: [
      {
        id: 1,
        title: 'Project Overview',
        sections: [
          {
            id: 1,
            title: 'Introduction',
            content: 'This is the introduction to the project.',
            img: '/assets/img/affinity-diagram.png',
          },
          {
            id: 2,
            title: 'Details',
            content: 'This section contains project details.',
            img: '/assets/img/affinity-diagram.png',
          },
          {
            id: 3,
            title: 'Conclusion',
            content: 'This is the conclusion of the project.',
            img: '/assets/img/affinity-diagram.png',
          },
        ],
      },
      {
        id: 2,
        title: 'User Research',
        sections: [
          {
            id: 4,
            title: 'Methodology',
            content: 'This section explains the user research methodology used.',
            img: '/assets/img/affinity-diagram.png',
          },
          {
            id: 5,
            title: 'Findings',
            content: 'This section outlines the findings from user research.',
            img: '/assets/img/affinity-diagram.png',
          },
        ],
      },
    ],
  },
];