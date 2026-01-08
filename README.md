# eVeteran - Digitalni portal za veterane

Spletna aplikacija za slovensko Ministrstvo za obrambo (MORS), ki omogoča veteranom prijavo za veteranski status.

## Funkcionalnosti

-  **Prijava za status**: Večstopenjski obrazec za prijavo veteranskega statusa
-  **Nalaganje dokumentov**: Digitalno nalaganje potrebne dokumentacije
-  **Sledenje statusu**: Preverjanje statusa prijave v realnem času
-  **Administratorski panel**: Pregled in odločanje o prijavah (MORS)
-  **Obvestila**: Sistem obvestil za spremembe statusa
-  **Responsive**: Prilagojeno za mobilne naprave in namizja

## Tehnologije

- **React** - UI framework
- **TypeScript** - Tipska varnost
- **React Router** - Navigacija
- **Tailwind CSS** - Stiliranje
- **Radix UI** - UI komponente
- **Lucide React** - Ikone
- **Vite** - Build tool

## Deployment na GitHub Pages

### 1. Priprava repozitorija

1. Ustvarite nov GitHub repozitorij z imenom `eVeteran` (ali poljubno drugo ime)
2. Naložite vso kodo v repozitorij:

```bash
git init
git add .
git commit -m "Initial commit - eVeteran aplikacija"
git branch -M main
git remote add origin https://github.com/VAŠE-USERNAME/eVeteran.git
git push -u origin main
```

### 2. Nastavitev GitHub Pages

1. Pojdite na vaš GitHub repozitorij
2. Kliknite na **Settings** (Nastavitve)
3. V levem meniju izberite **Pages**
4. Pod **Source** izberite **GitHub Actions**

### 3. Posodobitev base poti

 **POMEMBNO**: V datoteki `vite.config.ts` posodobite `base` vrednost:

```typescript
// Če je vaš repo: https://github.com/username/eVeteran
base: process.env.GITHUB_PAGES ? '/eVeteran/' : '/',

// Če uporabljate username.github.io repozitorij:
base: process.env.GITHUB_PAGES ? '/' : '/',
```

### 4. Avtomatski deployment

Ko potisnete kodo v `main` branch, se bo avtomatsko sprožil GitHub Actions workflow, ki bo:
1. Namestil odvisnosti
2. Zgradil aplikacijo
3. Deployal na GitHub Pages

Vaša aplikacija bo dostopna na:
```
https://VAŠE-USERNAME.github.io/eVeteran/
```

### 5. Ročni deployment (opcijsko)

Če želite ročno deployati, lahko uporabite:

```bash
npm run deploy
```

## Lokalni razvoj

```bash
# Namestitev odvisnosti
npm install

# Zagon razvojnega strežnika
npm run dev

# Build produkcijske verzije
npm run build

# Predogled produkcijske verzije
npm run preview
```

## Testni uporabniki

### Admin dostop
- **Email**: admin@mors.si
- **Geslo**: admin123

### Demo podatki
Aplikacija uporablja mock podatke za prikaz funkcionalnosti.

## Struktura projekta

```
eVeteran/
├── src/
│   ├── app/
│   │   ├── components/    # React komponente
│   │   │   └── ui/       # UI komponente (gumbi, obrazci, itd.)
│   │   ├── pages/        # Strani aplikacije
│   │   │   ├── Home.tsx
│   │   │   ├── NewApplication.tsx
│   │   │   ├── ApplicationStatus.tsx
│   │   │   └── AdminDashboard.tsx
│   │   ├── App.tsx       # Glavna aplikacijska komponenta
│   │   └── routes.ts     # Routing konfiguracija
│   └── styles/           # CSS datoteke
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
└── vite.config.ts        # Vite konfiguracija
```



