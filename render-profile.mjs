import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = new URL('./', import.meta.url);
const original = (file) => readFileSync(new URL(file, root), 'utf8');
const fontFace = original('banner.svg').match(/@font-face\s*\{[^}]+\}/)?.[0];
assert(fontFace?.includes('data:font/woff2;base64,'), 'The banner must contain the embedded Share Tech Mono font.');
const check = process.argv.includes('--check');
const accent = 'var(--accent)';
const ink = 'var(--ink)';
const muted = 'var(--muted)';
const rule = 'var(--rule)';
const text = (x, y, value, cls = 'mono', extra = '') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${value}</text>`;
const line = (x1, y1, x2, y2, color = rule, extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" ${extra}/>`;
const star = '<path d="M0-22Q5-5 22 0Q5 5 0 22Q-5 5-22 0Q-5-5 0-22Z" fill="var(--accent)"/>';
const css = `
    svg { --bg: transparent; --ink: #ece9df; --muted: #cbc6ba; --quiet: #aaa397; --accent: #ff2a5f; --rule: #343039; }
    @media (prefers-color-scheme: light) { svg { --ink: #1b1c1f; --muted: #3e3b36; --quiet: #6b655c; --rule: #d9d5cc; } }
    .mono { font-family: 'Share Tech Mono', 'Courier New', monospace; font-size: 15px; fill: var(--muted); }
    .micro { font-family: 'Share Tech Mono', 'Courier New', monospace; font-size: 12px; letter-spacing: 1.2px; fill: var(--quiet); }
    .display { font-family: Georgia, 'Times New Roman', serif; fill: var(--ink); }
    .accent { fill: var(--accent); }
    .packet { opacity: 0; }
    .rotor, .counter-rotor, .brand-star { transform-origin: 0px 0px; }
    .ink-line, .loading { transform-box: fill-box; transform-origin: left center; }
    .eye { transform-box: fill-box; transform-origin: center; }
    @keyframes arrive { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes type { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
    @keyframes ink { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes rotate { to { transform: rotate(360deg); } }
    @keyframes counter { to { transform: rotate(-360deg); } }
    @keyframes core { 0%,100% { opacity: 1; } 50% { opacity: .55; } }
    @keyframes wink { 0%,42%,54%,100% { transform: scaleY(1); } 48% { transform: scaleY(.12); } }
    @keyframes glance { 0%,18%,100% { transform: translateX(0); } 30%,48% { transform: translateX(2px); } 65%,82% { transform: translateX(-2px); } }
    @keyframes load { 0%,8% { transform: scaleX(.08); opacity: .5; } 68%,88% { transform: scaleX(1); opacity: 1; } 100% { transform: scaleX(1); opacity: 0; } }
    @keyframes signal { 0%,100% { opacity: .15; } 45%,65% { opacity: 1; } }
    @keyframes travel { 0%,10% { transform: translateX(0); opacity: 0; } 15% { opacity: 1; } 80% { opacity: 1; } 90%,100% { transform: translateX(var(--distance)); opacity: 0; } }
    @keyframes descend { 0%,8% { transform: translateY(0); opacity: 0; } 18%,82% { opacity: 1; } 92%,100% { transform: translateY(var(--distance)); opacity: 0; } }
    @media (prefers-reduced-motion: no-preference) {
      .intro { animation: arrive .5s cubic-bezier(.16,1,.3,1) both; animation-delay: var(--delay, 0s); }
      .type-name { animation: type 1.15s .12s steps(14,end) both; }
      .ink-line { animation: ink .55s 1.05s cubic-bezier(.16,1,.3,1) both; }
      .rotor { animation: rotate 12s linear infinite; }
      .counter-rotor { animation: counter 18s linear infinite; }
      .brand-star { animation: counter 16s linear infinite; }
      .core { animation: core 3.2s ease-in-out infinite; }
      .loading { animation: load 3.6s ease-in-out infinite; }
      .eye { animation: wink 4.6s ease-in-out infinite; }
      .eyes { animation: glance 7s ease-in-out infinite; }
      .node { animation: signal 2.8s ease-in-out infinite; animation-delay: var(--phase, 0s); }
      .packet.horizontal { animation: travel var(--period, 6s) var(--phase, 0s) cubic-bezier(.45,0,.55,1) infinite; }
      .packet.vertical { animation: descend var(--period, 5s) var(--phase, 0s) linear infinite; }
    }
    svg:target * { animation: none !important; }
    @media (prefers-reduced-motion: reduce) { .intro { animation: arrive .15s ease-out both; } }
`;

function seal(x, y, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M-76-15V-31H-60M60 31H76V15" fill="none" stroke="${rule}"/>
    <circle r="65" fill="none" stroke="${rule}"/>
    <g class="rotor">
      <circle r="65" fill="none" stroke="${muted}" stroke-width="3" stroke-dasharray="1 11" stroke-linecap="round"/>
      <path d="M-4-65L0-72L4-65L0-58Z" fill="${accent}"/>
    </g>
    <g class="counter-rotor">
      <circle r="51" fill="none" stroke="${accent}" stroke-opacity=".72" stroke-width="1.5" stroke-dasharray="48 13 6 13 24 56"/>
      <circle cx="0" cy="-51" r="3" fill="${ink}"/>
    </g>
    <path d="M-34 0H-26M26 0H34M0-34V-26M0 26V34" stroke="${rule}"/>
    <circle r="34" fill="none" stroke="${rule}"/>
    <g class="brand-star"><g class="core">${star}</g></g>
  </g>`;
}

function icon(kind, x, y) {
  const open = `<g transform="translate(${x} ${y})" stroke="${accent}" stroke-width="1.5" fill="none">`;
  if (kind === 'product') return `${open}
    <rect x="1" y="2" width="38" height="30" rx="3"/>
    <path d="M1 10H39M7 16H17M7 21H27" stroke-opacity=".55"/>
    <circle cx="6" cy="6" r="1" fill="${accent}" stroke="none"/>
    <path d="M7 27H33" stroke-opacity=".2" stroke-width="2.5"/>
    <path class="loading" d="M7 27H33" stroke-width="2.5"/>
  </g>`;
  if (kind === 'intelligence') return `${open}
    <path d="M4 8L20 3L36 18L20 18L4 28L20 33L36 18M4 8L20 18M4 28L20 3M20 33L4 8" stroke-opacity=".45"/>
    ${[[4,8],[4,28],[20,3],[20,18],[20,33],[36,18]].map(([cx,cy], i) => `<circle cx="${cx}" cy="${cy}" r="3.1" fill="var(--bg)"/><circle class="node" cx="${cx}" cy="${cy}" r="1.7" fill="${accent}" stroke="none" style="--phase: ${i * .28}s"/>`).join('\n')}
    <circle cx="36" cy="18" r="6" stroke-opacity=".32"/>
  </g>`;
  return `${open}
    <rect x="4" y="7" width="32" height="25" rx="5"/>
    <path d="M20 7V2M0 15V24M40 15V24M15 27H25"/>
    <circle class="node" cx="20" cy="0" r="2" fill="${accent}" stroke="none"/>
    <g class="eyes" fill="${accent}" stroke="none">
      <rect class="eye" x="10" y="15" width="6" height="6" rx="1.5"/>
      <rect class="eye" x="24" y="15" width="6" height="6" rx="1.5"/>
    </g>
  </g>`;
}

const groups = [
  { number: '01', name: 'Product Systems', icon: 'product', route: ['SCHEMA', 'API', 'UI'], items: ['react 19 · next.js · vite', 'node · express · hono', 'stripe · pagbank · webhooks', 'postgres · prisma · drizzle', 'tailwind · framer motion'] },
  { number: '02', name: 'Intelligent Systems', icon: 'intelligence', route: ['INPUT', 'MODEL', 'OUTPUT'], items: ['python · tensorflow lite', 'ocr → structured data', 'pandas · stats models', 'supabase · data apis', 'openai · ollama'] },
  { number: '03', name: 'Agents &amp; Machines', icon: 'agents', route: ['PLAN', 'EXECUTE', 'VALIDATE'], items: ['mcp tools · fastapi', 'bullmq · redis workers', 'esp32-s3 · esp-now · ble', 'textual tui · pyinstaller', 'docker · github actions'] },
];

function route(x, y, labels, width = 238, phase = 0) {
  const step = width / 2;
  return `<g transform="translate(${x} ${y})">
    ${line(0, 0, width, 0)}
    ${[0, step, width].map((cx, i) => `<circle cx="${cx}" cy="0" r="2.5" fill="var(--bg)" stroke="${i === 0 ? accent : rule}"/>`).join('')}
    <circle class="packet horizontal" cx="0" cy="0" r="2.5" fill="${accent}" style="--distance: ${width}px; --period: 5.4s; --phase: ${phase}s"/>
    ${labels.map((label, i) => text(i * step, 20, label, 'micro', `text-anchor="${i === 0 ? 'start' : i === 2 ? 'end' : 'middle'}"`)).join('')}
  </g>`;
}

function wrap(file, width, height, title, description, body) {
  const old = original(file);
  const xmlComments = old.match(/<!--[\s\S]*?-->/g) ?? [];
  const cssComments = old.match(/\/\*[\s\S]*?\*\//g) ?? [];
  return `<svg id="static" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${description}</desc>
  ${xmlComments.join('\n  ')}
  <style><![CDATA[
    ${fontFace}
    ${cssComments.join('\n    ')}
    ${css}
  ]]></style>
  <path d="M.5 .5H${width - 16}L${width - .5} 16V${height - .5}H16L.5 ${height - 16}V.5Z" fill="none" stroke="${rule}"/>
  <path d="M.5 20V.5H20M${width - 25} ${height - .5}H${width - 16}L${width - .5} ${height - 16}V${height - 25}" fill="none" stroke="${accent}" stroke-opacity=".65"/>
  ${body}
</svg>
`;
}

function banner(mobile) {
  if (mobile) return wrap('banner-mobile.svg', 360, 316, 'Thiago Araújo — Systems Engineer', 'Systems engineer in São Paulo. End-to-end systems, from idea to reality. Rotating diamond-star signature.', `
  <g class="intro">
    ${text(16, 27, 'SYSTEMS ENGINEER', 'micro', 'style="font-size:13px; letter-spacing:1px; fill:var(--muted)"')}
    ${text(344, 27, 'SP · BR', 'micro', 'text-anchor="end" style="font-size:13px"')}
    ${line(16, 41, 344, 41)}
  </g>
  <g class="type-name">
    ${text(14, 98, 'Thiago', 'display', 'font-size="52"')}
    ${text(14, 167, 'Araújo', 'display accent', 'font-size="61" font-style="italic"')}
  </g>
  <path class="ink-line" d="M17 184H202" stroke="${accent}" stroke-width="2"/>
  <g class="intro" style="--delay:.3s">
    ${seal(281, 111, .78)}
    ${text(281, 181, 'THISUX.TECH', 'micro', 'text-anchor="middle" style="font-size:12px;letter-spacing:1px"')}
  </g>
  <g class="intro" style="--delay:.9s">
    ${text(16, 213, 'end-to-end systems', 'mono', 'style="font-size:18px;fill:var(--ink)"')}
    ${text(16, 239, 'idea → architecture → interface', 'mono', 'style="font-size:14px"')}
    ${text(16, 259, '→ reality', 'mono', 'style="font-size:14px"')}
  </g>
  <g class="intro" style="--delay:1.1s">
    ${line(16, 280, 344, 280)}
    <circle class="packet horizontal" cx="16" cy="280" r="2.5" fill="${accent}" style="--distance:328px;--period:6.4s"/>
    ${text(16, 302, 'PRODUCT / INTELLIGENCE / MACHINES', 'micro', 'style="font-size:12px;letter-spacing:.4px"')}
  </g>`);
  return wrap('banner.svg', 832, 284, 'Thiago Araújo — Systems Engineer', 'Software engineering in São Paulo. Product Systems, Intelligent Systems, Agents and Machines. From idea to architecture, interface and reality.', `
  <g class="intro">
    ${text(24, 30, 'SYSTEMS ENGINEER / B.S. ENGENHARIA DA COMPUTAÇÃO', 'micro', 'style="font-size:13px;letter-spacing:1px;fill:var(--muted)"')}
    ${text(808, 30, 'SÃO PAULO · BR', 'micro', 'text-anchor="end" style="font-size:13px;letter-spacing:1px"')}
    ${line(24, 45, 808, 45)}
  </g>
  <g class="type-name">
    ${text(21, 139, 'Thiago <tspan class="accent" font-style="italic">Araújo</tspan>', 'display', 'font-size="80"')}
  </g>
  <path class="ink-line" d="M273 154H489" stroke="${accent}" stroke-width="2"/>
  <g class="intro" style="--delay:.65s">
    ${text(24, 190, 'end-to-end systems', 'mono', 'style="font-size:20px;fill:var(--ink)"')}
    ${text(24, 214, 'idea → architecture → interface → reality', 'mono', 'style="font-size:15px"')}
  </g>
  <g class="intro" style="--delay:.3s">
    ${seal(729, 130)}
    ${text(729, 220, 'THISUX.TECH', 'micro', 'text-anchor="middle" style="font-size:13px;letter-spacing:1.8px"')}
  </g>
  <g class="intro" style="--delay:1.1s">
    ${line(24, 237, 808, 237)}
    <circle class="packet horizontal" cx="24" cy="237" r="2.5" fill="${accent}" style="--distance:784px;--period:7s"/>
    ${groups.map((group, i) => `${text(24 + i * 265, 263, group.number, 'mono accent', 'style="font-size:13px"')}${text(50 + i * 265, 263, group.name.toUpperCase().replaceAll('&AMP;', '&amp;'), 'micro', 'style="font-size:12px;letter-spacing:1px;fill:var(--muted)"')}`).join('')}
  </g>`);
}

function systems(mobile) {
  if (mobile) return wrap('systems-mobile.svg', 360, 706, 'Systems — owned end-to-end', 'Product Systems, Intelligent Systems, Agents and Machines. Technologies grouped by domain, with application, neural-network and robot diagrams.', `
  ${text(16, 29, 'SYSTEMS / OWNED END-TO-END', 'micro', 'style="font-size:13px;letter-spacing:.8px;fill:var(--muted)"')}
  ${line(16, 45, 344, 45)}
  ${groups.map((group, i) => {
    const y = 61 + i * 214;
    return `<g class="intro" style="--delay:${.12 + i * .18}s">
      ${text(16, y + 10, group.number, 'mono accent', 'style="font-size:13px"')}
      ${icon(group.icon, 296, y + 3)}
      ${text(16, y + 44, group.name, 'display', 'font-size="27"')}
      ${group.items.map((item, j) => text(16, y + 74 + j * 23, item, 'mono', 'style="font-size:15px"')).join('')}
      ${route(16, y + 180, group.route, 316, i * 1.1)}
    </g>`;
  }).join('')}`);
  return wrap('systems.svg', 832, 334, 'Systems — owned end-to-end', 'Product Systems, Intelligent Systems, Agents and Machines. Technologies grouped by domain, with application, neural-network and robot diagrams.', `
  <g class="intro">
    ${text(24, 30, 'SYSTEMS', 'mono', 'style="font-size:15px;letter-spacing:1.6px;fill:var(--ink)"')}
    ${text(110, 30, '/ OWNED END-TO-END', 'micro', 'style="font-size:13px;letter-spacing:.8px"')}
    ${text(808, 30, '01 — 03', 'mono', 'text-anchor="end" style="font-size:14px"')}
    ${line(24, 47, 808, 47)}
  </g>
  ${[282, 548].map((x, i) => `${line(x, 69, x, 271)}<circle class="packet vertical" cx="${x}" cy="69" r="2.5" fill="${accent}" style="--distance:202px;--phase:${i * 2.4}s;--period:5.6s"/>`).join('')}
  ${groups.map((group, i) => {
    const x = 24 + i * 266;
    return `<g class="intro" style="--delay:${.12 + i * .18}s">
      ${text(x, 81, group.number, 'mono accent', 'style="font-size:14px"')}
      ${icon(group.icon, x + 200, 69)}
      ${text(x, 127, group.name, 'display', 'font-size="26"')}
      ${line(x, 141, x + 240, 141)}
      <path class="ink-line" d="M${x} 141H${x + 54}" stroke="${accent}" stroke-width="1.5"/>
      ${group.items.map((item, j) => text(x, 170 + j * 24, item, 'mono')).join('')}
      ${route(x, 290, group.route, 240, i * 1.1)}
    </g>`;
  }).join('')}`);
}

for (const [file, render] of [
  ['banner.svg', () => banner(false)],
  ['banner-mobile.svg', () => banner(true)],
  ['systems.svg', () => systems(false)],
  ['systems-mobile.svg', () => systems(true)],
]) {
  const output = render().replace(/[ \t]+$/gm, '');
  assert(output.includes(fontFace));
  assert(!/<(?:script|foreignObject)\b/.test(output));
  if (check) assert.equal(original(file), output, `${file} is out of sync. Run node render-profile.mjs.`);
  else writeFileSync(new URL(file, root), output);
  console.log(`${check ? 'checked' : 'rendered'} ${fileURLToPath(new URL(file, root))}`);
}
