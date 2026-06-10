export type Asset = {
  id: string;
  name: string;
  type: AssetType;
  status: AssetStatus;
  siteId: string;
  siteName: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  installedAt: string;
  lastServicedAt: string;
  thresholds: {
    pressure: Threshold;
    temperature: Threshold;
  };
  notes: string;
  lastReadingAt: string;
  createdAt: string;
  updatedAt: string;
};

export type AssetType =
  | 'compressor'
  | 'pump'
  | 'valve'
  | 'sensor'
  | 'motor'
  | 'heat_exchanger';

export type AssetStatus = 'online' | 'warning' | 'critical' | 'offline';

export type Threshold = {
  max: number;
  unit: string;
};

export type Timeseries = {
  id: string;
  assetId: string;
  kind: TimeseriesKind;
  label: string;
  unit: string;
  readings: Reading[];
  createdAt: string;
  updatedAt: string;
};

export type TimeseriesKind = 'pressure' | 'temperature';

export type Reading = {
  timestamp: string;
  value: string;
};
