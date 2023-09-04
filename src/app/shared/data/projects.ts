const PROJECTS_LIST = [
  {
    id: 1,
    name: "Analog Clock",
    link: "/analog-clock",
    description: "Basic Analog Clock",
    component: "AnalogClockComponent",
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
    description: "Kanban Board",
    component: "KanbanBoardComponent",
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
    description: "Pomodoro Clock",
    component: "PomodoroClockComponent",
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
    description: "Calculator",
    component: "CalculatorComponent",
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
    description: "Drum Machine",
    component: "DrumMachineComponent",
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
    description: "Markdown Previewer",
    component: "MarkdownPreviewerComponent",
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
    description: "Random Quote Machine",
    component: "RandomQuoteMachineComponent",
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
    description: "Bar Chart",
    component: "BarChartComponent",
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
    description: "Scatterplot Graph",
    component: "ScatterplotGraphComponent",
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
    description: "Heat Map",
    component: "HeatMapComponent",
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
    description: "Voltage Drop Calculator",
    component: "VoltageDropCalculatorComponent",
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
    description: "Timeline Viewer",
    component: "TimelineViewerComponent",
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
    description: "Async Await",
    component: "AsyncAwaitComponent",
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
    description: "Promise",
    component: "PromiseComponent",
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
    description: "Lorem Ipsum Generator",
    component: "LoremIpsumGeneratorComponent",
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
    description: "Password Generator",
    component: "PasswordGeneratorComponent",
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
    description: "Conduit Size Calculator",
    component: "ConduitSizeCalculatorComponent",
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
    description: "Conduit Fill Calculator",
    component: "ConduitFillCalculatorComponent",
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
    description: "Temp Power Service Calculator",
    component: "TempPowerServiceCalculatorComponent",
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
