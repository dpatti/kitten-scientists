import { SettingTrigger } from "../../options/Settings";
import { UserScript } from "../../UserScript";
import { SettingListItem } from "./SettingListItem";
import { TriggerButton } from "./TriggerButton";

export class SettingTriggerListItem extends SettingListItem {
  readonly triggerButton: TriggerButton;

  constructor(
    host: UserScript,
    label: string,
    setting: SettingTrigger,
    handler: {
      onCheck: () => void;
      onUnCheck: () => void;
    },
    delimiter = false,
    upgradeIndicator = false,
    additionalClasses = []
  ) {
    super(host, label, setting, handler, delimiter, upgradeIndicator, additionalClasses);

    this.triggerButton = new TriggerButton(host, label, setting);
    this.element.append(this.triggerButton.element);
  }

  refreshUi() {
    super.refreshUi();
    this.triggerButton.refreshUi();
  }
}