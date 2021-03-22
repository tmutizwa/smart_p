export interface Log {
  page: string;
  ip: string;
}

export interface PagesByTotalViews {
  page: string;
  views: number;
}

export interface PagesByUniqueViews {
  page: string;
  views: number;
}
