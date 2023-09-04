import { Component } from "@angular/core";
import * as readme from "raw-loader!./intro.md";
@Component({
  templateUrl: "./intro.component.html",
})
export class IntroComponent {
  markdown = `## Markdown __rulez__!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  console.log(language);
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet
  
  ### Blockquote
  > Blockquote to the max`;

  markdownFile = '`' + readme + '`';
}

