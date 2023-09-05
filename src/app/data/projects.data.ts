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
        info: "assets/projects/analog-clock/info.md",
        details: "assets/projects/analog-clock/details.md",
        component: "assets/projects/analog-clock/component.ts",
        template: "assets/projects/analog-clock/template.html",
        styles: "assets/projects/analog-clock/styles.css",
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
        info: "assets/projects/kanban-board/info.md",
        details: "assets/projects/kanban-board/details.md",
        component: "assets/projects/kanban-board/component.ts",
        template: "assets/projects/kanban-board/template.html",
        styles: "assets/projects/kanban-board/styles.css",
      },
    ],
  },
  {
    id: 3,
    name: "Not Found",
    link: "/not-found",
    linkActive: true,
    description: "Not Found Page",
    component: "NotFoundComponent",
    status: "complete",
    files: [
      {
        info: "assets/projects/not-found/info.md",
        details: "assets/projects/not-found/details.md",
        component: "assets/projects/not-found/component.ts",
        template: "assets/projects/not-found/template.html",
        styles: "assets/projects/not-found/styles.css",
      },
    ],
  },
  {
    id: 4,
    name: "Pomodoro Clock",
    link: "/pomodoro",
    linkActive: true,
    description: "Pomodoro Clock",
    component: "PomodoroClockComponent",
    status: "complete",
    files: [
      {
        info: "assets/projects/pomodoro/info.md",
        component: "assets/projects/pomodoro/component.ts",
        details: "assets/projects/pomodoro/details.md",
        template: "assets/projects/pomodoro/template.html",
        styles: "assets/projects/pomodoro/styles.css",
      },
    ],
  },
  /*

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
        component: "assets/projects/drum-machine/component.ts",
        details: "assets/projects/drum-machine/details.md",
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
        component: "assets/projects/markdown-previewer/component.ts",
        details: "assets/projects/markdown-previewer/details.md",
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
        component: "assets/projects/random-quote-machine/component.ts",
        details: "assets/projects/random-quote-machine/details.md",
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
        component: "assets/projects/bar-chart/component.ts",
        details: "assets/projects/bar-chart/details.md",
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
        component: "assets/projects/scatterplot-graph/component.ts",

        details: "assets/projects/scatterplot-graph/details.md",
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
        component: "assets/projects/heat-map/component.ts",
        details: "assets/projects/heat-map/details.md",
        info: "assets/projects/heat-map/info.md",
      },
    ],
  },
  {
    id: 11,
    name: "Voltage Drop Calculator",
    link: "/voltage-drop",
    linkActive: false,
    description: "Voltage Drop Calculator",
    component: "VoltageDropComponent",
    status: "to-do",
    files: [
      {
        component: "assets/projects/voltage-drop/component.ts",
        details: "assets/projects/voltage-drop/details.md",
        info: "assets/projects/voltage-drop/info.md",
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
        component: "assets/projects/timeline-viewer/component.ts",
        details: "assets/projects/timeline-viewer/details.md",
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
        component: "assets/projects/async-await/component.ts",
        details: "assets/projects/async-await/details.md",
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
        component: "assets/projects/promise/component.ts",
        details: "assets/projects/promise/details.md",
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
        component: "assets/projects/lorem-ipsum-generator/component.ts",
        details: "assets/projects/lorem-ipsum-generator/details.md",
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
        component: "assets/projects/password-generator/component.ts",
        details: "assets/projects/password-generator/details.md",
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
        component: "assets/projects/conduit-size-calculator/component.ts",
        details: "assets/projects/conduit-size-calculator/details.md",
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
        component: "assets/projects/conduit-fill-calculator/component.ts",
        details: "assets/projects/conduit-fill-calculator/details.md",
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
        component: "assets/projects/temp-power-service-calculator/component.ts",
        details: "assets/projects/temp-power-service-calculator/details.md",
        info: "assets/projects/temp-power-service-calculator/info.md",
      },
    ],
  },
  {
    id: 20,
    name: "Image Gallery",
    link: "/image-gallery",
    linkActive: false,
    description: "TypeScript Image Gallery",
    component: "ImageGalleryCalculatorComponent",
    status: "to-do",
    files: [
      {
        component: "assets/projects/image-gallery/component.ts",
        details: "assets/projects/image-gallery/details.md",
        info: "assets/projects/image-gallery/info.md",
      },
    ],
  },
  {
    id: 21,
    name: "Tic-Tac-Toe",
    link: "/tic-tac-toe",
    linkActive: false,
    description: "TypeScript Tic-Tac-Toe",
    component: "TicTacToeCalculatorComponent",
    status: "to-do",
    files: [
      {
        component: "assets/projects/tic-tac-toe/component.ts",
        details: "assets/projects/tic-tac-toe/details.md",
        info: "assets/projects/tic-tac-toe/info.md",
      },
    ],
  },
  {
    id: 22,
    name: "Weather Widget",
    link: "/weather-widget",
    linkActive: false,
    description: "TypeScript Weather Widget",
    component: "WeatherWidgetComponent",
    status: "to-do",
    files: [
      {
        component: "assets/projects/weather-widget/component.ts",
        details: "assets/projects/weather-widget/details.md",
        info: "assets/projects/weather-widget/info.md",
      },
    ],
  },
  {
    id: 23,
    name: "Calculator",
    link: "/calculator",
    linkActive: false,
    description: "Calculator",
    component: "CalculatorComponent",
    status: "to-do",
    files: [
      {
        component: "assets/projects/calculator/component.ts",
        details: "assets/projects/calculator/details.md",
        info: "assets/projects/calculator/info.md",
      },
    ],
  },
  */
];

export { PROJECTS_LIST };
