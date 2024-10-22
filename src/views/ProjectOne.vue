<script setup>

</script>

<template>
  <h1>Den Blå Festival</h1>
<section class="layout-container margin-bottom">
Breadcrumb:
Projekter / Den blå festival

Titel:
Den blå festival
Type af projekt:
Web App
Fokusområde:
Research
Indhold
Design
Realisering
</section>

<section class="layout-container margin-bottom">
  Problemet:
Overskrift:
Manglende digital integration og overskuelighed i koncertprogrammet
Brødtekst:
"Den Blå Festival" er en gratis Jazz Festival i Aalborg, med et omfattende udbud af koncerter. De har et trykt program, som de også har publiceret som PDF på deres hjemmeside. Det trykte program format, er ikke ideelt for digitalt brug, og de har behov for en digital løsning, der giver brugerne et overskueligt overblik.
</section>

<section class="layout-container margin-bottom">
Løsningen:
Overskrift:
Supplerende Webapp
Brødtekst:
Udvikling af en supplerende webapp til hjemmesiden, med en interaktiv programoversigt, der er let tilgængelig og kan tilgås før og under festivalen.
</section>

<section class="layout-container margin-bottom">
Mine roller:
Overskrift:
UX/UI Designer, Udvikler

Knapper:
Link til github
Link til live demo
</section>

<h2>Udviklingsprocessen</h2>
<section class="layout-container margin-bottom">
<h3>Forstå brugeren</h3>
Overskrift:
Forstå brugeren

Brødtekst:
Vi var nødt til at forstå brugeren for at kunne udvikle en webapp, der opfyldte deres behov. Denne proces bestod af research, brugersegmentering og at finde standarddata til at understøtte vores arbejde og beslutninger.

Derefter oprettede vi brugergrupper, som vi anvendte til at finde interviewpersoner. Disse interviewpersoner blev brugt til at skabe personas, hvilket også var starten på indholdsprocessen.

Brugersegmentering:
Brugersegmentering
Vi arbejdede i FigJam, og skabte en brugersegmentering der til en start var baseret på vores egne generelle antagelser, med afsæt i objektive og subjektive kriterier, så som geografisk lokation og musikpræferencer.

Det gjorde vi for at etablere et udgangspunkt at arbejde med, hvorefter vi begyndte den faktiske research for standard data.

Standard Data
Standard dataene ville enten understøtte vores antagelser, eller give os en dybere forståelse for de faktiske brugere. Typen af data vi fandt, var dels surveys der omhandlede danskernes festival vaner og deres syn på Jazz musik, men også mulige køns- og aldersfordelinger.

Billede af “Segmentering” - “generelt om målgruppen”.
Brugergrupper
Med standard data på plads, skabte vi tre brugergrupper.
• Folk der kommer for Jazz og blues
• Folk der deltager fordi det er gratis entré
• Folk der deltager for det sociale

Dataene viste ikke nogen klar opdeling baseret på køn eller lignende kriterier, og vi valgte derfor at basere grupperne på subjektive kriterier, så som social tilgang og musikpræferencer.

Billede af “brugergrupper” - “Segmentering”
Billede af tre grupper

Interviewer:
Interview process
Da grupperne var på plads, gik vi videre til interviewprocessen. Vi ønskede at interviewe folk fra disse grupper, med fokus på folk, der har deltaget i en festival før. Vores undersøgelsesspørgsmål var "Hvilken information lægger festivaldeltagere mest vægt på før og under festivalen?".

Vi valgte at formulere spørgsmålet på denne måde for at få indblik i deres behov før, under og muligvis også efter begivenheden for at kunne skabe en webapp, der ville være et praktisk og nyttigt værktøj.

Som forberedelse til interviewerne, skabte vi en tematisering der bestod af et formål og et undersøgelsesspørgsmål. Typisk vil man også skabe en hypotese, men vi mente ikke at vi havde nogen konkret forventning eller forestilling, og besluttede os for at undlade den del. Med tematiseringen af interviewet på plads, skabte vi en interview guide, der bestod af vores undersøgelsesspørgsmål, og ud fra det, skabte vi et interview script som vi anvendte til vores interviewer.

I alt udførte vi 3 interviewer, ét for hvert gruppemedlem. Vi transskriberede og anonymiserede dem, og derefter lavede vi tematisk analyse af transskriberingerne. Den data vi fik ud af analysen, brugte vi til at sammenligne behov og finde temaer, som vi kunne bruge til webappen.

Vores interview personer lagte vægt på praktisk information, så som en oversigt over toiletter, priser af events, programoversigt og transportmuligheder. Ud over de praktiske behov, var der også en gennemgående tråd af, at social sammenhold betød mere, end selve musikken.

Billede af et interview

Personas:
Personas
Data kan være svært at arbejde med, specielt når det relaterer til mennesker og deres behov. For at nemmere kunne udvikle webappen, skabte vi to personas, ud fra den indsamlede data og research vi havde, samt vores brugergrupper. Den ene persona kom fra dem der kan lide Jazz og Blues, og med den anden, bestemte vi at sammensætte grupperne der deltog for det social samt fordi det er en gratis festival.

Udover personas, skabte vi også situationer og scenarier for dem, hvor de navigerede i en fiktiv webapp. Navigationen i den fiktive webapp, gav os mulighed for at udvikle mulige løsninger og funktioner, hver persona kunne have behov for.

Nogle funktioner vi kom frem til, var:
• Hurtig adgang til programoversigt
• Tydelig oversigt over events; lokation, tidspunkt, dato, og kunstner/band navn med billede
• Sorterings- og filtreringsmuligheder
• Mulighed for at gemme kunstnere og begivenheder
• Et kort med spillesteder, mad/drikke og toiletter

Vi blev enige om at programoversigten ville være sorteret I niveauer, med kommende dato først og kommende koncert baseret på tidspunkt som andet niveau. Sortering af kunstnersiden ville først sorteres alfabetisk, med filtreringsmuligheder efter genre.

Billede af persona 1 - Henrik
Billede af persona 2 - Tanya
</section>

<section class="layout-container margin-bottom">
  <h3>Skab Indhold</h3>
  Skab indhold
Overskrift:
Skabning af indhold

Brødtekst:
Med en bedre forståelse af brugeren og deres behov, var det tid til at planlægge, forberede og skabe indhold til webappen.

Affinity Diagram & Content Sitemap:
Affinity diagram
Vi begyndte med at oprette et affinitetsdiagram. For at komme i gang foretog vi en brainstorming-session, hvor vi delte vores idéer om, hvilket indhold der skulle være inkluderet, samt baseret på de data, vi indsamlede fra interviewene.

Som en del af denne proces udarbejdede vi også en oversigt over de funktioner, der havde en sammenhængende betydning, og organiserede dem i grupper med relateret indhold. Efterfølgende udviklede vi et indholds-sitemap for at strukturere appens indhold med det formål at skabe et letforståeligt og nemt navigerbart værktøj.

Billede af affinity diagram
Billede af content sitemap

</section>

<section class="layout-container margin-bottom">
  <h3>Udvikle Design</h3>
  Udvikle Design
Overskrift:
Udviklingen af design

Brødtekst:
Med research, brugerundersøgelser og indhold på plads, skulle vi skabe selve designet, hvilket vi gjorde i tre faser: Skitser, wireframes og high fidelity mock-ups og interaktiv prototype.
Skitsering:
Skitsering
Vores design process var meget iterativ. Vi havde skitseret flere gange tidligere i processen, for at bedre kommunikere og dele forståelse og idéer, og startede derfor ikke på bar bund da det faktisk var tid for skitsering.

Vi skitserede hver især en side hjemme, som vi delte med gruppen til næste arbejdstilfælde. Efter den første skitsering og diskussioner, kom vi frem til at vi havde meget ens forestilling af hvordan webappen skulle se ud, så vi delte skitseringen op i forskellige sider, som vi hver især lavede en skitse til, og derefter delte til diskussion og feedback.

Wireframes:
Wireframes
Baseret på denne feedback, lavede vi ændringer ved behov, og gik så i gang med at skabe wireframes. Vi følte at fremtidige ændringer til designet ville være hurtigere at ændre i Adobe XD, fremfor på papir. Der var et antal wireframes som vi havde en dybere iterativ tilgang til, og lavede flere mulige versioner af, før vi var tilfredse.

Billede af wireframes

Mock-ups, prototype & Think Aloud Usability test:
Mock-up, Prototype & Usability test
Med vores wireframes på plads, gik vi videre til at skabe det endelige mock-up og den interaktive prototype, som vi brugte til at udføre 5 "Think-aloud" usability test på. Disse usability test, var til for at teste vores design, layout og navigation. Vi oplevede ingen større udfordringer med selve designet, men der var nogle mindre udfordringer med fontvalg og størrelse, samt formulering på programoversigten.

Billede af mockup
Billede af mockup
Billede af usability test rapport
</section>

<section class="layout-container margin-bottom">
  <h3>Realisering</h3>
  Overskrift:
Udvikling & Implementering

Brødtekst:
N/A

Setup til kode:
Setup
For at udvikle webappen oprettede vi et kode repository på GitHub, hvor vi samarbejdede om projektet og opdelte det i branches for hver side af webappen. Vi implementerede to funktioner i JavaScript til projektet: tabs og en burger menu navigation. Vi diskuterede deres udseende, funktionalitet og hvilke sider, de skulle bruges til.

Tabs-funktionen fungerer således, at hver fane er tildelt et unikt ID i HTML-dokumentet. Når en fane trykkes på, ændrer JavaScript koden den aktuelle CSS-styling for den valgte fane og gemmer resten. Burger menu navigationen fungerer på en lignende måde: den er skjult, indtil brugeren trykker på burger-ikonet. JavaScript tildeler derefter styling for at vise navigationen.

</section>

<section class="layout-container margin-bottom">
  <h3>Konklusion</h3>
  Kom vi i mål?:
Løste vi problemet?

Overordnet set, fik vi skabt en webapp, der løste de primære udfordringer nævnt i problembeskrivelsen. Vores webapp giver brugeren mulighed for nemt at kunne skabe et overblik over begivenhederne, og dermed strukturere sin deltagelse ud fra dette. Den kan bruges før og under festivalen, både til planlægning men også hurtig informationssøgning.

Der var en generel udfordring med at konkret forstå hvad der gjorde noget til en webapp fremfor en normal app, eller en hjemmeside, og man kan argumentere at vores løsning ligger nærmere en hjemmeside, end et konkret værktøj som forlængelse af en eksisterende hjemmeside. Vi glemte at webappen var i forlængelse af en side, og fik skabt en forside som sagde meget af det samme man i realiteten allerede ville have læst inden man åbnede appen.

Man kan også argumentere at vores løsning prøvede at være mere end et værktøj, og man kunne tage nogle ting ud af designet, og egentlig stå tilbage med et bedre slutresultat. Vi skabte et kort der, udover at vise festivalens spillesteder og toiletter i nærheden, også viste spisesteder. Noget festivalen ikke selv står for. Udover kortet, var der også en side i appen, dedikeret til mad og drikke.

Refleksion:
Ændringer eller forbedringer?
Hvis jeg skulle videreudvikle på denne webapp, så er der nogle konkrete ting jeg ville ændre.

Forenkle
Dels, så ville jeg fjerne de ting der ikke havde med Den Blå Festival at gøre, altså mad og drikke sektionen. Der findes allerede apps for dette, og det er ikke noget Den Blå Festival selv tilbyder, de ville derfor ikke have gavn af denne sektion.

Tilgængelighed
Udover det, ville jeg arbejde med farver, kontrast og læsbarhed, og generelt lægge mere fokus på tilgængeligheden af designet, da nogle dele kan være udfordrende for visse mennesker at læse.

Navigation
Jeg ville arbejde med navigation, ikoner og wayfinding, samt så ville jeg ændre på forsiden. For at optimere webappen og dens funktionalitet, ville jeg gøre mere ud af ikoner, genveje og hurtigt overblik. Jeg ville også arbejde videre på progressive disclosure.

JavaScript
Med mere JavaScript erfaring bag mig, ville jeg ændre hvordan vores tabs fungerer ved at fjerne de tildelte ID inde i HTML filen, med "separation of concerns" princippet i mente for at optimere koden. Gennem brug af "querySelectAll", kan man fange alle tabs fra HTML, uden at blande koden. Jeg ønsker at forbedre koden ved at implementere "separation of concerns" princippet og bruge querySelectAll til at optimere tabs-funktionaliteten. Dette vil gøre koden mere struktureret og lettere at vedligeholde og optimere.

Det vi gjorde godt:
Hvad der var særligt vellykket?
Jeg føler at det overordnede visuelle design er særligt vellykket. Det gør godt brug af Den Blå Festivals farver, som vi tog ud fra deres logo, og det deler information ind i tydelige visuelle chunks. Vores fontvalg er både tematisk passende, men også balanceret, med en unik font til titler, og en læsbar samt funktionel font til brødtekst.

Det jeg vil tage med mig til næste gang:
Hvad har jeg lært?
• Det er nemt at gøre for meget, og svært at holde sig helt inde for skiven, specielt når man har mange idéer, og muligvis ikke er i en gruppe der altid deler samme vision af slutresultatet.
• Det kan være nemt at glemme målet, og man bør have det i mente hele vejen igennem projektet.
</section>
</template>

<style scoped>

</style>