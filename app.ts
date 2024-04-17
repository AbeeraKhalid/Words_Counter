#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";
console.log(
  chalk.bgMagentaBright.cyan.bold(
    "\n\n\t\t<<<***--WELCOME TO MY WORDS-COUNTER APP!--***>>>\n\n\t\t"
  )
);
const Answer: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: chalk.bgBlueBright.magentaBright("Enter your sentences to count the word:")
  },
]);
const words_count = Answer.Sentence.trim().split(" ");

console.log(chalk.italic.bgWhiteBright.yellow(words_count));

console.log(
  chalk.italic.bgWhiteBright.blueBright(
    `We have ${words_count.length} Words in our sentences`
  )
);
