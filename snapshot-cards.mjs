// Fetch the live Vercel card endpoints once and freeze them as static SVGs
// under cards/. Runs hourly via .github/workflows/snapshot-cards.yml.
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';

const STATS = 'https://github-readme-stats-tau-one-34.vercel.app';
const STREAK = 'https://github-readme-streak-stats-wine-eight-44.vercel.app';
const GRAPH = 'https://github-readme-activity-graph-virid-three.vercel.app';

const S = 'username=thisux1&show_icons=true&include_all_commits=true&count_private=true&hide=contribs&theme=editorial_tech&title_color=cbc6ba&bg_color=0000';
const L = 'username=thisux1&langs_count=6&theme=editorial_tech&title_color=cbc6ba&bg_color=0000';
const K = 'user=thisux1&theme=ember&background=0000';
const G = 'username=thisux1&bg_color=0000&color=cbc6ba&line=ff2a5f&point=ece9df&area=true&area_color=3d1420&hide_border=false&border_color=343039&custom_title=contribution%20graph';

const cards = {
  'stats-440': `${STATS}/api?${S}&card_width=440&chamfer=tl&quinas=tl&edge_accent=top%2Cleft`,
  'stats-350': `${STATS}/api?${S}&card_width=350&chamfer=tl%2Ctr&quinas=tl%2Ctr&edge_accent=top%2Cright%2Cbottom%2Cleft`,
  'langs-440': `${STATS}/api/top-langs/?${L}&card_width=440&chamfer=tr&quinas=tr&edge_accent=top%2Cright`,
  'langs-350': `${STATS}/api/top-langs/?${L}&card_width=350&chamfer=none&quinas=none&edge_accent=right%2Cleft`,
  'streak':    `${STREAK}/?${K}&chamfer=none&quinas=none&edge_accent=right%2Cleft`,
  'streak-350':`${STREAK}/?${K}&card_width=350&chamfer=br%2Cbl&quinas=br%2Cbl&edge_accent=top%2Cright%2Cbottom%2Cleft`,
  'graph':     `${GRAPH}/graph?${G}&width=880&chamfer=br%2Cbl&quinas=br%2Cbl&edge_accent=right%2Cbottom%2Cleft`,
  'graph-520': `${GRAPH}/graph?${G}&width=520&height=300&days=15&chamfer=tl%2Ctr%2Cbr%2Cbl&quinas=tl%2Ctr%2Cbr%2Cbl&edge_accent=top%2Cright%2Cbottom%2Cleft`,
};

mkdirSync('cards', { recursive: true });
let ok = 0, failed = [];

for (const [name, url] of Object.entries(cards)) {
  const file = `cards/${name}.svg`;
  let svg = null;
  for (let attempt = 1; attempt <= 3 && !svg; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
      const body = await res.text();
      if (res.ok && body.includes('<svg') && body.includes('</svg>')) svg = body;
    } catch {}
    if (!svg && attempt < 3) await new Promise(r => setTimeout(r, 3000));
  }
  if (svg) {
    writeFileSync(file, svg);
    ok++;
    console.log(`ok  ${file} (${svg.length}b)`);
  } else {
    failed.push(name);
    console.log(`ERR ${file} — kept ${existsSync(file) ? 'previous' : 'nothing'}`);
  }
}

console.log(`\n${ok}/${Object.keys(cards).length} cards refreshed`);
process.exit(failed.length === Object.keys(cards).length ? 1 : 0);
