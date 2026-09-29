<div align="center">
  <a href="#root"><img src="./banner.svg?v=14" alt="Thiago Araújo — Engenheiro de Software & Builder" width="100%"/></a>
</div>

<p align="center"><sub>🇺🇸 <a href="readme.md">English version</a></sub></p>

<br/>

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <pre lang="bash"><code>$ thiago / perfil_tecnico
------------------------------------------------
• Frontend : React, Next.js, TypeScript, Tailwind
• Backend  : Node.js, Hono, Express, FastAPI
• Data     : PostgreSQL, MongoDB, Redis, Drizzle
• Infra    : Docker, Vercel, GitHub Actions, CF
• Payments : Stripe, PagBank (Pix), webhooks
• Edge     : MCP servers, BullMQ, OCR/LLM pipes</code></pre>
    </td>
    <td width="50%" valign="top">
      <pre lang="python"><code>class EngenheiroDeSoftware:
    def __init__(self):
        self.nome = "Thiago Araújo"
        self.local = "São Paulo, Brasil"
        self.foco = "sistemas de produto · infra agêntica"
        self.estudo = "B.S. Eng. Software — UNIVESP '31"
        self.idiomas = ["Português", "English"]
        self.rabbit_holes = ["física", "música"]</code></pre>
    </td>
  </tr>
</table>

## Sobre mim

Sou o Thiago — engenheiro de software, builder e explorador compulsivo de rabbit holes, de São Paulo.

Construo coisas porque quero entender como funcionam. A maioria dos projetos começa com um simples *"e se?"* e de algum jeito termina comigo mexendo no banco de dados, na API, na interface, no deploy — e às vezes num microcontrolador.

Gosto de trabalhar nas fronteiras: **produto e engenharia, software e hardware, sistemas determinísticos e IA**. Me interesso especialmente por sistemas agênticos, automação, ML, workflows distribuídos e interfaces que fazem sistemas complexos parecerem simples.

Me importo com a coisa toda, não só com o código. Arquitetura, comportamento, performance, UX, modos de falha e os detalhes pequenos que fazem algo parecer intencional.

Fora do software, costumo sumir em rabbit holes sobre **física, cosmologia, psicologia, filosofia, fotografia e música**.

> Gosto de construir sistemas que fazem algo real.

---

## Sistemas

<p align="center">
  <img src="./systems.svg?v=3" alt="Sistemas — produto, ML & dados, agentes & máquinas" width="100%"/>
</p>

---

## Trabalho selecionado

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <h4>agentpay — <small>infra de pagamentos agênticos</small></h4>
      <p>Infraestrutura de autorização para compras feitas por agentes de IA — mandatos determinísticos, validação de política, fluxos auditáveis pra um comprador que não é humano.</p>
      <ul>
        <li>Vencedor do <b>NextWave Hackathon 2026 — LATAM</b>.</li>
        <li>MCP tools, SDK em TypeScript, requests assinadas RFC 8785.</li>
      </ul>
      <p><a href="https://github.com/pedroschott/hackatonyuno">→ repo</a> · <a href="https://nextwave-hackathon-2026.vercel.app/t/H3MDSM">→ live</a></p>
      <p>
        <img src="https://img.shields.io/badge/TypeScript-0b0c10?style=flat-square&logo=typescript&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="TypeScript" />
        <img src="https://img.shields.io/badge/Next.js-0b0c10?style=flat-square&logo=nextdotjs&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Next.js" />
        <img src="https://img.shields.io/badge/MCP-0b0c10?style=flat-square&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="MCP" />
        <img src="https://img.shields.io/badge/Supabase-0b0c10?style=flat-square&logo=supabase&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Supabase" />
      </p>
    </td>
    <td width="50%" valign="top">
      <h4>correio elegante — <small>pagamentos & produto</small></h4>
      <p>Uma plataforma de cartas digitais construída como produto completo — cards temáticos, uploads de mídia, compartilhamento público e entrega liberada por pagamento.</p>
      <ul>
        <li>Stripe (cartão/boleto) + PagBank Pix com reconciliação por webhook.</li>
        <li>SPA React 19, API Express 5, Prisma sobre MongoDB.</li>
      </ul>
      <p><a href="https://github.com/thisux1/correioelegante3">→ repo</a></p>
      <p>
        <img src="https://img.shields.io/badge/React_19-0b0c10?style=flat-square&logo=react&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="React 19" />
        <img src="https://img.shields.io/badge/Express-0b0c10?style=flat-square&logo=express&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Express" />
        <img src="https://img.shields.io/badge/Prisma-0b0c10?style=flat-square&logo=prisma&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Prisma" />
        <img src="https://img.shields.io/badge/Stripe-0b0c10?style=flat-square&logo=stripe&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Stripe" />
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>singular — <small>inteligência de documentos</small></h4>
      <p>Um pipeline que transforma documentos em quizzes estruturados — a ingestão roda como workflow assíncrono, não uma request HTTP.</p>
      <ul>
        <li>Filas BullMQ + Redis, etapa de OCR em Python, geração com Ollama.</li>
        <li>API Hono, PostgreSQL + Drizzle, front React PWA.</li>
      </ul>
      <p><a href="https://github.com/thisux1/Singular">→ repo</a></p>
      <p>
        <img src="https://img.shields.io/badge/Hono-0b0c10?style=flat-square&logo=hono&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Hono" />
        <img src="https://img.shields.io/badge/PostgreSQL-0b0c10?style=flat-square&logo=postgresql&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="PostgreSQL" />
        <img src="https://img.shields.io/badge/Drizzle-0b0c10?style=flat-square&logo=drizzle&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Drizzle" />
        <img src="https://img.shields.io/badge/BullMQ-0b0c10?style=flat-square&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="BullMQ" />
      </p>
    </td>
    <td width="50%" valign="top">
      <h4>oracle — <small>automação & ML</small></h4>
      <p>Um companheiro por máquina de estados pro EPIC RPG que automatiza o gameplay resolvendo os desafios de verificação localmente.</p>
      <ul>
        <li>CNN resolve imagens de captcha offline — sem APIs de visão externas.</li>
        <li>TUI Textual + dashboard FastAPI pra controle ao vivo.</li>
      </ul>
      <p><a href="https://github.com/thisux1/Oracle">→ repo</a></p>
      <p>
        <img src="https://img.shields.io/badge/Python-0b0c10?style=flat-square&logo=python&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Python" />
        <img src="https://img.shields.io/badge/TensorFlow_Lite-0b0c10?style=flat-square&logo=tensorflow&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="TensorFlow Lite" />
        <img src="https://img.shields.io/badge/FastAPI-0b0c10?style=flat-square&logo=fastapi&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="FastAPI" />
        <img src="https://img.shields.io/badge/Textual-0b0c10?style=flat-square&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Textual" />
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>aeroglove — <small>sistemas embarcados</small></h4>
      <p>Uma interface de controle por gestos pra pilotar um drone custom — a orientação da mão vira comandos de voo sem fio.</p>
      <ul>
        <li>ESP32-S3 lê dados da IMU, fusão Madgwick a 100 Hz.</li>
        <li>Link de controle ESP-NOW, BLE pra configuração.</li>
      </ul>
      <p><a href="https://github.com/thisux1/AeroGlove">→ repo</a></p>
      <p>
        <img src="https://img.shields.io/badge/MicroPython-0b0c10?style=flat-square&logo=micropython&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="MicroPython" />
        <img src="https://img.shields.io/badge/ESP32--S3-0b0c10?style=flat-square&logo=espressif&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="ESP32-S3" />
        <img src="https://img.shields.io/badge/ESP--NOW-0b0c10?style=flat-square&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="ESP-NOW" />
        <img src="https://img.shields.io/badge/BLE-0b0c10?style=flat-square&logo=bluetooth&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="BLE" />
      </p>
    </td>
    <td width="50%" valign="top">
      <h4>realiza.vc — <small>produto & ops</small></h4>
      <p>Sistema operacional de programa de mentoria — board de matching, registros por encontro, semáforo computado de saúde da dupla, fluxos de assinatura.</p>
      <ul>
        <li>RLS do Supabase escopa cada linha por papel — coord → mentor.</li>
        <li>Next.js 16, 54 migrations, 156 testes, <code>/demo</code> pública.</li>
      </ul>
      <p><a href="https://github.com/thisux1/realiza.vc">→ repo</a></p>
      <p>
        <img src="https://img.shields.io/badge/Next.js_16-0b0c10?style=flat-square&logo=nextdotjs&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Next.js 16" />
        <img src="https://img.shields.io/badge/Supabase-0b0c10?style=flat-square&logo=supabase&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Supabase" />
        <img src="https://img.shields.io/badge/TypeScript-0b0c10?style=flat-square&logo=typescript&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="TypeScript" />
      </p>
    </td>
  </tr>
</table>

---

## GitHub

<div align="center">
  <img src="https://github-readme-stats-tau-one-34.vercel.app/api?username=thisux1&show_icons=true&include_all_commits=true&count_private=true&hide=contribs&card_width=495&bg_color=0b0c10&title_color=ece9df&icon_color=e5484d&ring_color=e5484d&text_color=a8a395&border_color=26282e&v=12" alt="Estatísticas do GitHub" width="49.5%" />
  <img src="https://github-readme-stats-tau-one-34.vercel.app/api/top-langs/?username=thisux1&layout=compact&langs_count=8&card_width=495&bg_color=0b0c10&title_color=ece9df&icon_color=e5484d&text_color=a8a395&border_color=26282e&v=12" alt="Linguagens mais usadas" width="49.5%" />
</div>

<p align="center">
  <img src="./streak.svg?v=2" alt="Streak de contribuições" width="100%" />
</p>

<p align="center">
  <img src="https://github-readme-activity-graph-virid-three.vercel.app/graph?username=thisux1&bg_color=0b0c10&color=a8a395&line=e5484d&point=ece9df&area=true&area_color=3d1517&hide_border=true&custom_title=contribution%20graph&v=11" alt="Gráfico de atividade" width="100%" />
</p>

---

## Onde me encontrar

<div align="center">
  <a href="https://linkedin.com/in/thisux" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0b0c10?style=for-the-badge&logo=linkedin&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="mailto:thisux94@gmail.com">
    <img src="https://img.shields.io/badge/Email-0b0c10?style=for-the-badge&logo=gmail&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Email" />
  </a>
  &nbsp;
  <a href="https://thisux.tech" target="_blank">
    <img src="https://img.shields.io/badge/thisux.tech-0b0c10?style=for-the-badge&logo=firefoxbrowser&logoColor=e5484d&labelColor=0b0c10&color=e5484d" alt="Portfolio" />
  </a>
</div>
