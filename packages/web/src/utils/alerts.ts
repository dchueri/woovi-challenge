export enum Severity {
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
}

export interface Alert {
  display: boolean;
  severity: Severity;
  content: string;
}

export function alertDispatch(alert: Alert, setState: any) {
  setState(alert);
  setTimeout(() => {
    setState({ ...alert, display: false });
  }, 5000);
}
