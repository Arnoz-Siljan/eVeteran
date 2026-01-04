# GDPR Elementi v eVeteran Prototipih

Dokument opisuje implementirane elemente varstva osebnih podatkov (GDPR) v digitalni rešitvi eVeteran.

---

## 1. Osebni podatki, ki se zbirajo in obdelujejo

### Lokacija v prototipih
- **Obrazec za novo vlogo:** `/vloga/nova` (Koraki 1-2)
- **Podrobna izjava:** `/zasebnost` → razdelek 2

### Zbrani podatki

#### Identifikacijski podatki (Korak 1)
- Ime in priimek
- Datum rojstva
- Naslov stalnega prebivališča
- Telefonska številka
- Elektronski naslov (e-pošta)

#### Podatki o vojaški službi (Korak 2)
- Vrsta veteranstva (bojevnik, mirovne misije, vojaška služba)
- Obdobje službe (leta)
- Vojaška enota
- Razlog za pridobitev statusa

#### Dokumentacija (Korak 3)
- Potrdila o službi
- Spričevala in druga dokazila
- Fotografije dokumentov (PDF, JPG, PNG, DOC)

### Avtomatsko pridobljeni podatki
- Preverjanje identitete iz Centralnega registra prebivalstva (CRP)
- Preverjanje vojaških podatkov v evidencah MORS

---

## 2. Način obveščanja uporabnika o obdelavi podatkov

### Lokacija v prototipih
- **Primarno obvestilo:** Obrazec `/vloga/nova` → Korak 4 (rumeni info box)
- **Podrobne informacije:** `/zasebnost`

### Vsebina obvestila

**V obrazcu (pred oddajo):**
```
"Vaše osebne podatke (ime, priimek, datum rojstva, naslov, kontaktni podatki, 
podatki o vojaški službi) bo obdeloval Ministrstvo za obrambo RS za namen 
obdelave vaše vloge za status veterana. Podatki se posredujejo v Centralni 
register prebivalstva za preverjanje identitete."
```

**Dodatno:**
- Povezava do celotne izjave o zasebnosti
- Jasna navedba upravljavca (MORS)
- Namen obdelave
- Prejemniki podatkov (CRP)

---

## 3. Privolitev uporabnika

### Lokacija v prototipih
- **Obrazec:** `/vloga/nova` → Korak 4 (na dnu strani)

### Implementacija

**Obvezni checkbox:**
```
☐ Potrjujem, da sem seznanjen/a z izjavo o zasebnosti in se strinjam 
  z obdelavo mojih osebnih podatkov za namen obravnave vloge za status veterana. *
```

**Funkcionalnost:**
- Checkbox je **obvezen** - brez potrditve ni mogoče oddati vloge
- Gumb "Oddaj vlogo" je onemogočen (`disabled`), dokler uporabnik ne potrdi
- Vključena direktna povezava do izjave o zasebnosti
- Opomba: "Brez privolitve vloge ni mogoče oddati"

**Pravna podlaga:**
Kljub temu, da obdelava temelji na javni nalogi, privolitev služi kot dodatna transparentnost in potrditev, da je uporabnik seznanjen z obdelavo.

---

## 4. Izjava o zasebnosti

### Lokacija v prototipih
- **URL:** `/zasebnost`
- **Dostop:** Link v footerju ("Izjava o zasebnosti") + v obrazcu v koraku 4

### Vsebina izjave

Izjava vsebuje vse obvezne elemente po GDPR (člen 13):

1. **Uvod**
   - Identiteta upravljavca (MORS)
   - Sklicevanje na GDPR in ZVOP-2

2. **Osebni podatki, ki jih zbiramo**
   - Identifikacijski podatki
   - Kontaktni podatki
   - Podatki o vojaški službi
   - Dokumentacija

3. **Namen in pravna podlaga obdelave**
   - Namen: obdelava vloge, preverjanje podatkov, komunikacija, arhiviranje
   - Pravna podlaga: javna naloga (člen 6(1)(e)) in zakonske obveznosti (člen 6(1)(c))

4. **Prejemniki osebnih podatkov**
   - MORS (odločanje)
   - CRP (preverjanje identitete)
   - Ponudniki storitev gostovanja v EU

5. **Obdobje hrambe**
   - Trajno arhiviranje dokumentacije (skladno s predpisi)
   - Kontaktni podatki: 5 let po zaključku

6. **Pravice posameznika**
   - Pravica dostopa
   - Pravica do popravka
   - Pravica do izbrisa
   - Pravica do ugovora

7. **Kontakt**
   - Podatki upravljavca
   - Kontakt DPO (pooblaščena oseba)
   - Možnost pritožbe pri IP RS

---

## 5. Izjava o uporabi piškotkov

### Lokacija v prototipih
- **URL:** `/piskotki`
- **Cookie banner:** Pojavi se ob prvem obisku strani (na dnu zaslona)
- **Dostop:** Link v footerju ("Piškotki")

### Cookie banner

**Funkcionalnost:**
- Pojavi se ob prvem obisku
- Vsebuje kratek opis uporabe piškotkov
- Povezavi do izjave o piškotkih in zasebnosti
- 2 možnosti:
  - **"Samo nujni"** - shrani samo nujne piškotke
  - **"Sprejmi vse"** - omogoči tudi analitične piškotke

**Shranjevanje izbire:**
```javascript
localStorage: {
  necessary: true/false,
  analytics: true/false,
  timestamp: "2026-01-04T..."
}
```

### Vsebina izjave o piškotkih

**1. Kaj so piškotki**
- Razlaga pojma

**2. Vrste piškotkov**

*Nujno potrebni (ne potrebujejo privolitve):*
- `session_id` - identifikacija seje
- `cookie_consent` - shranjevanje izbire
- `csrf_token` - varnostni žeton

*Analitični (potrebujejo privolitev):*
- `_analytics` - statistika obiskov (anonimizirana, 30 dni)

**3. Upravljanje piškotkov**
- Možnost spremembe odločitve
- Link na nastavitve v footerju

**4. Nastavitve brskalnika**
- Navodila za Chrome, Firefox, Safari, Edge

---

## Povzetek implementacije

| Element GDPR | Implementirano | Lokacija |
|--------------|----------------|----------|
| Seznam osebnih podatkov | ✅ | Obrazec + `/zasebnost` |
| Obveščanje uporabnika | ✅ | Korak 4 obrazca (info box) |
| Privolitev | ✅ | Korak 4 obrazca (obvezni checkbox) |
| Izjava o zasebnosti | ✅ | `/zasebnost` + footer link |
| Izjava o piškotkih | ✅ | `/piskotki` + cookie banner |

---

## Navodila za pregled

Za pregled vseh elementov obiščite live prototip:
**https://arnoz-siljan.github.io/eVeteran/**

### Testni scenarij:

1. **Domača stran** → Preveri cookie banner na dnu
2. **Klikni "Oddaj vlogo"** → Poglej zbiranje podatkov v korakih 1-3
3. **Korak 4** → Preveri info box in privolitev checkbox
4. **Footer** → Klikni "Izjava o zasebnosti" in "Piškotki"

---

**Datum:** Januar 2026  
**Verzija prototipa:** 1.0  
**Skladno z:** GDPR (Uredba 2016/679) in ZVOP-2
