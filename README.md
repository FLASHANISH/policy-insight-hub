<p align="center">
  <img src="AI Policy Impact Simulator for India.png" alt="AI Policy Impact Simulator for India" width="200" />
</p>

<h1 align="center">🇮🇳 AI Policy Impact Simulator for India</h1>

<p align="center">
  <strong>An AI-powered platform to explore, analyze, and simulate the impact of Indian government policies across multiple sectors.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#environment-variables">Environment Variables</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/HuggingFace-API-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="HuggingFace" />
</p>

---

## 📖 About

The **AI Policy Impact Simulator for India** is an interactive web application that helps citizens, researchers, policymakers, and students understand the real-world impact of various Indian government policies. It features an AI-powered chatbot assistant (PolicyAI) that can answer questions about policies, rules, and regulations using a comprehensive knowledge base.

The platform covers a wide range of Indian policy domains — from tax reforms and cyber crime laws to insurance regulations and AI governance frameworks.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 **Interactive Dashboard** | Overview of policy categories with key statistics and visual analytics |
| 📚 **Policy Library** | Browse and search through a comprehensive collection of Indian policies |
| 🤖 **PolicyAI Assistant** | Context-aware AI using `face-api.js` and LLMs to answer questions and assist with identity protection |
| 🔍 **Scan My Photo** | **Identity Protection Suite**: Face matching, reverse image search, and metadata (EXIF) risk analysis |
| 📉 **Impact Simulation** | Simulate and visualize the potential impact of policy changes |
| ⚠️ **Risk Analysis** | Analyze risks associated with policy implementations |
| 📝 **Reports** | Generate and view detailed policy analysis reports |
| 🔍 **Smart Search** | Global keyword search with category-based filtering and keyboard navigation |

### 🛡️ Identity Protection Suite (NEW)

- 👥 **Face Match Checker** — Uses `face-api.js` with 68 facial landmarks for high-accuracy identity verification (distance < 0.35 confidence).
- 🖼️ **Reverse Image Search** — Finds unauthorized use of your photos across the web using Google Lens / SerpAPI.
- 💾 **Metadata (EXIF) Analysis** — Extracts GPS, camera info, and detects AI-generated content (Midjourney, DALL-E).
- 🚩 **Privacy Risk Score** — AI-powered assessment of image risk based on location, biometric data, and context.
- 📨 **Auto-Complaint** — Generates professional AI complaint letters for reported identity theft incidents.

### 📋 Policy Domains Covered

- 💰 **Tax Policy** — New income tax slabs, deductions, and financial regulations
- 🛣️ **Road Safety Rules** — Traffic rules, penalties, and safety guidelines
- 👮 **IPS Conduct Rules** — Indian Police Service rules and regulations
- 🎓 **AICTE Rules** — Technical education guidelines and regulations
- 🛡️ **Cyber Crime** — Online fraud, social media blackmail, and complaint procedures
- 🤖 **AI Governance** — AI regulation policies and ethical frameworks
- 🏥 **Insurance Policy** — Health, life, and general insurance regulations
- 🔒 **DPDP Act 2023** — Digital Personal Data Protection rules
- 💸 **AML Policy** — Anti-Money Laundering policies and compliance
- 📢 **Whistle Blower Protection** — Whistleblower protection policies and guidelines

---

## 🛠️ Tech Stack

### Frontend
- **React 18** — UI framework with functional components and hooks
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast build tool and dev server
- **TailwindCSS** — Utility-first CSS framework
- **Shadcn/UI** — Accessible, customizable UI component library
- **Radix UI** — Headless primitive components
- **Framer Motion** — Production-ready animations
- **Recharts** — Composable charting library
- **React Router** — Client-side routing
- **TanStack React Query** — Data fetching and caching
- **Zustand** — State management
- **Lucide React** — Icon library

### AI / Computer Vision
- **face-api.js** — Browser-side face detection & recognition using 68 facial landmarks
- **exifr** — High-performance image metadata (EXIF) parser
- **HuggingFace Inference API** — Powers the PolicyAI chatbot and image context analysis
- **LLM Models** — `meta-llama/Llama-3.1-8B-Instruct` and `zephyr-7b-beta`
- **SerpAPI** — Provides Google Lens and Reverse Image Search data
- **Custom Knowledge Base** — 300+ line Indian policy knowledge system

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** or **bun** package manager
- A **HuggingFace API Key** ([Get one here](https://huggingface.co/settings/tokens))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/policy-insight-hub.git
   cd policy-insight-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Open `.env` and add your HuggingFace API key:

   ```env
   VITE_HF_API_KEY=your_huggingface_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   bun dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:8080](http://localhost:8080)

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_HF_API_KEY` | HuggingFace API key for chatbot and image analysis | ✅ Yes |
| `VITE_SERPAPI_KEY` | SerpAPI key for Reverse Image Search | ✅ Yes |
| `VITE_IMGBB_KEY` | imgBB key for temporary image host for search | ✅ Yes |

> **Note:** All client-side environment variables must be prefixed with `VITE_` for Vite to expose them to the application.

### Getting a HuggingFace API Key

1. Create an account at [huggingface.co](https://huggingface.co)
2. Go to **Settings** → **Access Tokens**
3. Click **New token** → select **Read** permission
4. Copy the token and paste it into your `.env` file

---

## 📁 Project Structure

```
policy-insight-hub/
├── public/                     # Static assets
│   ├── policies/               # Policy document assets
│   ├── insurance policy/       # Insurance policy documents
│   └── Whistle Blower Policy/  # Whistleblower policy documents
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Shadcn/UI components
│   │   ├── AppLayout.tsx       # Main application layout with sidebar
│   │   ├── AppSidebar.tsx      # Navigation sidebar
│   │   ├── ChatBox.tsx         # AI chatbot component (HuggingFace API)
│   │   ├── SearchBar.tsx       # Global search with category filtering
│   │   ├── NavLink.tsx         # Navigation link component
│   │   └── StatCard.tsx        # Statistics display card
│   ├── data/
│   │   ├── knowledgeBase.ts    # AI chatbot knowledge base & system prompt
│   │   └── policies.ts        # Policy data and categories
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Application pages/routes
│   │   ├── Dashboard.tsx       # Main dashboard
│   │   ├── PolicyLibrary.tsx   # Policy browsing page
│   │   ├── ImpactSimulation.tsx# Policy impact simulator
│   │   ├── RiskAnalysis.tsx    # Risk analysis page
│   │   ├── TaxPolicy.tsx       # Tax policy details
│   │   ├── CyberCrime.tsx      # Cyber crime information
│   │   ├── AiGovernance.tsx    # AI governance framework
│   │   ├── InsurancePolicy.tsx # Insurance regulations
│   │   ├── DpdpRules.tsx       # DPDP Act 2023
│   │   ├── ...                 # Other policy pages
│   │   └── scan-my-photo/      # Identity Protection Suite
│   │       ├── FaceMatch.tsx   # Face verification tool
│   │       ├── Scanning.tsx    # Reverse image search UI
│   │       ├── ActionCenter.tsx# Complaint & resolution portal
│   │       └── api.ts          # Computer vision & search APIs
│   ├── stores/                 # Zustand state stores
│   ├── test/                   # Test files
│   ├── App.tsx                 # Root application component with routes
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── .env                        # Environment variables (not committed)
├── .env.example                # Environment variable template
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |
| `npm run test` | Run tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features when possible
- Update documentation as needed

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **HuggingFace** — For providing the inference API powering the PolicyAI chatbot
- **Meta AI** — For the LLaMA 3.1 language model
- **Shadcn/UI** — For the beautiful, accessible component library
- **Government of India** — For the publicly available policy documents and data

---

<p align="center">
  Made with ❤️ for India
</p>
