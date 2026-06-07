# San Antonio Spurs Fan Experience

## Úvod

**San Antonio Spurs Fan Experience** je jednostránková fanouškovská webová prezentace věnovaná basketbalovému týmu San Antonio Spurs. Projekt představuje historii klubu, největší legendy organizace a současnou budoucnost týmu v podobě Victora Wembanyamy.

**Živá verze projektu:**

https://ondrejvdf.github.io/San-Antonio-Spurs/

---

# Použité technologie

* HTML5
* CSS3
* JavaScript (ES6)
* SVG grafika
* GitHub Pages
* GitHub

**Vývojové prostředí**

* Visual Studio Code 1.100+
* Live Server Extension
* Google Chrome

---

# Adresářová struktura

```text
San-Antonio-Spurs/
│
├── index.html
├── style.css
├── main.js
├── favicon.svg
│
├── spurs-hero.webp
├── tim-duncan.png
├── tony-parker.png
├── manu-ginobili.png
├── victor-future.png
├── wembanyama-transparent.png
│
├── desktop-placeholder.svg
├── mobile-placeholder.svg
│
├── robots.txt
├── sitemap.xml
└── README.md
```

---

# Technický rozbor optimalizací

## 1. Responzivní design

### Teorie

Web se musí správně zobrazovat na desktopu, tabletu i mobilním zařízení. Pro dosažení responzivity byly použity CSS Grid, Flexbox a Media Queries.

### Ukázka kódu

```css
.legend-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}
```

### Vysvětlení

Počet sloupců se automaticky přizpůsobuje šířce obrazovky a zachovává použitelnost na všech zařízeních.

---

## 2. Optimalizace obrázků

### Teorie

Obrázky představují největší objem přenášených dat. Proto byly použity moderní formáty a optimalizované rozměry.

### Ukázka kódu

```html
<img src="spurs-hero.webp" alt="San Antonio Spurs">
```

### Vysvětlení

Formát WebP výrazně snižuje velikost souboru při zachování kvality.

---

## 3. Přístupnost (Accessibility)

### Teorie

Web musí být použitelný i pro uživatele s asistivními technologiemi.

### Ukázka kódu

```html
<img src="tim-duncan.png" alt="Tim Duncan">
```

### Vysvětlení

Alternativní text umožňuje čtečkám obrazovky správně interpretovat obsah.

---

## 4. Optimalizace SEO

### Teorie

Správné meta informace pomáhají vyhledávačům porozumět obsahu stránky.

### Ukázka kódu

```html
<meta name="description"
content="Fanouškovská prezentace San Antonio Spurs">
```

### Vysvětlení

Vyhledávače získávají stručný popis obsahu webu.

---

## 5. Minimalizace HTTP požadavků

### Teorie

Menší počet načítaných souborů znamená rychlejší načtení stránky.

### Ukázka kódu

```html
<link rel="stylesheet" href="style.css">
<script src="main.js"></script>
```

### Vysvětlení

Projekt používá pouze jeden CSS a jeden JavaScript soubor.

---

## 6. Dark / Light Mode

### Teorie

Moderní weby umožňují přepínání vzhledu podle preferencí uživatele.

### Ukázka kódu

```javascript
document.documentElement.dataset.theme = theme;
```

### Vysvětlení

Přepnutí atributu automaticky mění CSS proměnné definující vzhled stránky.

---

# AI Deník

Během vývoje byly využívány generativní AI nástroje pro návrh designu, optimalizaci kódu a tvorbu textového obsahu.

## Příklady promptů

### Prompt 1

```text
Navrhni moderní fanouškovský web pro San Antonio Spurs
v černo-stříbrném stylu NBA.
```

Výsledek:
Návrh vizuální identity projektu.

---

### Prompt 2

```text
Vytvoř responzivní CSS Grid pro karty basketbalových legend.
```

Výsledek:
Optimalizované rozložení sekce legend.

---

### Prompt 3

```text
Navrhni porovnání výšky uživatele s Victorem Wembanyamou.
```

Výsledek:
Interaktivní sekce s výškovým srovnáním.

---

### Prompt 4

```text
Vytvoř tmavý a světlý režim pomocí CSS proměnných.
```

Výsledek:
Plně funkční přepínání vzhledu stránky.

---

# Instalace a spuštění

## Stažení projektu

```bash
git clone https://github.com/ondrejvdf/San-Antonio-Spurs.git
```

## Otevření ve VS Code

```bash
code .
```

## Spuštění

1. Nainstalovat rozšíření Live Server.
2. Kliknout pravým tlačítkem na `index.html`.
3. Vybrat **Open with Live Server**.

Projekt se otevře v prohlížeči na lokální adrese:

```text
http://127.0.0.1:5500
```



