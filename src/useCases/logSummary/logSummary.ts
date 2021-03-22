import { promises as fs } from 'fs';
import path from 'path';

import { ReportType, PageViewLogs, PageViewTotals } from '~/types';

export async function getLogsSummary(type?: ReportType) {
  try {
    const data = await fs.readFile(
      path.join(__dirname, 'webserver.log'),
      'utf8'
    );

    const rawLogs = getRawLogs(data);

    return type === 'totalViews'
      ? getPageTotalViewsSummary(rawLogs)
      : getUniqueViewsummary(rawLogs);
  } catch (e) {
    throw 'Error reading log file, ' + e;
  }
}

function getUniqueViewsummary(rawLogs: PageViewLogs) {
  const viewsSummary: PageViewTotals = {};

  for (const key in rawLogs) {
    viewsSummary[key] = new Set(rawLogs[key]).size;
  }

  return viewsSummary;
}

function getPageTotalViewsSummary(rawLogs: PageViewLogs) {
  const views: PageViewTotals = {};

  for (const key in rawLogs) {
    views[key] = rawLogs[key].length;
  }

  return views;
}

export function getRawLogs(data: string): PageViewLogs {
  const rawLog: PageViewLogs = {};
  data
    .split('\n')
    .filter((line: string) => line.trim() !== '')
    .forEach((line: string) => {
      const [page, ip] = line.split(' ');

      if (!rawLog[page]) {
        rawLog[page] = [ip];
      } else {
        rawLog[page].push(ip);
      }
    });

  return rawLog;
}
