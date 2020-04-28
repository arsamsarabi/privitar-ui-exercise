import { observable, action } from "mobx";

export interface ISettings {
  dobDateFormat: string;
}

export interface ISettingsStore extends ISettings {
  setDobDateFormat(newFormat: string): void;
}

class Settings implements ISettingsStore {
  @observable dobDateFormat: string;

  constructor(args: ISettings) {
    this.dobDateFormat = args.dobDateFormat;
  }

  @action
  setDobDateFormat = (newFormat: string): void => {
    this.dobDateFormat = newFormat;
  };
}

export default Settings;
