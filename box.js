import boxen from "boxen";
import { data } from "./data.js";
import chalk from "chalk";

export const me = boxen(
  [
    `${data.name}`,
    `${data.tagline}`,
    `${data.location}`,
    ``,
    `${data.labelWebsite}  ${data.website}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    "",
    `${chalk.green(
      `Robin Aerts is a dedicated software engineer and Computer Science Engineering student at Ghent University.
      With a deep-rooted passion for coding, Robin has honed their skills in C#, web development, and a wide range of modern technologies.
      Constantly driven by curiosity and innovation, they are always eager to learn, grow, and take on new challenges that push the boundaries of software development.`
    )}`,
  ].join("\n"),
  {
    margin: 1,
    float: "left",
    padding: 1,
    borderStyle: "single",
    borderColor: "white",
  }
);
