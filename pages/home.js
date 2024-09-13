import { createPromptModule } from "inquirer";
import { projectPrompt } from "./projects.js";
import open from "open";
import chalk from "chalk";

const prompt = createPromptModule();

export const indexPrompt = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: "View my recent projects",
        value: () => {
          prompt(projectPrompt).then((answer) => {
            answer.action();
          });
        },
      },
      {
        name: "View my resume",
        value: () => {
          open("https://robinaerts.be/files/resume.pdf");
        },
      },
      {
        name: "Contact me",
        value: () => {
          open("mailto:nibor.aerts@gmail.com");
        },
      },
      {
        name: chalk.yellow("Exit"),
        value: () => {
          console.log("Goodbye! 👋");
          process.exit();
        },
      },
    ],
  },
];
