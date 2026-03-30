# Trabajar con Nosotros — Design Spec

## Overview

New careers/culture page for Sapelli Mobiliario (`trabajar.html`). A warm, people-first page that communicates company values, work environment, training programs, and provides an open application form. Uses the "Storytelling + Testimonials" layout with alternating backgrounds, employee quotes, and emotional warmth.

## Page Structure

File: `trabajar.html`
Style: Matches existing site design system (dark-first, Cormorant Garamond + DM Sans, orange accent, light mode support).
Navigation: Added to footer "Empresa" column (replacing the current `#` link). Also accessible from the existing "Trabaja con Nosotros" footer links on all pages.

### Section 1: Hero (Page Header)

- **Structure**: Same `.page-header` pattern as proceso.html, sectores.html, etc.
- **Background**: Dark image — use existing Sapelli workshop/factory image from the site
- **Breadcrumb**: `Inicio / Trabaja con Nosotros`
- **Title**: "Construimos mobiliario. *Construimos equipo.*" (italic on second sentence via `<em>`)
- **Subtitle**: "Más de 100 profesionales comprometidos con la excelencia. Descubre qué hace de Sapelli un gran lugar para trabajar."
- **CTA**: "Ver oportunidades →" button scrolling to `#postula`
- **Light mode**: Must override `--text` to light values within `.page-header` (same pattern as other pages)

### Section 2: Nuestros Valores

- **Background**: Default (dark mode: `--ink`, light mode: `--ink` mapped light)
- **Layout**: 4 cards in a 2x2 grid (single column on mobile)
- **Section label**: "Nuestros Valores"
- **Section title**: "Lo que nos define"
- **Each card**: SVG icon (Lucide-style, inline) + title (`<h4>`) + description paragraph
- **Values**:
  1. **Excelencia** — "Cada pieza que sale de nuestro taller lleva nuestra firma de calidad. No hay atajos."
  2. **Colaboración** — "Trabajamos como un solo equipo, desde el diseño hasta la instalación final."
  3. **Integridad** — "Transparencia con nuestros clientes, proveedores y compañeros. Siempre."
  4. **Crecimiento** — "Invertimos en el desarrollo de cada persona que forma parte de Sapelli."

### Section 3: Ambiente Laboral

- **Background**: Alternating (dark mode: `--ink-2`, light mode: lighter variant)
- **Layout**: Two-column grid — text left, photo mosaic right (stacks on mobile)
- **Section label**: "Ambiente Laboral"
- **Section title**: "Un equipo que se cuida"
- **Body text**: Warm paragraph about the work culture — emphasis on respect, teamwork, safe environment, pride in craftsmanship. Placeholder copy to be refined by client.
- **Photo mosaic**: 2x2 grid of images using existing Sapelli project photos as placeholders (until real team photos are provided). Images use `loading="lazy"`.

### Section 4: Educación y Capacitaciones

- **Background**: Light contrast section (uses `--ink-3` in dark, cream in light — similar to the Nosotros pillars section)
- **Layout**: Section label + title + 3 program cards in a row (stack on mobile)
- **Section label**: "Educación y Capacitaciones"
- **Section title**: "Invertimos en tu *crecimiento*"
- **Program cards** (same visual style as the pillar cards in index.html Nosotros section):
  1. **Formación Técnica** — "Carpintería, tapicería, acabados y operación de maquinaria CNC de última generación."
  2. **Seguridad y Bienestar** — "Protocolos de seguridad, ergonomía y programas de salud ocupacional para todo el equipo."
  3. **Desarrollo Profesional** — "Liderazgo, gestión de proyectos y habilidades blandas para crecer dentro de la empresa."
- Each card: inline SVG icon + title + description (matching pilar component pattern from index.html)

### Section 5: Testimonios

- **Background**: Default
- **Layout**: 2-3 testimonial quote cards in a row (stack on mobile)
- **Section label**: "Nuestro Equipo"
- **Section title**: "Voces de Sapelli"
- **Each testimonial card**:
  - Quote text in italic (using `--ff-display` font)
  - Name (bold)
  - Role + years at company (muted text)
- **Placeholder content** (3 testimonials):
  1. "Empecé como ayudante de taller y hoy lidero un equipo de 12 personas. Sapelli apuesta por su gente." — **Carlos M.**, Jefe de Producción · 8 años
  2. "Lo que más valoro es el ambiente. Aquí te escuchan, te capacitan y te dan espacio para crecer." — **María L.**, Diseñadora Industrial · 5 años
  3. "Trabajar con marcas internacionales como Marriott me ha enseñado más que cualquier curso." — **Jorge R.**, Tapicero Senior · 12 años

### Section 6: Postula con Nosotros

- **Background**: Alternating (dark mode: `--ink-2`)
- **Anchor**: `id="postula"`
- **Layout**: Two-column — intro text left, form right (stacks on mobile). Same pattern as the contact form in index.html.
- **Left side**:
  - Section label: "Postula con Nosotros"
  - Section title: "Siempre buscamos *nuevo talento*"
  - Body text: "No importa si no hay una vacante publicada. Si compartes nuestros valores y quieres ser parte de un equipo que construye espacios memorables, queremos conocerte."
- **Right side — Form**:
  - Nombre completo * (text input, required)
  - Email * (email input, required)
  - Teléfono (tel input)
  - Área de interés (select dropdown):
    - Producción y Taller
    - Diseño e Ingeniería
    - Ventas y Comercial
    - Logística y Operaciones
    - Administración
    - Otro
  - Mensaje / Presentación (textarea)
  - Adjuntar CV * (file input, accept=".pdf,.doc,.docx", required)
    - Styled as a drop zone with "Arrastra tu CV aquí o haz clic para seleccionar" text
    - Max 5MB, shows filename after selection
  - Submit button: "Enviar Postulación"
  - Form validation: Same blur-based inline validation as index.html contact form
  - Submit handling: Same simulated feedback pattern (loading → success state)

### Footer

- Update the "Trabaja con Nosotros" link in all 5 existing HTML files to point to `trabajar.html`

## Technical Notes

- Single `trabajar.html` file with inline CSS and JS (same as all other pages)
- Reuses the shared design system: CSS variables, font imports, nav, footer, theme toggle, mobile nav, scroll animations
- Nav includes all 7 current links (Nosotros, Sectores, Productos, Proyectos, Cómo Trabajamos, Tecnología Industrial, Cotizar Proyecto)
- File upload is client-side only (styled input, shows filename). No actual backend upload — same as existing contact form pattern.
- All images use `loading="lazy"` except hero background
- Includes: skip-to-content link, focus-visible styles, prefers-reduced-motion, page-header light mode override
- Responsive: mobile-first, stacks grids to single column at 1024px / 768px breakpoints

## Out of Scope

- Backend form submission / email sending (matches existing site pattern)
- Actual job listing management system
- Real employee photos (uses placeholder project images)
- CMS or dynamic content
