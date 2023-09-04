const PROJECTS_LIST = [
  {
    id: 1,
    name: "Analog Clock",
    link: "/analog-clock",
    linkActive: true,
    description: "Basic Analog Clock",
    component: "AnalogClockComponent",
    status: "complete",
    files: [
      {
        code: "assets/projects/analog-clock/code.ts",
        overview: "assets/projects/analog-clock/overview.md",
        info: "assets/projects/analog-clock/info.md",
      },
    ],
  },
  {
    id: 2,
    name: "Kanban Board",
    link: "/kanban-board",
    linkActive: true,
    description: "Kanban Board",
    component: "KanbanBoardComponent",
    status: "complete",
    files: [
      {
        code: "assets/projects/kanban-board/code.ts",
        overview: "assets/projects/kanban-board/overview.md",
        info: "assets/projects/kanban-board/info.md",
      },
    ],
  },
  {
    id: 3,
    name: "Pomodoro Clock",
    link: "/pomodoro-clock",
    linkActive: false,
    description: "Pomodoro Clock",
    component: "PomodoroClockComponent",
    status: "in-progress",
    files: [
      {
        code: "assets/projects/pomodoro-clock/code.ts",
        overview: "assets/projects/pomodoro-clock/overview.md",
        info: "assets/projects/pomodoro-clock/info.md",
      },
    ],
  },
  {
    id: 4,
    name: "Calculator",
    link: "/calculator",
    linkActive: false,
    description: "Calculator",
    component: "CalculatorComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/calculator/code.ts",
        overview: "assets/projects/calculator/overview.md",
        info: "assets/projects/calculator/info.md",
      },
    ],
  },
  {
    id: 5,
    name: "Drum Machine",
    link: "/drum-machine",
    linkActive: false,
    description: "Drum Machine",
    component: "DrumMachineComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/drum-machine/code.ts",
        overview: "assets/projects/drum-machine/overview.md",
        info: "assets/projects/drum-machine/info.md",
      },
    ],
  },
  {
    id: 6,
    name: "Markdown Previewer",
    link: "/markdown-previewer",
    linkActive: false,
    description: "Markdown Previewer",
    component: "MarkdownPreviewerComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/markdown-previewer/code.ts",
        overview: "assets/projects/markdown-previewer/overview.md",
        info: "assets/projects/markdown-previewer/info.md",
      },
    ],
  },
  {
    id: 7,
    name: "Random Quote Machine",
    link: "/random-quote-machine",
    linkActive: false,
    description: "Random Quote Machine",
    component: "RandomQuoteMachineComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/random-quote-machine/code.ts",
        overview: "assets/projects/random-quote-machine/overview.md",
        info: "assets/projects/random-quote-machine/info.md",
      },
    ],
  },
  {
    id: 8,
    name: "Bar Chart",
    link: "/bar-chart",
    linkActive: false,
    description: "Bar Chart",
    component: "BarChartComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/bar-chart/code.ts",
        overview: "assets/projects/bar-chart/overview.md",
        info: "assets/projects/bar-chart/info.md",
      },
    ],
  },
  {
    id: 9,
    name: "Scatterplot Graph",
    link: "/scatterplot-graph",
    linkActive: false,
    description: "Scatterplot Graph",
    component: "ScatterplotGraphComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/scatterplot-graph/code.ts",

        overview: "assets/projects/scatterplot-graph/overview.md",
        info: "assets/projects/scatterplot-graph/info.md",
      },
    ],
  },
  {
    id: 10,
    name: "Heat Map",
    link: "/heat-map",
    linkActive: false,
    description: "Heat Map",
    component: "HeatMapComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/heat-map/code.ts",
        overview: "assets/projects/heat-map/overview.md",
        info: "assets/projects/heat-map/info.md",
      },
    ],
  },
  {
    id: 11,
    name: "Voltage Drop Calculator",
    link: "/voltage-drop-calculator",
    linkActive: false,
    description: "Voltage Drop Calculator",
    component: "VoltageDropCalculatorComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/voltage-drop-calculator/code.ts",
        overview: "assets/projects/voltage-drop-calculator/overview.md",
        info: "assets/projects/voltage-drop-calculator/info.md",
      },
    ],
  },
  {
    id: 12,
    name: "Timeline Viewer",
    link: "/timeline-viewer",
    linkActive: false,
    description: "Timeline Viewer",
    component: "TimelineViewerComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/timeline-viewer/code.ts",
        overview: "assets/projects/timeline-viewer/overview.md",
        info: "assets/projects/timeline-viewer/info.md",
      },
    ],
  },
  {
    id: 13,
    name: "Async Await",
    link: "/async-await",
    linkActive: false,
    description: "Async Await",
    component: "AsyncAwaitComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/async-await/code.ts",
        overview: "assets/projects/async-await/overview.md",
        info: "assets/projects/async-await/info.md",
      },
    ],
  },
  {
    id: 14,
    name: "Promise",
    link: "/promise",
    linkActive: false,
    description: "Promise",
    component: "PromiseComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/promise/code.ts",
        overview: "assets/projects/promise/overview.md",
        info: "assets/projects/promise/info.md",
      },
    ],
  },
  {
    id: 15,
    name: "Lorem Ipsum Generator",
    link: "/lorem-ipsum-generator",
    linkActive: false,
    description: "Lorem Ipsum Generator",
    component: "LoremIpsumGeneratorComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/lorem-ipsum-generator/code.ts",
        overview: "assets/projects/lorem-ipsum-generator/overview.md",
        info: "assets/projects/lorem-ipsum-generator/info.md",
      },
    ],
  },
  {
    id: 16,
    name: "Password Generator",
    link: "/password-generator",
    linkActive: false,
    description: "Password Generator",
    component: "PasswordGeneratorComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/password-generator/code.ts",
        overview: "assets/projects/password-generator/overview.md",
        info: "assets/projects/password-generator/info.md",
      },
    ],
  },
  {
    id: 17,
    name: "Conduit Size Calculator",
    link: "/conduit-size-calculator",
    linkActive: false,
    description: "Conduit Size Calculator",
    component: "ConduitSizeCalculatorComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/conduit-size-calculator/code.ts",
        overview: "assets/projects/conduit-size-calculator/overview.md",
        info: "assets/projects/conduit-size-calculator/info.md",
      },
    ],
  },
  {
    id: 18,
    name: "Conduit Fill Calculator",
    link: "/conduit-fill-calculator",
    linkActive: false,
    description: "Conduit Fill Calculator",
    component: "ConduitFillCalculatorComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/conduit-fill-calculator/code.ts",
        overview: "assets/projects/conduit-fill-calculator/overview.md",
        info: "assets/projects/conduit-fill-calculator/info.md",
      },
    ],
  },
  {
    id: 19,
    name: "Temp Power Service Calculator",
    link: "/temp-power-service-calculator",
    linkActive: false,
    description: "Temp Power Service Calculator",
    component: "TempPowerServiceCalculatorComponent",
    status: "to-do",
    files: [
      {
        code: "assets/projects/temp-power-service-calculator/code.ts",
        overview: "assets/projects/temp-power-service-calculator/overview.md",
        info: "assets/projects/temp-power-service-calculator/info.md",
      },
    ],
  },
];

export { PROJECTS_LIST };
