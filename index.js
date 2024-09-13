import inquirer from "inquirer";
import { me } from "./box.js";
import clear from "clear";
import { ascii } from "./data.js";
import { indexPrompt } from "./pages/home.js";

const prompt = inquirer.createPromptModule();

export const runPrompt = (page = indexPrompt) => {
  clear();
  console.log(ascii);
  console.log(me);
  prompt(page).then((answer) => {
    answer.action();
  });
};

runPrompt();
