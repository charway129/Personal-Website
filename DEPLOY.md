# Live-Schaltung auf Vercel — Schritt für Schritt

Diese Anleitung führt dich vom aktuellen Stand bis zur produktiv erreichbaren Website unter eurer eigenen Domain.

---

## 0 · Voraussetzungen

- Vercel-Account (kostenlos): https://vercel.com/signup — am bequemsten mit GitHub einloggen.
- GitHub-Account (kostenlos): https://github.com/signup
- Zugang zum Dashboard des Domain-Anbieters, bei dem ihr die Domain gekauft habt (Strato/IONOS/Namecheap/etc.).

---

## 1 · Projekt auf GitHub legen

Vercel deployt am einfachsten direkt aus einem GitHub-Repo. Im Terminal im Projektordner:

```bash
cd "/Users/eldridgekaboth/Desktop/enock-site"
git init
git add .
git commit -m "Initial site"
```

Dann auf https://github.com/new ein **privates** Repo erstellen (z. B. `enock-site`) und die zwei Befehle ausführen, die GitHub anzeigt — typischerweise:

```bash
git remote add origin git@github.com:DEIN-USER/enock-site.git
git branch -M main
git push -u origin main
```

---

## 2 · Erstes Deploy auf Vercel

1. Auf https://vercel.com/new gehen.
2. „Import Git Repository" → das eben erstellte Repo auswählen.
3. Vercel erkennt automatisch:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`  (steht in der `vercel.json`)
   - **Output Directory:** `.`
4. „Deploy" klicken.

Nach ca. 30 Sekunden bekommst du eine `*.vercel.app`-URL — das ist schon eine voll funktionierende Vorschau. Dort einmal alles durchklicken (Start, Impressum, Datenschutz, mobile Ansicht).

---

## 3 · Domain mit Vercel verbinden

Im Vercel-Projekt: **Settings → Domains → Add**. Dort die echte Domain eintragen (z. B. `charway.de`).

Vercel zeigt dir dann **eine von zwei Optionen**:

### Variante A — Nameserver auf Vercel umstellen (am einfachsten)

Im Domain-Dashboard die Nameserver ersetzen durch:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

→ Vercel kümmert sich um alles. DNS-Umstellung dauert 5 Min bis ein paar Stunden.

### Variante B — DNS-Records beim aktuellen Anbieter setzen

Wenn die Domain weiter beim Original-Anbieter verwaltet werden soll, dort folgende Einträge anlegen:

| Typ   | Name | Wert                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

Anschließend in Vercel auf „Refresh" klicken. Sobald grüne Häkchen erscheinen, ist die Domain live mit kostenlosem HTTPS (Let's Encrypt).

---

## 4 · Letzte Pflichtarbeit vor dem Bekanntmachen

1. **Sitemap-URL ersetzen.** In `robots.txt` und `sitemap.xml` `DOMAIN-HIER-EINSETZEN` durch die echte Domain ersetzen, committen, pushen — Vercel deployt automatisch.
2. **Open-Graph-URL setzen.** In `index.html` `<meta property="og:url" content="https://charway.de/" />` ergänzen (gibt's noch nicht).
3. **Google Search Console.** Unter https://search.google.com/search-console die Domain hinzufügen und die `sitemap.xml` einreichen — damit Google die Seite indexiert.

---

## 5 · Was noch offen ist (manuell vom Künstler zu erledigen)

- **E-Mail-Adresse mit eigener Domain.** Im Domain-Dashboard ein Postfach `kontakt@charway.de` o. ä. anlegen und die `mailto:`-Links in `index.html`, `impressum.html`, `datenschutz.html` von `hernneylil@gmail.com` auf die neue Adresse umstellen.
- **Zwei Bilder noch optimieren.** Zwei der großen PNGs (`works/02-butterfly-no-1.png` und `works/portrait-charway.png`) konnten in dieser Session nicht in WebP umgewandelt werden — sie werden aktuell als PNG ausgeliefert. Sobald du Zeit hast, ein Tool wie https://squoosh.app/ (Browser-basiert, läuft lokal) öffnen, die zwei PNGs reinziehen, als WebP (Quality ~82) exportieren, in `works/` ablegen, dann in `index.html` die zwei `src="works/02-butterfly-no-1.png"` und `src="works/portrait-charway.png"` auf `.webp` ändern.
- **Favicon-PNG.** Das aktuelle `apple-touch-icon.png` und `favicon.ico` sind funktional, aber simpel. Falls Enock ein hübscheres Logo hat, einfach die Dateien austauschen (gleicher Name).
- **Open-Graph-Bild.** Das `og-image.jpg` ist ein einfacher Platzhalter — schöner wäre eines der echten Werke als Vorschaubild (1200×630 px).

---

## 6 · Updates später deployen

Jede Änderung am Code wird live, sobald du sie nach GitHub pushst:

```bash
git add .
git commit -m "Neues Werk hinzugefügt"
git push
```

Vercel baut automatisch neu und deployt innerhalb von ~30 Sekunden.
