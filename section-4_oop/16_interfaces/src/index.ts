// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract remoteEvent(): void;
// }

interface ICalendar {
  name: string; // property
  // methods
  addEvent(): void;
  remoteEvent(): void;
}

interface Cloudcalendar extends ICalendar {
  sync(): void;
}

class GoogleCalendar implements ICalendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  remoteEvent(): void {
    throw new Error('Method not implemented.');
  }
}
