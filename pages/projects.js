import { createPromptModule } from "inquirer";
import open from "open";
import { indexPrompt } from "./home.js";
import chalk from "chalk";

const prompt = createPromptModule();

const projects = [
  {
    name: "Gotcha!",
    description: "A fun word game to play with friends and family on a trip!",
    url: "https://gotcha.robinaerts.be",
  },
  {
    name: "ReadIt",
    description: "Track when people read your emails",
    url: "https://tryread.it",
  },
  {
    name: "ShortGen",
    description: "Easily generate short videos for your social media pages",
    url: "https://robinaerts.be/project/shortgen",
  },
];

export const projectPrompt = [
  {
    type: "list",
    name: "action",
    message: "View my recent projects",
    choices: [
      ...projects.map((project) => ({
        name: project.name,
        description: project.description,
        value: () => {
          console.log("Opening project...");
          open(project.url);
          prompt(projectPrompt).then((answer) => {
            answer.action();
          });
        },
      })),
      {
        name: chalk.yellow("Return to main menu"),
        value: () => {
          prompt(indexPrompt).then((answer) => {
            answer.action();
          });
        },
      },
    ],
  },
];
