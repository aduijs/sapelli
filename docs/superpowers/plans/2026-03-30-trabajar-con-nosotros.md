# Trabajar con Nosotros — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a warm, people-first careers/culture page (`trabajar.html`) with values, work environment, training programs, employee testimonials, and an open application form with CV upload.

**Architecture:** Single inline HTML file matching the existing site pattern (proceso.html as primary template). All CSS and JS inline. Same nav, footer, theme toggle, scroll animations, and responsive breakpoints as other pages.

**Tech Stack:** HTML, inline CSS (CSS custom properties), vanilla JS, Google Fonts (Cormorant Garamond + DM Sans)

**Spec:** `docs/superpowers/specs/2026-03-30-trabajar-con-nosotros-design.md`

**Reference files:**
- `proceso.html` — page structure template (header, nav, footer, theme, responsive)
- `index.html` — contact form pattern (lines 1130-1207), pillar cards pattern (lines 1636-1680), nosotros section (text + image layout)

---

### Task 1: Create trabajar.html with boilerplate + hero

**Files:**
- Create: `trabajar.html`

- [ ] **Step 1: Create the file with full boilerplate**

Copy the shared boilerplate from proceso.html: DOCTYPE, head, meta, Google Fonts link, CSS variables (`:root` tokens), reset, noise overlay, nav styles, theme toggle styles, light theme overrides, page-header styles, footer styles, responsive breakpoints, reduced-motion, skip-link, focus-visible.

The nav must include all 7 links: Nosotros, Sectores, Productos, Proyectos, Cómo Trabajamos, Tecnología Industrial, Cotizar Proyecto. No link gets `class="active"` since "Trabaja con Nosotros" is not in the main nav.

Page-specific CSS to add inside `<style>` (after the shared styles, before `</style>`):

```css
/* ── VALORES ── */
.valores { padding: 120px 0; }
.valores-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
  margin-top: 56px;
}
.valor-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 6px; padding: 36px;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.valor-card:hover { border-color: var(--border-warm); transform: translateY(-2px); }
.valor-icon {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--orange-glow); display: flex;
  align-items: center; justify-content: center;
  margin-bottom: 20px; color: var(--orange);
}
.valor-card h4 {
  font-family: var(--ff-display); font-size: 20px;
  font-weight: 400; margin-bottom: 10px;
}
.valor-card p { font-size: 14px; font-weight: 300; color: var(--text-soft); line-height: 1.7; }

/* ── AMBIENTE ── */
.ambiente { padding: 120px 0; background: var(--ink-2); }
.ambiente-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
}
.ambiente-mosaic {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
}
.ambiente-mosaic img {
  width: 100%; height: 200px; object-fit: cover;
  border-radius: 4px; filter: brightness(0.9);
}

/* ── CAPACITACIONES ── */
.capacitaciones { padding: 120px 0; background: var(--ink-3); }
.capacitaciones-grid {
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px;
  margin-top: 56px;
}
.cap-card { display: flex; gap: 16px; }
.cap-icon {
  width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
  background: var(--orange-glow); display: flex;
  align-items: center; justify-content: center; color: var(--orange);
}
.cap-text h4 {
  font-family: var(--ff-body); font-size: 15px;
  font-weight: 600; margin-bottom: 6px;
}
.cap-text p { font-size: 14px; font-weight: 300; color: var(--text-soft); line-height: 1.7; }

/* ── TESTIMONIOS ── */
.testimonios { padding: 120px 0; }
.testimonios-grid {
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px;
  margin-top: 56px;
}
.testimonio-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 6px; padding: 36px;
}
.testimonio-quote {
  font-family: var(--ff-display); font-size: 18px;
  font-style: italic; font-weight: 300; line-height: 1.7;
  margin-bottom: 24px; color: var(--text);
}
.testimonio-quote::before { content: '\201C'; color: var(--orange); font-size: 32px; display: block; margin-bottom: 8px; }
.testimonio-name { font-weight: 600; font-size: 14px; }
.testimonio-role { font-size: 13px; color: var(--text-muted); margin-top: 2px; }

/* ── POSTULA ── */
.postula { padding: 120px 0; background: var(--ink-2); }
.postula-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start;
}
.file-drop {
  border: 2px dashed var(--border); border-radius: 6px;
  padding: 24px; text-align: center; cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
  color: var(--text-muted); font-size: 13px;
}
.file-drop:hover, .file-drop.dragover {
  border-color: var(--orange); background: rgba(224,88,32,0.04);
}
.file-drop.has-file { border-color: var(--orange); color: var(--orange); }
.file-drop input[type="file"] { display: none; }
.file-drop svg { margin: 0 auto 8px; display: block; color: var(--text-muted); }

/* ── SECTION COMMONS ── */
.section-inner { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
.section-label {
  font-size: 10px; font-weight: 700; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--orange); margin-bottom: 12px;
  display: flex; align-items: center; gap: 12px;
}
.section-label::before {
  content: ''; width: 32px; height: 1px; background: var(--orange);
}
.section-title {
  font-family: var(--ff-display); font-size: clamp(32px, 4vw, 48px);
  font-weight: 300; line-height: 1.15; letter-spacing: -0.02em;
}
.section-title em { font-style: italic; color: var(--orange); }
.section-body {
  font-size: 15px; font-weight: 300; color: var(--text-soft);
  line-height: 1.8; margin-top: 20px; max-width: 540px;
}
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; background: var(--orange); color: #fff;
  font-size: 12px; font-weight: 600; letter-spacing: 0.12em;
  text-transform: uppercase; border-radius: 3px;
  box-shadow: 0 4px 20px rgba(224,88,32,0.3);
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.btn-primary:hover { background: var(--orange-dark); transform: translateY(-1px); box-shadow: 0 8px 28px rgba(224,88,32,0.4); }
.btn-primary:active { transform: translateY(0); }

/* ── FORM ── */
.form-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 6px; padding: 40px;
}
.form-card h3 {
  font-family: var(--ff-display); font-size: 24px;
  font-weight: 400; color: var(--text); margin-bottom: 32px;
}
.form-group { margin-bottom: 20px; }
.form-group label {
  display: block; font-size: 11px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--text-muted); margin-bottom: 8px;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%; background: rgba(255,255,255,0.04);
  border: 1px solid var(--border); border-radius: 3px;
  padding: 12px 16px; color: var(--text);
  font-size: 14px; font-weight: 300;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--border-warm); background: rgba(224,88,32,0.04);
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-muted); }
.form-group select option { background: var(--ink-3); }
.form-group .form-error {
  display: none; font-size: 12px; color: #E05820; margin-top: 6px;
}
.form-group.invalid input,
.form-group.invalid select,
.form-group.invalid textarea { border-color: #E05820; }
.form-group.invalid .form-error { display: block; }
.form-group textarea { resize: vertical; min-height: 100px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-submit {
  width: 100%; padding: 15px 24px; background: var(--orange);
  color: #fff; font-size: 13px; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  border-radius: 3px; cursor: pointer; margin-top: 8px;
  box-shadow: 0 4px 20px rgba(224,88,32,0.3);
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.form-submit:hover { background: var(--orange-dark); transform: translateY(-1px); box-shadow: 0 8px 28px rgba(224,88,32,0.4); }
.form-submit:active { transform: translateY(0); }

/* ── FOOTER ── */
.footer { background: var(--ink); border-top: 1px solid var(--border); padding: 64px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
.footer-brand img { height: 32px; width: auto; margin-bottom: 16px; }
.footer-brand p { font-size: 13px; font-weight: 300; color: var(--text-muted); line-height: 1.7; max-width: 280px; }
.footer-col h4 { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; color: var(--text-soft); }
.footer-col ul { display: flex; flex-direction: column; gap: 12px; }
.footer-col a { font-size: 14px; color: var(--text-muted); transition: color 0.2s ease; }
.footer-col a:hover { color: var(--text); }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 32px; border-top: 1px solid var(--border); }
.footer-copy { font-size: 12px; color: var(--text-muted); }
.footer-social { display: flex; gap: 16px; }
.footer-social a { color: var(--text-muted); transition: color 0.2s ease; }
.footer-social a:hover { color: var(--text); }

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .nav-links { display: flex; position: fixed; top: 72px; left: 0; right: 0; bottom: 0; flex-direction: column; align-items: center; justify-content: center; gap: 40px; background: rgba(13,12,11,0.98); backdrop-filter: blur(20px); z-index: 899; opacity: 0; pointer-events: none; transition: opacity 0.3s var(--ease-out-expo); }
  .nav-links.open { opacity: 1; pointer-events: auto; }
  .nav-burger { display: flex; }
  .section-inner { padding: 0 24px; }
  .valores-grid { grid-template-columns: 1fr; }
  .ambiente-grid { grid-template-columns: 1fr; gap: 40px; }
  .capacitaciones-grid { grid-template-columns: 1fr; }
  .testimonios-grid { grid-template-columns: 1fr; }
  .postula-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .form-row { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
}
```

The hero HTML structure (inside `<body>`, after skip-link and nav):

```html
<header class="page-header" id="main">
  <div class="page-header-bg"></div>
  <div class="page-header-gradient"></div>
  <div class="page-header-content">
    <div class="breadcrumb">
      <a href="index.html">Inicio</a>
      <span class="breadcrumb-sep">/</span>
      <span>Trabaja con Nosotros</span>
    </div>
    <h1 class="page-title">Construimos mobiliario.<br><em>Construimos equipo.</em></h1>
    <p class="page-subtitle">
      Más de 100 profesionales comprometidos con la excelencia.
      Descubre qué hace de Sapelli un gran lugar para trabajar.
    </p>
    <a href="#postula" class="btn-primary" style="margin-top: 32px;">
      Ver oportunidades
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</header>
```

Hero background image: use `https://www.sapelli.pe/theme_sapelli/static/src/img/proyectos/oficinas-bbva-continental/62450.jpg` (workshop/office image).

- [ ] **Step 2: Verify the hero renders correctly**

Run: `node screenshot.mjs http://localhost:4000/trabajar.html hero-check`
Read the screenshot and verify: breadcrumb visible, title with italic orange "Construimos equipo.", subtitle, CTA button.

- [ ] **Step 3: Commit**

```bash
git add trabajar.html
git commit -m "feat: add trabajar.html boilerplate + hero section"
```

---

### Task 2: Add Valores + Ambiente + Capacitaciones sections

**Files:**
- Modify: `trabajar.html`

- [ ] **Step 1: Add the three content sections after the hero**

Insert after `</header>`:

```html
<!-- VALORES -->
<section class="valores">
  <div class="section-inner">
    <div class="section-label fade-up">Nuestros Valores</div>
    <h2 class="section-title fade-up">Lo que nos <em>define</em></h2>
    <div class="valores-grid">
      <div class="valor-card fade-up">
        <div class="valor-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.3L10 14.5 5.1 17l.9-5.3-4-3.9 5.5-.8L10 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h4>Excelencia</h4>
        <p>Cada pieza que sale de nuestro taller lleva nuestra firma de calidad. No hay atajos.</p>
      </div>
      <div class="valor-card fade-up">
        <div class="valor-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="13" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M2 17c0-2.8 2.2-5 5-5 1.3 0 2.4.5 3.3 1.3M18 17c0-2.8-2.2-5-5-5-1.3 0-2.4.5-3.3 1.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <h4>Colaboración</h4>
        <p>Trabajamos como un solo equipo, desde el diseño hasta la instalación final.</p>
      </div>
      <div class="valor-card fade-up">
        <div class="valor-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 10A7 7 0 103 10a7 7 0 0014 0z" stroke="currentColor" stroke-width="1.5"/><path d="M8 10l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h4>Integridad</h4>
        <p>Transparencia con nuestros clientes, proveedores y compañeros. Siempre.</p>
      </div>
      <div class="valor-card fade-up">
        <div class="valor-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v16M6 6l4-4 4 4M6 14l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h4>Crecimiento</h4>
        <p>Invertimos en el desarrollo de cada persona que forma parte de Sapelli.</p>
      </div>
    </div>
  </div>
</section>

<!-- AMBIENTE LABORAL -->
<section class="ambiente">
  <div class="section-inner">
    <div class="ambiente-grid">
      <div>
        <div class="section-label fade-up">Ambiente Laboral</div>
        <h2 class="section-title fade-up">Un equipo que <em>se cuida</em></h2>
        <p class="section-body fade-up">
          En Sapelli creemos que el mejor mobiliario nace en un ambiente de respeto, seguridad y compañerismo.
          Nuestro equipo de más de 100 profesionales — carpinteros, tapiceros, diseñadores e ingenieros —
          trabaja con orgullo sabiendo que cada pieza que fabricamos transforma espacios reales.
        </p>
        <p class="section-body fade-up" style="margin-top: 16px;">
          Promovemos un entorno donde se escucha, se aprende y se crece. Porque cuidar a nuestra gente
          es cuidar la calidad de lo que hacemos.
        </p>
      </div>
      <div class="ambiente-mosaic fade-up">
        <img loading="lazy" src="https://www.sapelli.pe/theme_sapelli/static/src/img/proyectos/jw-marriott-hotel-lima/62626.jpg" alt="Equipo Sapelli" />
        <img loading="lazy" src="https://www.sapelli.pe/theme_sapelli/static/src/img/proyectos/oficinas-bbva-continental/62450.jpg" alt="Taller Sapelli" />
        <img loading="lazy" src="https://www.sapelli.pe/theme_sapelli/static/src/img/proyectos/hotel-courtyard-by-marriott/62462.jpg" alt="Producción Sapelli" />
        <img loading="lazy" src="https://www.sapelli.pe/theme_sapelli/static/src/img/proyectos/hotel-iberostar-lima/DSC_4916.jpg" alt="Instalación Sapelli" />
      </div>
    </div>
  </div>
</section>

<!-- CAPACITACIONES -->
<section class="capacitaciones">
  <div class="section-inner">
    <div class="section-label fade-up">Educación y Capacitaciones</div>
    <h2 class="section-title fade-up">Invertimos en tu <em>crecimiento</em></h2>
    <div class="capacitaciones-grid">
      <div class="cap-card fade-up">
        <div class="cap-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5v15M1.5 9h15M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div class="cap-text">
          <h4>Formación Técnica</h4>
          <p>Carpintería, tapicería, acabados y operación de maquinaria CNC de última generación.</p>
        </div>
      </div>
      <div class="cap-card fade-up">
        <div class="cap-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 16.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" stroke="currentColor" stroke-width="1.5"/><path d="M9 5.5v4l2.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <div class="cap-text">
          <h4>Seguridad y Bienestar</h4>
          <p>Protocolos de seguridad, ergonomía y programas de salud ocupacional para todo el equipo.</p>
        </div>
      </div>
      <div class="cap-card fade-up">
        <div class="cap-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 14.5l6-4 6 4M3 10.5l6-4 6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="cap-text">
          <h4>Desarrollo Profesional</h4>
          <p>Liderazgo, gestión de proyectos y habilidades blandas para crecer dentro de la empresa.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Screenshot and verify**

Run: `node screenshot.mjs http://localhost:4000/trabajar.html sections-check`
Verify: valores 2x2 grid, ambiente with text+photos, capacitaciones with 3 cards.

- [ ] **Step 3: Commit**

```bash
git add trabajar.html
git commit -m "feat: add valores, ambiente, capacitaciones sections"
```

---

### Task 3: Add Testimonios + Postula form sections

**Files:**
- Modify: `trabajar.html`

- [ ] **Step 1: Add testimonials and application form**

Insert after `</section><!-- CAPACITACIONES -->`:

```html
<!-- TESTIMONIOS -->
<section class="testimonios">
  <div class="section-inner">
    <div class="section-label fade-up">Nuestro Equipo</div>
    <h2 class="section-title fade-up">Voces de <em>Sapelli</em></h2>
    <div class="testimonios-grid">
      <div class="testimonio-card fade-up">
        <div class="testimonio-quote">Empecé como ayudante de taller y hoy lidero un equipo de 12 personas. Sapelli apuesta por su gente.</div>
        <div class="testimonio-name">Carlos M.</div>
        <div class="testimonio-role">Jefe de Producción · 8 años</div>
      </div>
      <div class="testimonio-card fade-up">
        <div class="testimonio-quote">Lo que más valoro es el ambiente. Aquí te escuchan, te capacitan y te dan espacio para crecer.</div>
        <div class="testimonio-name">María L.</div>
        <div class="testimonio-role">Diseñadora Industrial · 5 años</div>
      </div>
      <div class="testimonio-card fade-up">
        <div class="testimonio-quote">Trabajar con marcas internacionales como Marriott me ha enseñado más que cualquier curso.</div>
        <div class="testimonio-name">Jorge R.</div>
        <div class="testimonio-role">Tapicero Senior · 12 años</div>
      </div>
    </div>
  </div>
</section>

<!-- POSTULA -->
<section class="postula" id="postula">
  <div class="section-inner">
    <div class="postula-grid">
      <div>
        <div class="section-label fade-up">Postula con Nosotros</div>
        <h2 class="section-title fade-up">Siempre buscamos<br><em>nuevo talento</em></h2>
        <p class="section-body fade-up">
          No importa si no hay una vacante publicada. Si compartes nuestros valores y quieres ser parte
          de un equipo que construye espacios memorables, queremos conocerte.
        </p>
      </div>
      <div class="form-card fade-up">
        <h3>Envía tu postulación</h3>
        <form onsubmit="handlePostula(event)">
          <div class="form-row">
            <div class="form-group">
              <label>Nombre completo *</label>
              <input type="text" placeholder="Tu nombre completo" required />
              <span class="form-error">Por favor ingrese su nombre</span>
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input type="email" placeholder="correo@ejemplo.com" required />
              <span class="form-error">Por favor ingrese un email válido</span>
            </div>
          </div>
          <div class="form-group">
            <label>Teléfono</label>
            <input type="tel" placeholder="+51 999 999 999" />
          </div>
          <div class="form-group">
            <label>Área de interés</label>
            <select>
              <option value="" disabled selected>Seleccione un área</option>
              <option>Producción y Taller</option>
              <option>Diseño e Ingeniería</option>
              <option>Ventas y Comercial</option>
              <option>Logística y Operaciones</option>
              <option>Administración</option>
              <option>Otro</option>
            </select>
          </div>
          <div class="form-group">
            <label>Mensaje / Presentación</label>
            <textarea placeholder="Cuéntanos sobre ti, tu experiencia y por qué te gustaría ser parte de Sapelli..."></textarea>
          </div>
          <div class="form-group">
            <label>Adjuntar CV *</label>
            <div class="file-drop" id="fileDrop" onclick="document.getElementById('cvInput').click()">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span id="fileLabel">Arrastra tu CV aquí o haz clic para seleccionar</span>
              <input type="file" id="cvInput" accept=".pdf,.doc,.docx" />
            </div>
            <span class="form-error">Por favor adjunte su CV (PDF o DOC, máx. 5MB)</span>
          </div>
          <button type="submit" class="form-submit">Enviar Postulación</button>
        </form>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add the footer**

Copy the standard footer from proceso.html. Update the "Trabaja con Nosotros" link to `trabajar.html`. Include the floating WhatsApp CTA if present on other pages.

- [ ] **Step 3: Commit**

```bash
git add trabajar.html
git commit -m "feat: add testimonios + postula form with CV upload"
```

---

### Task 4: Add JavaScript (theme, nav, animations, form, file upload)

**Files:**
- Modify: `trabajar.html`

- [ ] **Step 1: Add the script block before `</body>`**

```html
<script>
  // ── Intersection Observer for scroll animations ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ── Nav scroll state ──
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const isLight = document.documentElement.dataset.theme === 'light';
    if (window.scrollY > 60) {
      nav.style.background = isLight ? 'rgba(248,243,237,0.98)' : 'rgba(13,12,11,0.97)';
    } else {
      nav.style.background = isLight ? 'rgba(248,243,237,0.6)' : 'rgba(13,12,11,0.96)';
    }
  });

  // ── Mobile nav ──
  function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('open');
  }

  // ── Theme ──
  function toggleTheme() {
    const isLight = document.documentElement.dataset.theme === 'light';
    document.documentElement.dataset.theme = isLight ? '' : 'light';
    localStorage.setItem('sapelli-theme', isLight ? 'dark' : 'light');
  }

  // ── File upload ──
  const fileDrop = document.getElementById('fileDrop');
  const cvInput = document.getElementById('cvInput');
  const fileLabel = document.getElementById('fileLabel');

  cvInput.addEventListener('change', () => {
    const file = cvInput.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        fileLabel.textContent = 'El archivo excede 5MB. Seleccione otro.';
        fileDrop.classList.remove('has-file');
        cvInput.value = '';
        return;
      }
      fileLabel.textContent = file.name;
      fileDrop.classList.add('has-file');
      fileDrop.closest('.form-group').classList.remove('invalid');
    }
  });

  fileDrop.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileDrop.classList.add('dragover');
  });
  fileDrop.addEventListener('dragleave', () => fileDrop.classList.remove('dragover'));
  fileDrop.addEventListener('drop', (e) => {
    e.preventDefault();
    fileDrop.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && /\.(pdf|doc|docx)$/i.test(file.name)) {
      const dt = new DataTransfer();
      dt.items.add(file);
      cvInput.files = dt.files;
      cvInput.dispatchEvent(new Event('change'));
    }
  });

  // ── Inline validation on blur ──
  document.querySelectorAll('.form-group input[required]').forEach(el => {
    el.addEventListener('blur', () => {
      const group = el.closest('.form-group');
      if (!el.value.trim() || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value))) {
        group.classList.add('invalid');
      } else {
        group.classList.remove('invalid');
      }
    });
    el.addEventListener('input', () => el.closest('.form-group').classList.remove('invalid'));
  });

  // ── Form submit ──
  function handlePostula(e) {
    e.preventDefault();
    let valid = true;
    e.target.querySelectorAll('[required]').forEach(el => {
      const group = el.closest('.form-group');
      if (!el.value.trim() || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value))) {
        group.classList.add('invalid');
        if (valid) { el.focus(); valid = false; }
      }
    });
    // Validate file
    if (!cvInput.files.length) {
      fileDrop.closest('.form-group').classList.add('invalid');
      if (valid) { valid = false; }
    }
    if (!valid) return;

    const btn = e.target.querySelector('.form-submit');
    btn.textContent = 'Enviando...';
    btn.style.opacity = '0.7';
    setTimeout(() => {
      btn.textContent = '\u00a1Postulación Enviada!';
      btn.style.background = '#2E7D32';
      setTimeout(() => {
        btn.textContent = 'Enviar Postulación';
        btn.style.background = '';
        btn.style.opacity = '';
        e.target.reset();
        fileLabel.textContent = 'Arrastra tu CV aquí o haz clic para seleccionar';
        fileDrop.classList.remove('has-file');
      }, 3000);
    }, 1200);
  }
</script>
```

- [ ] **Step 2: Add fade-up animation CSS**

Add to the `<style>` block (if not already included from boilerplate):

```css
.fade-up {
  opacity: 0; transform: translateY(32px);
  transition: opacity 0.7s var(--ease-out-expo), transform 0.7s var(--ease-out-expo);
}
.fade-up.visible { opacity: 1; transform: translateY(0); }
```

- [ ] **Step 3: Screenshot full page and verify all sections**

Run: `node screenshot.mjs http://localhost:4000/trabajar.html full-check`
Verify: all sections render, form displays, file drop zone styled.

- [ ] **Step 4: Commit**

```bash
git add trabajar.html
git commit -m "feat: add JS for theme, nav, animations, form validation, file upload"
```

---

### Task 5: Update footer links on all existing pages

**Files:**
- Modify: `index.html` — change `<a href="#">Trabaja con Nosotros</a>` to `<a href="trabajar.html">Trabaja con Nosotros</a>`
- Modify: `catalogo.html` — same change
- Modify: `proyectos.html` — same change
- Modify: `sectores.html` — same change (may already point to `index.html#contacto`, change to `trabajar.html`)
- Modify: `proceso.html` — same change if present

- [ ] **Step 1: Update all footer links**

Search for `Trabaja con Nosotros` in each file and update the `href` to `trabajar.html`.

In `index.html`, also update the href in the footer from `<a href="#">Trabaja con Nosotros</a>` to `<a href="trabajar.html">Trabaja con Nosotros</a>`.

- [ ] **Step 2: Verify links work**

Navigate to each page footer and confirm the link goes to `trabajar.html`.

- [ ] **Step 3: Commit**

```bash
git add index.html catalogo.html proyectos.html sectores.html proceso.html
git commit -m "feat: update footer 'Trabaja con Nosotros' links to trabajar.html"
```

---

### Task 6: Final visual QA + push

- [ ] **Step 1: Screenshot trabajar.html in dark mode**

Run: `node screenshot.mjs http://localhost:4000/trabajar.html final-dark`

- [ ] **Step 2: Screenshot trabajar.html in light mode**

Toggle to light mode and screenshot. Verify hero text is light on dark bg, all sections have proper contrast.

- [ ] **Step 3: Test mobile responsive**

Resize viewport to 375px width, screenshot. Verify: all grids stack to single column, nav burger works, form is usable.

- [ ] **Step 4: Fix any issues found**

Address spacing, contrast, or layout issues found in screenshots.

- [ ] **Step 5: Final commit and push**

```bash
git add -A
git commit -m "feat: complete trabajar con nosotros page — values, culture, training, application form"
git push
```
