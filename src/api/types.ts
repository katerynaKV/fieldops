// ASSET

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

// TIMESERIES

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

// ALERT

export type Alert = {
  id: string;
  assetId: string;
  severity: AlertSeverity;
  status: AlertStatus;
  trigger: string;
  title: string;
  description: string;
  triggerValue?: number;
  triggerUnit?: string;
  firedAt: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
};

export type AlertSeverity = 'critical' | 'warning' | 'info';

export type AlertStatus = 'open' | 'acknowledged' | 'resolved';

// ACTIVITY

export type Activity = {
  id: string;
  kind: ActivityKind;
  assetId: string;
  summary: string;
  alertId?: string;
  occurredAt: string;
  createdAt: string;
};

export type ActivityKind =
  | 'reading_anomaly'
  | 'alert_fired'
  | 'alert_acknowledged'
  | 'alert_fired'
  | 'asset_offline'
  | 'alert_resolved'
  | 'threshold_updated'
  | 'asset_created';
