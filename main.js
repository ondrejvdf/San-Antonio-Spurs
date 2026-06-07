"use strict";

const translations = {
  cs: {
    skip: "Přeskočit na hlavní obsah", openMenu: "Otevřít navigaci", closeMenu: "Zavřít navigaci",
    mainNav: "Hlavní navigace", openSettings: "Otevřít nastavení", closeSettings: "Zavřít nastavení",
    themeToggle: "Přepnout barevný režim", languageGroup: "Výběr jazyka", backTop: "Zpět nahoru",
    heroImage: "Černostříbrná basketbalová aréna s míčem na palubovce", footerNav: "Navigace v zápatí",
    brandHome: "Spurs fanouškovský web, úvod", brandBack: "Spurs fanouškovský web, zpět na začátek", clubStats: "Základní klubové údaje",
    navTeam: "Tým", navHistory: "Historie", navLegends: "Legendy", navCulture: "Kultura", navFaq: "Otázky",
    explore: "Poznej Spurs", settings: "Nastavení", appearance: "Vzhled",
    appearanceHelp: "Světlý nebo tmavý režim", language: "Jazyk", languageHelp: "Jazyk obsahu stránky",
    heroKicker: "Jiní než ostatní", fanProject: "Fanouškovský školní mikroweb", heroSlogan: "Tým na prvním místě. Vždy.",
    heroLead: "Pět titulů, generace legend a basketbalová kultura postavená na důvěře, disciplíně a chytré týmové hře.",
    discoverHistory: "Poznej historii", founded: "založení organizace", championships: "šampion NBA", areaCode: "telefonní předvolba San Antonia",
    identityKicker: "Stříbrná a černá", identityTitleA: "Více než", identityTitleB: "basketbal",
    identityText1: "Spurs reprezentují San Antonio od roku 1973. Klub si vybudoval pověst organizace, která dává tým nad jednotlivce a dlouhodobou práci nad rychlá řešení.",
    identityText2: "Černá, bílá a stříbrná nejsou jen barvy. Vyjadřují jednoduchost, soustředění a profesionální identitu týmu.",
    identityQuote: "Dobrá přihrávka vytváří další dobrou přihrávku.",
    titlesKicker: "Mistrovský standard", titlesTitleA: "Pětkrát na", titlesTitleB: "vrcholu",
    titlesIntro: "Každý titul patří do jiné kapitoly, ale všechny spojuje stejná DNA: obrana, trpělivost a týmová odpovědnost.",
    title1999: "První titul", title2003: "Nová éra", title2005: "Sedm zápasů", title2007: "Dominantní cesta", title2014: "Krásná hra",
    historyKicker: "Od ABA k pěti prstenům", historyTitleA: "Historie, která", historyTitleB: "drží pohromadě",
    historyIntro: "Od příchodu do San Antonia přes první titul až po basketbalovou lekci z roku 2014. Spurs rostli díky kontinuitě a jasné klubové filozofii.",
    history1973Title: "Příchod do San Antonia", history1973Text: "Dallas Chaparrals se stěhují a vzniká značka San Antonio Spurs.",
    history1976Title: "Vstup do NBA", history1976Text: "Spurs se spolu s dalšími kluby ABA připojují k NBA.",
    history1997Title: "Tim Duncan", history1997Text: "První volba draftu mění budoucnost celé organizace.",
    history1999Title: "První prsten", history1999Text: "San Antonio získává první titul a potvrzuje sílu podkošových dvojčat.",
    history2014Title: "Krásná hra", history2014Text: "Pohyb míče a týmová souhra vrcholí pátým mistrovským titulem.",
    history2023Title: "Nová kapitola", history2023Text: "Victor Wembanyama přichází jako první volba draftu.",
    legendsKicker: "Velká trojka", legendsTitleA: "Legendy jedné", legendsTitleB: "éry",
    legendsIntro: "Tři odlišné basketbalové osobnosti, které se doplňovaly téměř dvě desetiletí.",
    duncanPosition: "silové křídlo / pivot", duncanText: "Klidný lídr, základ obrany a tvář pěti mistrovských týmů.", duncanTag: "Velký základ",
    parkerPosition: "rozehrávač", parkerText: "Rychlost, průniky do vymezeného území a kontrola tempa.", parkerTag: "Nejužitečnější hráč finále 2007",
    manuPosition: "střílející rozehrávač", manuText: "Kreativita, odvaha a energie hráče, který přijal roli šestého muže.", manuTag: "Nebojácný soupeř",
    futureKicker: "Další kapitola", futureTitleA: "Budoucnost má", futureTitleB: "číslo 1", futureRole: "pivot / křídlo",
    futureText: "Jednička draftu 2023 přinesla do San Antonia mimořádnou kombinaci výšky, pohybu, střelby a obranného instinktu. Je symbolem nové éry, která navazuje na týmové hodnoty Spurs.",
    traitReach: "Dosah", traitReachText: "Ochrana koše", traitSkill: "Dovednost", traitSkillText: "Hra z perimetru", traitVision: "Vize", traitVisionText: "Čtení hry",
    heightKicker: "Jak vysoký je Wemby?", heightTitleA: "Porovnej svou", heightTitleB: "výšku",
    heightIntro: "Zadej svou výšku a podívej se na skutečný poměr vedle Victora Wembanyamy.",
    heightLabel: "Vaše výška", heightHelp: "Povolený rozsah: 80–250 cm.", unitGroup: "Výběr jednotky výšky",
    unitCm: "cm", unitInch: "palce", wembyHeight: "224 cm / 7 stop 4 palce", wembyHeightShort: "224 cm / 7 stop 4 palce",
    you: "Vy:", heightVisual: "Vizuální porovnání výšky",
    wembyPhotoAlt: "Victor Wembanyama stojící zpříma v černém dresu Spurs s basketbalovým míčem",
    userSilhouette: "Moderní realistická sportovní silueta uživatele",
    heightGuide: "Tvoje výška",
    heightNote: "Obě postavy stojí na společné základní čáře a jejich výška se počítá přesným poměrem k Victorovým 224 cm.",
    heightError: "Zadejte výšku v povoleném rozsahu.",
    victorTaller: "Victor je o {value} cm vyšší.",
    userTaller: "Jste o {value} cm vyšší než Victor.",
    sameHeight: "Máte stejnou výšku jako Victor.",
    heightPercentage: "Jsi {value} % Victorovy výšky.",
    cultureKicker: "Proč Spurs?", cultureTitleA: "Kultura před", cultureTitleB: "ego",
    cultureIntro: "Úspěch Spurs není postavený na jediné hvězdě. Vychází ze způsobu, jakým organizace přemýšlí, vybírá hráče a buduje vztah s městem.",
    culture1Title: "Tým na prvním místě", culture1Text: "Míč se pohybuje rychleji než hráč. Správné rozhodnutí má přednost před osobní statistikou.",
    culture2Title: "Kontinuita", culture2Text: "Stabilní hodnoty umožnily různým generacím navazovat na stejný basketbalový základ.",
    culture3Title: "Globální pohled", culture3Text: "Spurs dlouhodobě hledají talent a inspiraci daleko za hranicemi USA.",
    culture4Title: "San Antonio", culture4Text: "Klub a město sdílejí hrdost, komunitu a nezaměnitelnou identitu oblasti 210.",
    galleryKicker: "Černostříbrná atmosféra", galleryTitleA: "Domovská", galleryTitleB: "energie",
    galleryArenaAlt: "Černostříbrná basketbalová aréna před zápasem", silverBallAlt: "Stylizovaný stříbrný basketbalový míč",
    fiveTitlesAlt: "Pět abstraktních symbolů mistrovských titulů", galleryArenaTitle: "Zápasový večer", galleryArenaText: "Světla, palubovka, oblast 210",
    galleryDetailTitle: "Stříbrný standard", galleryDetailText: "Jednoduchost s charakterem", galleryRingsTitle: "Pět mistrovských titulů",
    factsKicker: "Věděli jste?", factsTitleA: "Spurs v", factsTitleB: "číslech",
    fact1Title: "sezon v řadě", fact1Text: "Série účastí v play-off v letech 1998–2019 vyrovnala rekord NBA.",
    fact2Title: "země Velké trojky", fact2Text: "Duncan, Parker a Ginóbili reprezentovali Americké Panenské ostrovy, Francii a Argentinu.",
    fact3Title: "podkošová dvojčata", fact3Text: "David Robinson a Tim Duncan vytvořili jednu z nejslavnějších podkošových dvojic.",
    faqKicker: "Rychlé odpovědi", faqTitleA: "Často kladené", faqTitleB: "otázky", faqIntro: "Základní fakta pro nové fanoušky černé a stříbrné.",
    faq1Q: "Kolik titulů Spurs vyhráli?", faq1A: "San Antonio získalo pět titulů NBA: v letech 1999, 2003, 2005, 2007 a 2014.",
    faq2Q: "Kdo patří mezi největší legendy klubu?", faq2A: "Mezi nejvýraznější jména patří Tim Duncan, David Robinson, Manu Ginóbili, Tony Parker a George Gervin.",
    faq3Q: "Co znamená „Krásná hra“?", faq3A: "Jde o označení týmového stylu založeného na rychlém pohybu míče, prostoru, chytrých rozhodnutích a hledání nejlepší střely.",
    faq4Q: "Je tento web oficiální?", faq4A: "Ne. Jde o nekomerční školní fanouškovský projekt bez oficiálního spojení s NBA nebo San Antonio Spurs.",
    ctaKicker: "Do toho, Spurs!", ctaTitleA: "Staň se součástí", ctaTitleB: "příběhu",
    ctaText: "Objev tým, který ukázal, že dlouhodobý úspěch začíná důvěrou, charakterem a ochotou sdílet míč.",
    footerDisclaimer: "Neoficiální vzdělávací fanouškovský projekt. Není spojen s NBA ani San Antonio Spurs.",
    footerExplore: "Prozkoumat", footerProject: "Projekt", documentation: "Dokumentace", schoolProject: "Školní webová prezentace", footerSlogan: "Stříbrná. Černá. Společně."
  },
  en: {
    skip: "Skip to main content", openMenu: "Open navigation", closeMenu: "Close navigation",
    mainNav: "Main navigation", openSettings: "Open settings", closeSettings: "Close settings",
    themeToggle: "Switch color theme", languageGroup: "Language selection", backTop: "Back to top",
    heroImage: "Black and silver basketball arena with a ball on the court", footerNav: "Footer navigation",
    brandHome: "Spurs Fan Experience, home", brandBack: "Spurs Fan Experience, back to top", clubStats: "Key club statistics",
    navTeam: "Team", navHistory: "History", navLegends: "Legends", navCulture: "Culture", navFaq: "FAQ",
    explore: "Explore the Spurs", settings: "Settings", appearance: "Appearance",
    appearanceHelp: "Light or dark mode", language: "Language", languageHelp: "Website content language",
    heroKicker: "Built different", fanProject: "Fan-made school microsite", heroSlogan: "Team first. Always.",
    heroLead: "Five championships, generations of legends and a basketball culture built on trust, discipline and intelligent team play.",
    discoverHistory: "Discover the history", founded: "organization founded", championships: "NBA champion", areaCode: "San Antonio area code",
    identityKicker: "Silver & Black", identityTitleA: "More than", identityTitleB: "basketball",
    identityText1: "The Spurs have represented San Antonio since 1973. The club built a reputation for putting the team above the individual and long-term work above quick fixes.",
    identityText2: "Black, white and silver are more than colors. They express simplicity, focus and the team's professional identity.",
    identityQuote: "A good pass creates another good pass.",
    titlesKicker: "Championship standard", titlesTitleA: "Five times", titlesTitleB: "on top",
    titlesIntro: "Each title belongs to a different chapter, but all share the same DNA: defense, patience and team accountability.",
    title1999: "First title", title2003: "A new era", title2005: "Seven-game battle", title2007: "Dominant run", title2014: "Beautiful Game",
    historyKicker: "From the ABA to five rings", historyTitleA: "A history that", historyTitleB: "stays connected",
    historyIntro: "From the move to San Antonio through the first title to the basketball masterclass of 2014. The Spurs grew through continuity and a clear philosophy.",
    history1973Title: "Arrival in San Antonio", history1973Text: "The Dallas Chaparrals move and become the San Antonio Spurs.",
    history1976Title: "Joining the NBA", history1976Text: "The Spurs enter the NBA together with other former ABA clubs.",
    history1997Title: "Tim Duncan", history1997Text: "The first draft pick changes the future of the entire organization.",
    history1999Title: "The first ring", history1999Text: "San Antonio wins its first title and confirms the power of the Twin Towers.",
    history2014Title: "Beautiful Game", history2014Text: "Ball movement and team chemistry peak with a fifth championship.",
    history2023Title: "A new chapter", history2023Text: "Victor Wembanyama arrives as the first pick in the draft.",
    legendsKicker: "The Big Three", legendsTitleA: "Legends of", legendsTitleB: "one era",
    legendsIntro: "Three different basketball personalities who complemented each other for almost two decades.",
    duncanPosition: "PF / C", duncanText: "A quiet leader, defensive foundation and the face of five championship teams.", duncanTag: "The Big Fundamental",
    parkerPosition: "PG", parkerText: "Speed, paint penetration and control of the game's tempo.", parkerTag: "Finals MVP 2007",
    manuPosition: "SG", manuText: "Creativity, courage and the energy of a star who embraced the sixth-man role.", manuTag: "Fearless competitor",
    futureKicker: "The next chapter", futureTitleA: "The future wears", futureTitleB: "number 1", futureRole: "center / forward",
    futureText: "The first pick of the 2023 draft brought San Antonio a rare combination of size, movement, shooting and defensive instinct. He symbolizes a new era rooted in Spurs team values.",
    traitReach: "Reach", traitReachText: "Rim protection", traitSkill: "Skill", traitSkillText: "Perimeter game", traitVision: "Vision", traitVisionText: "Reading the game",
    heightKicker: "How tall is Wemby?", heightTitleA: "Compare your", heightTitleB: "height",
    heightIntro: "Enter your height and see the true scale next to Victor Wembanyama.",
    heightLabel: "Your height", heightHelp: "Allowed range: 80–250 cm.", unitGroup: "Height unit selection",
    unitCm: "cm", unitInch: "inches", wembyHeight: "224 cm / 7 ft 4 in", wembyHeightShort: "224 cm / 7 ft 4 in",
    you: "You:", heightVisual: "Visual height comparison",
    wembyPhotoAlt: "Victor Wembanyama standing upright in a black Spurs uniform holding a basketball",
    userSilhouette: "Modern realistic athletic user silhouette",
    heightGuide: "Your height",
    heightNote: "Both figures share one baseline and their heights use an exact proportional scale based on Victor's 224 cm.",
    heightError: "Enter a height within the allowed range.",
    victorTaller: "Victor is {value} cm taller than you.",
    userTaller: "You are {value} cm taller than Victor.",
    sameHeight: "You are the same height as Victor.",
    heightPercentage: "You are {value}% of Victor's height.",
    cultureKicker: "Why Spurs?", cultureTitleA: "Culture before", cultureTitleB: "ego",
    cultureIntro: "Spurs success is not built around a single star. It comes from how the organization thinks, selects players and builds its bond with the city.",
    culture1Title: "Team first", culture1Text: "The ball moves faster than a player. The right decision matters more than an individual statistic.",
    culture2Title: "Continuity", culture2Text: "Stable values allowed different generations to build on the same basketball foundation.",
    culture3Title: "Global vision", culture3Text: "The Spurs have long searched for talent and inspiration far beyond the United States.",
    culture4Title: "San Antonio", culture4Text: "The club and city share pride, community and the unmistakable identity of area code 210.",
    galleryKicker: "Silver & Black atmosphere", galleryTitleA: "Home-court", galleryTitleB: "energy",
    galleryArenaAlt: "Black and silver basketball arena before a game", silverBallAlt: "Stylized silver basketball",
    fiveTitlesAlt: "Five abstract championship symbols", galleryArenaTitle: "Game Night", galleryArenaText: "Lights, hardwood, area code 210",
    galleryDetailTitle: "Silver standard", galleryDetailText: "Simplicity with character", galleryRingsTitle: "Five championships",
    factsKicker: "Did you know?", factsTitleA: "Spurs by", factsTitleB: "the numbers",
    fact1Title: "straight seasons", fact1Text: "The 1998–2019 playoff streak tied the NBA record.",
    fact2Title: "Big Three countries", fact2Text: "Duncan, Parker and Ginóbili represented the U.S. Virgin Islands, France and Argentina.",
    fact3Title: "Twin Towers", fact3Text: "David Robinson and Tim Duncan formed one of basketball's most famous frontcourt duos.",
    faqKicker: "Quick answers", faqTitleA: "Frequently asked", faqTitleB: "questions", faqIntro: "Essential facts for new Silver & Black fans.",
    faq1Q: "How many titles have the Spurs won?", faq1A: "San Antonio won five NBA championships: 1999, 2003, 2005, 2007 and 2014.",
    faq2Q: "Who are the club's greatest legends?", faq2A: "The most prominent names include Tim Duncan, David Robinson, Manu Ginóbili, Tony Parker and George Gervin.",
    faq3Q: "What does “Beautiful Game” mean?", faq3A: "It describes a team style based on quick ball movement, spacing, smart decisions and finding the best available shot.",
    faq4Q: "Is this an official website?", faq4A: "No. This is a non-commercial school fan project with no official connection to the NBA or San Antonio Spurs.",
    ctaKicker: "Go Spurs Go", ctaTitleA: "Become part of", ctaTitleB: "the story",
    ctaText: "Discover the team that proved lasting success begins with trust, character and a willingness to share the ball.",
    footerDisclaimer: "Unofficial educational fan project. Not affiliated with the NBA or San Antonio Spurs.",
    footerExplore: "Explore", footerProject: "Project", documentation: "Documentation", schoolProject: "School web presentation", footerSlogan: "Silver. Black. Together."
  }
};

const root = document.documentElement;
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const settingsToggle = document.querySelector(".settings-toggle");
const settingsPanel = document.querySelector("#settings-panel");
const settingsClose = document.querySelector(".settings-close");
const themeToggle = document.querySelector(".theme-toggle");
const languageButtons = document.querySelectorAll("[data-lang]");
let currentLanguage = localStorage.getItem("spurs-language") || "cs";

const text = (key) => translations[currentLanguage][key] || key;

const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", text("openMenu"));
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", text(open ? "openMenu" : "closeMenu"));
  navigation.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const openSettings = () => {
  settingsPanel.hidden = false;
  settingsToggle.setAttribute("aria-expanded", "true");
  settingsToggle.setAttribute("aria-label", text("closeSettings"));
  settingsClose.focus();
};

const closeSettings = (returnFocus = true) => {
  settingsPanel.hidden = true;
  settingsToggle.setAttribute("aria-expanded", "false");
  settingsToggle.setAttribute("aria-label", text("openSettings"));
  if (returnFocus) settingsToggle.focus();
};

settingsToggle.addEventListener("click", () => settingsPanel.hidden ? openSettings() : closeSettings());
settingsClose.addEventListener("click", () => closeSettings());
document.addEventListener("click", (event) => {
  if (!settingsPanel.hidden && !settingsPanel.contains(event.target) && !settingsToggle.contains(event.target)) closeSettings(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    if (!settingsPanel.hidden) closeSettings();
  }
});

const setTheme = (theme) => {
  root.dataset.theme = theme;
  const light = theme === "light";
  themeToggle.setAttribute("aria-checked", String(light));
  document.querySelector('meta[name="theme-color"]').content = light ? "#f3f3f1" : "#090a0c";
  localStorage.setItem("spurs-theme", theme);
};

const storedTheme = localStorage.getItem("spurs-theme");
setTheme(storedTheme || "dark");
themeToggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

const applyLanguage = (language) => {
  currentLanguage = language;
  root.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-label-key]").forEach((element) => {
    element.setAttribute("aria-label", translations[language][element.dataset.labelKey]);
  });
  document.querySelectorAll("[data-alt-key]").forEach((element) => {
    element.alt = translations[language][element.dataset.altKey];
  });
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  menuButton.setAttribute("aria-label", text(menuButton.getAttribute("aria-expanded") === "true" ? "closeMenu" : "openMenu"));
  settingsToggle.setAttribute("aria-label", text(settingsPanel.hidden ? "openSettings" : "closeSettings"));
  const activeUnit = document.querySelector('[data-unit][aria-pressed="true"]')?.dataset.unit || "cm";
  const heightHelp = document.querySelector("#height-help");
  if (heightHelp) {
    heightHelp.textContent = language === "cs"
      ? (activeUnit === "cm" ? "Povolený rozsah: 80–250 cm." : "Povolený rozsah: 31,5–98,4 palce.")
      : (activeUnit === "cm" ? "Allowed range: 80–250 cm." : "Allowed range: 31.5–98.4 inches.");
  }
  document.title = language === "cs" ? "Fanouškovský svět San Antonio Spurs" : "San Antonio Spurs Fan Experience";
  localStorage.setItem("spurs-language", language);
  document.dispatchEvent(new CustomEvent("languagechange"));
};

languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
applyLanguage(currentLanguage);

// Height comparison uses one shared baseline and a strict height / 224 ratio.
const WEMBY_HEIGHT_CM = 224;
const heightInput = document.querySelector("#height-input");
const heightStage = document.querySelector(".height-stage");
const userHeightLabel = document.querySelector("#user-height-label span");
const heightError = document.querySelector("#height-error");
const heightDifference = document.querySelector("#height-difference");
const heightPercentage = document.querySelector("#height-percentage");
const unitButtons = document.querySelectorAll("[data-unit]");
let currentUnit = "cm";

const heightLimits = {
  cm: { min: 80, max: 250, step: 1 },
  in: { min: 31.5, max: 98.4, step: .1 }
};

const updateHeightHelp = () => {
  document.querySelector("#height-help").textContent = currentLanguage === "cs"
      ? (currentUnit === "cm" ? "Povolený rozsah: 80–250 cm." : "Povolený rozsah: 31,5–98,4 palce.")
    : (currentUnit === "cm" ? "Allowed range: 80–250 cm." : "Allowed range: 31.5–98.4 inches.");
};

const updateHeightComparison = () => {
  const rawValue = Number.parseFloat(heightInput.value);
  const heightCm = currentUnit === "cm" ? rawValue : rawValue * 2.54;
  const valid = Number.isFinite(heightCm) && heightCm >= 80 && heightCm <= 250;

  if (!valid) {
    heightError.textContent = text("heightError");
    heightInput.setAttribute("aria-invalid", "true");
    return;
  }

  heightError.textContent = "";
  heightInput.removeAttribute("aria-invalid");
  heightStage.style.setProperty("--user-ratio", String(heightCm / WEMBY_HEIGHT_CM));
  const secondaryUnit = currentLanguage === "cs" ? "palce" : "in";
  const heightInches = (heightCm / 2.54).toLocaleString(currentLanguage === "cs" ? "cs-CZ" : "en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
  userHeightLabel.textContent = `${Math.round(heightCm)} cm / ${heightInches} ${secondaryUnit}`;

  const difference = Math.round(Math.abs(WEMBY_HEIGHT_CM - heightCm));
  if (heightCm < WEMBY_HEIGHT_CM) {
    heightDifference.textContent = text("victorTaller").replace("{value}", difference);
  } else if (heightCm > WEMBY_HEIGHT_CM) {
    heightDifference.textContent = text("userTaller").replace("{value}", difference);
  } else {
    heightDifference.textContent = text("sameHeight");
  }

  const percentage = (heightCm / WEMBY_HEIGHT_CM) * 100;
  const formattedPercentage = percentage.toLocaleString(currentLanguage === "cs" ? "cs-CZ" : "en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
  heightPercentage.textContent = text("heightPercentage").replace("{value}", formattedPercentage);
};

unitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.unit === currentUnit) return;
    const value = Number.parseFloat(heightInput.value);
    const converted = button.dataset.unit === "in" ? value / 2.54 : value * 2.54;
    currentUnit = button.dataset.unit;
    unitButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));

    const limits = heightLimits[currentUnit];
    heightInput.min = limits.min;
    heightInput.max = limits.max;
    heightInput.step = limits.step;
    heightInput.value = currentUnit === "in" ? converted.toFixed(1) : String(Math.round(converted));
    updateHeightHelp();
    updateHeightComparison();
  });
});

heightInput.addEventListener("input", updateHeightComparison);
document.querySelector("#height-form").addEventListener("submit", (event) => event.preventDefault());
document.addEventListener("languagechange", updateHeightComparison);
updateHeightComparison();

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = document.querySelector(`#${button.getAttribute("aria-controls")}`);
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.querySelector("i").textContent = open ? "+" : "−";
    answer.hidden = open;
  });
});

const backToTop = document.querySelector(".back-to-top");
const updateBackToTop = () => backToTop.classList.toggle("is-visible", window.scrollY > 650);
window.addEventListener("scroll", updateBackToTop, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateBackToTop();

// Arena spotlight and a subtle parallax react to pointer movement on capable devices.
const hero = document.querySelector(".hero");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

if (hero && precisePointer.matches && !reducedMotion.matches) {
  let heroFrame;

  hero.addEventListener("pointermove", (event) => {
    if (heroFrame) cancelAnimationFrame(heroFrame);
    heroFrame = requestAnimationFrame(() => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      hero.style.setProperty("--spot-x", `${(x * 100).toFixed(1)}%`);
      hero.style.setProperty("--spot-y", `${(y * 100).toFixed(1)}%`);
      hero.style.setProperty("--parallax-x", `${((.5 - x) * 12).toFixed(1)}px`);
      hero.style.setProperty("--parallax-y", `${((.5 - y) * 8).toFixed(1)}px`);
      hero.classList.add("is-interacting");
    });
  });

  hero.addEventListener("pointerleave", () => {
    hero.classList.remove("is-interacting");
    hero.style.setProperty("--spot-x", "72%");
    hero.style.setProperty("--spot-y", "34%");
    hero.style.setProperty("--parallax-x", "0px");
    hero.style.setProperty("--parallax-y", "0px");
  });
}

// Club numbers count up once when the hero statistics enter the viewport.
const counters = document.querySelectorAll("[data-counter]");
const heroStats = document.querySelector(".hero-stats");
const animateCounter = (counter, delay = 0) => {
  const target = Number(counter.dataset.counter);
  const start = Number(counter.dataset.counterStart || 0);
  const suffix = counter.dataset.counterSuffix || "";
  const duration = 1500;

  window.setTimeout(() => {
    const startedAt = performance.now();
    counter.classList.add("is-counting");

    const update = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${Math.round(start + (target - start) * eased)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.classList.remove("is-counting");
        counter.classList.add("is-counted");
      }
    };

    requestAnimationFrame(update);
  }, delay);
};

if (heroStats && "IntersectionObserver" in window && !reducedMotion.matches) {
  counters.forEach((counter) => {
    const start = Number(counter.dataset.counterStart || 0);
    counter.textContent = `${start}${counter.dataset.counterSuffix || ""}`;
  });

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      counters.forEach((counter, index) => animateCounter(counter, 350 + index * 180));
      counterObserver.unobserve(heroStats);
    });
  }, { threshold: .55 });
  counterObserver.observe(heroStats);
}

// Navigation follows the section currently closest to the top of the viewport.
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const updateActiveNavigation = () => {
  const marker = window.scrollY + window.innerHeight * .32;
  let activeSection = navSections[0];

  navSections.forEach((section) => {
    if (section.offsetTop <= marker) activeSection = section;
  });

  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${activeSection?.id}`;
    if (active) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("resize", updateActiveNavigation);
updateActiveNavigation();

// The history line fills as the visitor moves through the timeline.
const timeline = document.querySelector(".timeline");
const timelineItems = timeline ? [...timeline.querySelectorAll("li")] : [];

const updateTimeline = () => {
  if (!timeline) return;

  const bounds = timeline.getBoundingClientRect();
  const marker = Math.min(Math.max(window.innerHeight * .56 - bounds.top, 0), bounds.height);
  const progress = bounds.height ? (marker / bounds.height) * 100 : 0;
  timeline.style.setProperty("--timeline-progress", `${progress.toFixed(2)}%`);

  timelineItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    item.classList.toggle("is-reached", itemTop <= window.innerHeight * .58);
  });
};

window.addEventListener("scroll", updateTimeline, { passive: true });
window.addEventListener("resize", updateTimeline);
updateTimeline();

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
