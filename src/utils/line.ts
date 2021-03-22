import chalk from 'chalk';

export function drawLine(lenght: number = 50) {
  let line = '-';

  for (let i = 0; i < lenght; i++) {
    line += '-';
  }

  console.log(chalk.blueBright(line));
}
