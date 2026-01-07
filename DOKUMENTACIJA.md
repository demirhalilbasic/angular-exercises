# Angular Vježbe - Dokumentacija

## Pregled Projekta

Ovaj projekat predstavlja kompletan primjer Angular aplikacije razvijene tokom vježbi 2 i 3 iz Web Programiranja. Aplikacija demonstrira osnovne i napredne koncepte Angular framework-a, uključujući komponente, rutiranje, direktive i data binding.

---

## 📋 Sadržaj

1. [Vježbe 1 - Instalacija](#vježbe-1---instalacija)
2. [Vježbe 2 - Komponente i Rutiranje](#vježbe-2---komponente-i-rutiranje)
3. [Vježbe 3 - Direktive i Data Binding](#vježbe-3---direktive-i-data-binding)
4. [Struktura Projekta](#struktura-projekta)
5. [Pokretanje Aplikacije](#pokretanje-aplikacije)

---

## Vježbe 1 - Instalacija

### Šta smo uradili:

1. **Instalacija Chocolatey** (Windows package manager)
2. **Instalacija Node.js** preko Chocolatey
3. **Instalacija Angular CLI** globalno
4. **Kreiranje novog Angular projekta**

### Komande koje smo koristili:

```powershell
# Instalacija Chocolatey (Run as Administrator)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Instalacija Node.js
choco install nodejs-lts -y

# Instalacija Angular CLI
npm install -g @angular/cli

# Kreiranje Angular projekta
ng new angular_vjezbe
```

---

## Vježbe 2 - Komponente i Rutiranje

### 🎯 Cilj Vježbi

Implementirati Single Page Application (SPA) sa komponentama, rutiranjem i navigacijom.

### Step-by-Step Implementacija

#### Korak 1: Kreiranje Komponenti

Kreirali smo 4 osnovne komponente koristeći Angular CLI:

```bash
ng generate component nav-bar --skip-tests
ng generate component footer --skip-tests
ng generate component home --skip-tests
ng generate component about --skip-tests
```

**Rezultat:**

- `src/app/nav-bar/` - Navigaciona traka
- `src/app/footer/` - Footer sa copyright informacijom
- `src/app/home/` - Početna stranica
- `src/app/about/` - O nama stranica

#### Korak 2: Konfiguracija Rutiranja

**Fajl: `src/app/app.routes.ts`**

```typescript
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home }, // Default ruta
  { path: 'about', component: About }, // /about ruta
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback
];
```

**Ključni koncepti:**

- `path: ''` - default ruta (home page)
- `component` - komponenta koja se prikazuje za tu rutu
- `path: '**'` - catch-all ruta za nepostojeće stranice

#### Korak 3: Implementacija NavBar Komponente

**Fajl: `src/app/nav-bar/nav-bar.html`**

```html
<nav class="navbar">
  <div class="nav-container">
    <h2 class="nav-logo">Angular Vježbe</h2>
    <ul class="nav-menu">
      <li class="nav-item">
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}"
          class="nav-link"
          >Početna</a
        >
      </li>
      <li class="nav-item">
        <a routerLink="/about" routerLinkActive="active" class="nav-link">O nama</a>
      </li>
    </ul>
  </div>
</nav>
```

**Ključne direktive:**

- `routerLink` - Angular direktiva za navigaciju (zamjenjuje `href`)
- `routerLinkActive` - automatski dodaje CSS klasu kada je ruta aktivna
- `[routerLinkActiveOptions]="{exact: true}"` - tačno podudaranje rute (za home)

**Fajl: `src/app/nav-bar/nav-bar.ts`**

```typescript
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {}
```

**CSS (nav-bar.css):**

- Moderna navigaciona traka sa hover efektima
- Aktivni link se highlightuje plavom bojom
- Responzivni dizajn

#### Korak 4: Implementacija Footer Komponente

**Fajl: `src/app/footer/footer.html`**

```html
<footer class="footer">
  <div class="footer-container">
    <p>&copy; 2024 Demir (Vaše ime i prezime)</p>
  </div>
</footer>
```

**Napomena:** `&copy;` je HTML entitet za © simbol

#### Korak 5: Implementacija Home Komponente

**Fajl: `src/app/home/home.html`**

```html
<div class="home-container">
  <h1>Dobrodošli u Angular Vježbe!</h1>
  <p class="welcome-message">Ovo je početna stranica naše Angular aplikacije.</p>
  <p>Ovdje vježbamo komponente, rutiranje i Single Page Applications (SPA).</p>
</div>
```

**Karakteristike:**

- Pozdravna poruka
- Jednostavan i čist dizajn
- Centriran sadržaj

#### Korak 6: Implementacija About Komponente

**Fajl: `src/app/about/about.html`**

```html
<div class="about-container">
  <h1>O nama</h1>

  <section class="about-section">
    <h2>Naša Misija</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate...</p>
  </section>

  <section class="about-section">
    <h2>Naša Vizija</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error...</p>
    <p>Nemo enim ipsam voluptatem quia voluptas sit...</p>
  </section>
</div>
```

**Karakteristike:**

- Dva naslova sa po dva Lorem Ipsum paragrafa
- Struktuiran sadržaj u sekcije

#### Korak 7: Integracija u App Komponentu

**Fajl: `src/app/app.html`**

```html
<app-nav-bar></app-nav-bar>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

**Objašnjenje:**

- `<app-nav-bar>` - uvijek prisutna navigacija
- `<router-outlet>` - placeholder gdje se prikazuju rutirane komponente
- `<app-footer>` - uvijek prisutan footer

**Fajl: `src/app/app.ts`**

```typescript
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_vjezbe');
}
```

**Napomena:** U Angular standalone komponentama, moramo eksplicitno importovati sve komponente koje koristimo.

#### Korak 8: Globalni Stilovi

**Fajl: `src/styles.css`**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

html,
body {
  height: 100%;
}
```

### ✅ Rezultat Vježbi 2

- ✅ SPA aplikacija sa rutiranjem
- ✅ 4 funkcionalne komponente
- ✅ Navigacija bez refresh-a stranice
- ✅ Moderna UI sa CSS stilovima
- ✅ Footer koji ostaje na dnu stranice

---

## Vježbe 3 - Direktive i Data Binding

### 🎯 Cilj Vježbi

Implementirati Angular direktive (strukturne, atributske i custom) i sve vrste data binding-a.

### Step-by-Step Implementacija

#### Korak 1: Kreiranje Demo Komponenti

```bash
ng generate component directives-demo --skip-tests
ng generate component data-binding-demo --skip-tests
```

#### Korak 2: Ažuriranje Rutiranja

**Fajl: `src/app/app.routes.ts`**

```typescript
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'directives', component: DirectivesDemo },
  { path: 'data-binding', component: DataBindingDemo },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
```

#### Korak 3: Ažuriranje Navigacije

Dodali smo nove linkove u NavBar:

- Direktive (`/directives`)
- Data Binding (`/data-binding`)

### 🔧 Strukturne Direktive

#### 1. \*ngIf - Uslovni Prikaz

**Implementacija:**

```typescript
// TypeScript
isVisible = true;

toggleVisibility() {
  this.isVisible = !this.isVisible;
}
```

```html
<!-- HTML -->
<p *ngIf="isVisible">Ovaj tekst je vidljiv!</p>
<button (click)="toggleVisibility()">Promijeni vidljivost</button>
```

**Kako radi:**

- Element se prikazuje samo ako je uslov `true`
- Element se potpuno uklanja iz DOM-a kada je `false`
- Ne samo sakrivanje (kao `display: none`), već fizičko uklanjanje

#### 2. \*ngFor - Iteracija Kroz Niz

**Implementacija:**

```typescript
// TypeScript
items = ['Prvi', 'Drugi', 'Treći', 'Četvrti', 'Peti'];
```

```html
<!-- HTML -->
<ul>
  <li *ngFor="let item of items; index as i">{{ i + 1 }}. {{ item }}</li>
</ul>
```

**Ključne riječi:**

- `let item of items` - iteracija kroz niz
- `index as i` - dobijanje indexa (opciono)
- Može se koristiti `first`, `last`, `even`, `odd`

#### 3. \*ngSwitch - Višestruki Uslov

**Implementacija:**

```typescript
// TypeScript
boja = 'crvena';

promijeniBoju(novaBoja: string) {
  this.boja = novaBoja;
}
```

```html
<!-- HTML -->
<div [ngSwitch]="boja">
  <p *ngSwitchCase="'crvena'">Odabrali ste crvenu boju.</p>
  <p *ngSwitchCase="'plava'">Odabrali ste plavu boju.</p>
  <p *ngSwitchDefault>Odabrali ste neku drugu boju.</p>
</div>
```

**Kako radi:**

- Slično `switch` statement-u u programiranju
- Prikazuje samo jedan case koji se poklapa
- `*ngSwitchDefault` je fallback opcija

### 🎨 Atributske Direktive

#### 4. ngClass - Dinamičke CSS Klase

**Implementacija:**

```typescript
// TypeScript
isCrveno = true;

toggleBoju() {
  this.isCrveno = !this.isCrveno;
}
```

```html
<!-- HTML -->
<p [ngClass]="{ 'crveni-tekst': isCrveno, 'plavi-tekst': !isCrveno }">
  Ovo je dinamički stiliziran tekst.
</p>
```

```css
/* CSS */
.crveni-tekst {
  color: red;
  font-weight: bold;
}

.plavi-tekst {
  color: blue;
  font-weight: bold;
}
```

**Sintaksa:**

- `[ngClass]="{ 'klasa': uslov }"` - objekt sa uslovim
- Može se dodati više klasa istovremeno
- Klasa se primjenjuje samo ako je uslov `true`

#### 5. ngStyle - Inline Stilovi

**Implementacija:**

```typescript
// TypeScript
fontSize = 16;
stilBoja = 'black';

promijeniStil() {
  this.fontSize = this.fontSize === 16 ? 24 : 16;
  this.stilBoja = this.stilBoja === 'black' ? 'green' : 'black';
}
```

```html
<!-- HTML -->
<p [ngStyle]="{ 'font-size': fontSize + 'px', 'color': stilBoja }">
  Ovo je dinamički stiliziran tekst.
</p>
```

**Karakteristike:**

- Postavlja inline stilove
- Omogućava dinamičko mijenjanje vrijednosti
- Korisno za animacije i responsive dizajn

### 🛠️ Custom Direktiva

#### 6. appHighlight - Vlastita Direktiva

**Kreiranje:**

```bash
ng generate directive highlight --skip-tests
```

**Implementacija: `src/app/highlight.ts`**

```typescript
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }
}
```

**Upotreba:**

```html
<p appHighlight>Pređi mišem preko ovog teksta!</p>
```

**Ključni koncepti:**

- `@Directive` - dekorator za kreiranje direktive
- `ElementRef` - pristup DOM elementu
- `Renderer2` - siguran način manipulacije DOM-om
- `@HostListener` - osluškivanje događaja na host elementu
- `selector: '[appHighlight]'` - atributni selektor

**Kako radi:**

1. Korisnik pređe mišem preko elementa
2. `mouseenter` event se triggeruje
3. Poziva se `onMouseEnter()` metoda
4. Pozadina se mijenja u žutu
5. Korisnik ukloni miš
6. `mouseleave` event se triggeruje
7. Pozadina se vraća na transparent

### 📊 Data Binding

#### 1. Interpolation (Komponenta → Template)

**Implementacija:**

```typescript
// TypeScript
naslov: string = 'Dobrodošli u Data Binding Demo!';
trenutnoVrijeme: string = new Date().toLocaleTimeString();
```

```html
<!-- HTML -->
<h1>{{ naslov }}</h1>
<p>Trenutno vrijeme: {{ trenutnoVrijeme }}</p>
```

**Karakteristike:**

- Jednosmjerni data binding
- Prikazuje podatke iz komponente u template-u
- Automatski se ažurira kada se vrijednost promijeni
- Koristi `{{ }}` sintaksu

#### 2. Property Binding (Komponenta → Template)

**Implementacija:**

```typescript
// TypeScript
slikaUrl: string = 'https://example.com/slika.jpg';
isDisabled: boolean = false;
```

```html
<!-- HTML -->
<img [src]="slikaUrl" alt="Primjer" />
<input type="text" [disabled]="isDisabled" />
```

**Karakteristike:**

- Postavlja HTML atribute/svojstva
- Koristi `[property]="value"` sintaksu
- Može se koristiti za bilo koje HTML svojstvo

#### 3. Event Binding (Template → Komponenta)

**Implementacija:**

```typescript
// TypeScript
brojKlikova: number = 0;

klikniMe() {
  this.brojKlikova++;
}
```

```html
<!-- HTML -->
<button (click)="klikniMe()">Klikni me!</button>
<p>Broj klikova: {{ brojKlikova }}</p>
```

**Karakteristike:**

- Jednosmjerni data binding (template → komponenta)
- Koristi `(event)="handler()"` sintaksu
- Može se koristiti za bilo koji DOM event

**Česti eventi:**

- `(click)` - klik na element
- `(input)` - unos teksta
- `(change)` - promjena vrijednosti
- `(submit)` - slanje forme
- `(mouseenter)`, `(mouseleave)` - hover eventi

#### 4. Two-Way Binding (Komponenta ↔ Template)

**Implementacija:**

```typescript
// TypeScript
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  // ...
})
export class DataBindingDemo {
  korisnickoIme: string = '';
  email: string = '';
}
```

```html
<!-- HTML -->
<input [(ngModel)]="korisnickoIme" type="text" />
<p>Unijeli ste: {{ korisnickoIme }}</p>

<input [(ngModel)]="email" type="email" />
<p>Email: {{ email }}</p>
```

**Karakteristike:**

- Dvosmjerni data binding (sinhronizacija)
- Koristi `[(ngModel)]="property"` sintaksu
- Zahtjeva `FormsModule` import
- Kombinuje property binding i event binding
- Automatska sinhronizacija između input-a i varijable

**Kako radi:**

1. Korisnik unese tekst u input
2. Varijabla `korisnickoIme` se automatski ažurira
3. Sve reference na tu varijablu u template-u se ažuriraju
4. Ako programski promijenimo varijablu, input se ažurira

### ✅ Rezultat Vježbi 3

- ✅ Implementirane sve strukturne direktive (*ngIf, *ngFor, \*ngSwitch)
- ✅ Implementirane atributske direktive (ngClass, ngStyle)
- ✅ Kreirana custom direktiva (appHighlight)
- ✅ Implementirani svi tipovi data binding-a
- ✅ Interaktivne demo stranice za učenje

---

## Struktura Projekta

```
angular_vjezbe/
├── src/
│   ├── app/
│   │   ├── about/              # O nama komponenta
│   │   │   ├── about.ts
│   │   │   ├── about.html
│   │   │   └── about.css
│   │   ├── home/               # Home komponenta
│   │   │   ├── home.ts
│   │   │   ├── home.html
│   │   │   └── home.css
│   │   ├── nav-bar/            # Navigacija
│   │   │   ├── nav-bar.ts
│   │   │   ├── nav-bar.html
│   │   │   └── nav-bar.css
│   │   ├── footer/             # Footer
│   │   │   ├── footer.ts
│   │   │   ├── footer.html
│   │   │   └── footer.css
│   │   ├── directives-demo/    # Direktive demo
│   │   │   ├── directives-demo.ts
│   │   │   ├── directives-demo.html
│   │   │   └── directives-demo.css
│   │   ├── data-binding-demo/  # Data binding demo
│   │   │   ├── data-binding-demo.ts
│   │   │   ├── data-binding-demo.html
│   │   │   └── data-binding-demo.css
│   │   ├── highlight.ts        # Custom direktiva
│   │   ├── app.ts              # Root komponenta
│   │   ├── app.html            # Root template
│   │   ├── app.css             # Root stilovi
│   │   └── app.routes.ts       # Rutiranje
│   ├── index.html              # Glavni HTML
│   ├── main.ts                 # Entry point
│   └── styles.css              # Globalni stilovi
├── package.json                # Dependencies
├── angular.json                # Angular konfiguracija
├── tsconfig.json               # TypeScript konfiguracija
└── DOKUMENTACIJA.md            # Ova dokumentacija
```

---

## Pokretanje Aplikacije

### Development Server

```bash
# Pokretanje dev servera
ng serve

# Ili
npm start
```

Aplikacija će biti dostupna na: `http://localhost:4200/`

### Build za Produkciju

```bash
ng build

# Build fajlovi će biti u dist/ folderu
```

---

## 🎓 Naučeni Koncepti

### Angular Komponente

- Kreiranje komponenti sa Angular CLI
- Component lifecycle
- Komunikacija između komponenti
- Standalone komponente

### Rutiranje

- Definisanje ruta
- RouterLink i RouterLinkActive
- Navigacija bez refresh-a (SPA)
- Wildcard rute i redirects

### Direktive

- Strukturne direktive (*ngIf, *ngFor, \*ngSwitch)
- Atributske direktive (ngClass, ngStyle)
- Custom direktive sa @Directive
- HostListener za event handling
- ElementRef i Renderer2 za DOM manipulaciju

### Data Binding

- Interpolation {{ }}
- Property binding [property]
- Event binding (event)
- Two-way binding [(ngModel)]

### TypeScript

- Tipovi podataka
- Interfaces
- Modifiers (public, private, protected)
- Arrow funkcije
- Template literals

### CSS/Styling

- Component-scoped styles
- Global styles
- CSS Flexbox
- Responsive design osnove

---

## 📚 Dodatni Resursi

- [Angular Dokumentacija](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
- [TypeScript Dokumentacija](https://www.typescriptlang.org/docs/)
- [RxJS](https://rxjs.dev/)

---

## 👨‍💻 Autor

**Demir Halilbasic**
Web Programiranje 2025/2026
Laboratorijske Vježbe 1, 2 i 3

---

## 📝 Napomene

- Projekat koristi Angular 21.0.0 sa standalone komponentama
- Node.js verzija: v25.2.1
- Svi testovi su preskočeni (`--skip-tests`) za jednostavnost
- Koristimo signals API za reaktivnost

---

**Datum kreiranja dokumentacije:** 3. Decembar 2024
