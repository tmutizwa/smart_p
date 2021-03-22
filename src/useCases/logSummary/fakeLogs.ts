export const fakeLog = `

/help_page/1 126.318.035.038
/contact 184.123.665.067

/home 184.123.665.067
/about/2 444.701.448.104
/help_page/1 646.865.545.408
/home 235.313.352.950
/contact 184.123.665.067
/contact 184.123.665.067
/help_page/1 543.910.244.929
/help_page/1 543.910.244.929

`;

export const parsedFakeLog = {
  '/help_page/1': [
    '126.318.035.038',
    '646.865.545.408',
    '543.910.244.929',
    '543.910.244.929',
  ],
  '/contact': ['184.123.665.067', '184.123.665.067', '184.123.665.067'],
  '/home': ['184.123.665.067', '235.313.352.950'],
  '/about/2': ['444.701.448.104'],
};

export const fakeTotalViewsSummary = {
  '/help_page/1': 4,
  '/contact': 3,
  '/home': 2,
  '/about/2': 1,
};

export const fakeUniqueViewsSummary = {
  '/help_page/1': 3,
  '/contact': 1,
  '/home': 2,
  '/about/2': 1,
};
