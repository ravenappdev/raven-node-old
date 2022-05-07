import { convertToType } from "../utils";

export class SendEventBulk {
  constructor(event, batch) {
    this.event = event;
    this.batch = batch;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SendEventBulk();
      if (data.hasOwnProperty("event"))
        obj.event = convertToType(data["event"], "String");
      if (data.hasOwnProperty("batch"))
        obj.batch = convertToType(data["batch"], [Object]);
    }
    return obj;
  }

  getEvent() {
    return this.event;
  }

  setEvent(event) {
    this.event = event;
  }

  getBatch() {
    return this.batch;
  }

  setBatch(batch) {
    this.batch = batch;
  }
}

SendEventBulk.prototype.event = undefined;

SendEventBulk.prototype.batch = undefined;
