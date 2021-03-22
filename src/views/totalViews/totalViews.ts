import boxen from 'boxen';
import chalk from 'chalk';
import { PageViewTotals } from '~/types';

export function displayTotalViews(views: PageViewTotals) {
  type sortable = [string, number];
  const orderedSummary: sortable[] = [];
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

  console.log(chalk.underline('Total Views'));
  console.log(
    boxen(summary, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green',
    })
  );
}
