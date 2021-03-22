import chalk from 'chalk';
import boxen from 'boxen';

import { PageViewTotals } from '~/types';

export function displayUniqueViews(views: PageViewTotals) {
  type sortableLog = [string, number];
  const orderedSummary: sortableLog[] = [];
  let summary = '';

  for (const page in views) {
    orderedSummary.push([page, views[page]]);
  }
  orderedSummary.sort((a, b) => b[1] - a[1]);

  orderedSummary.forEach((rec) => {
    summary += `${chalk.greenBright(rec[0])} ${chalk.red(
      rec[1]
    )} unique views \n`;
  });

  console.log(chalk.underline('Unique Views'));
  console.log(
    boxen(summary, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green',
    })
  );
}
