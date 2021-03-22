import chalk from 'chalk';

//initialise aliases before using them
import { loadAliases } from './init/loadAliases';
loadAliases({
  '~': __dirname,
});

import { getLogsSummary } from '~/useCases';
import { displayTotalViews, displayUniqueViews } from '~/views';

(async function main() {
  try {
    const totalViews = await getLogsSummary('totalViews');
    const uniqueViews = await getLogsSummary('uniqueViews');

    displayTotalViews(totalViews);
    displayUniqueViews(uniqueViews);
  } catch (e) {
    console.log(chalk.redBright('Error getting logs', e));
  }
})();
