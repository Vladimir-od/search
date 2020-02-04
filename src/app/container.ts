export class Container {
  id: string;
  owner: string;
  history: History[];
}
export class History {
  dateFrom: number;
  dateTo: number;
  sourcePort: string;
  destinationPort: string;
  sender: string;
  recipient: string;
}
