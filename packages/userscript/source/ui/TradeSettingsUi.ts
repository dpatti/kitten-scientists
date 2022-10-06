import { TradeSettings, TradeSettingsItem } from "../options/TradeSettings";
import { objectEntries } from "../tools/Entries";
import { ucfirst } from "../tools/Format";
import { mustExist } from "../tools/Maybe";
import { Race, Season } from "../types";
import { UserScript } from "../UserScript";
import { SettingLimitedUi } from "./SettingLimitedUi";
import { SettingsSectionUi } from "./SettingsSectionUi";
import { SettingTriggerUi } from "./SettingTriggerUi";
import { SettingUi } from "./SettingUi";

export class TradeSettingsUi extends SettingsSectionUi {
  readonly element: JQuery<HTMLElement>;

  private readonly _settings: TradeSettings;

  constructor(host: UserScript, settings: TradeSettings) {
    super(host);

    this._settings = settings;

    const toggleName = "trade";
    const label = ucfirst(this._host.engine.i18n("ui.trade"));

    // Create build items.
    // We create these in a list that is displayed when the user clicks the "items" button.
    const list = this._getItemsList(toggleName);

    // Our main element is a list item.
    const element = this._getSettingsPanel(toggleName, label, this._settings, list);
    this._settings.$enabled = element.checkbox;

    // Create "trigger" button in the item.
    this._settings.$trigger = this._registerTriggerButton(toggleName, label, this._settings);

    const optionButtons = [
      this._getTradeOption(
        "lizards",
        this._settings.items.lizards,
        this._host.engine.i18n("$trade.race.lizards")
      ),
      this._getTradeOption(
        "sharks",
        this._settings.items.sharks,
        this._host.engine.i18n("$trade.race.sharks")
      ),
      this._getTradeOption(
        "griffins",
        this._settings.items.griffins,
        this._host.engine.i18n("$trade.race.griffins")
      ),
      this._getTradeOption(
        "nagas",
        this._settings.items.nagas,
        this._host.engine.i18n("$trade.race.nagas")
      ),
      this._getTradeOption(
        "zebras",
        this._settings.items.zebras,
        this._host.engine.i18n("$trade.race.zebras")
      ),
      this._getTradeOption(
        "spiders",
        this._settings.items.spiders,
        this._host.engine.i18n("$trade.race.spiders")
      ),
      this._getTradeOption(
        "dragons",
        this._settings.items.dragons,
        this._host.engine.i18n("$trade.race.dragons")
      ),
      this._getTradeOption(
        "leviathans",
        this._settings.items.leviathans,
        this._host.engine.i18n("$trade.race.leviathans"),
        true
      ),
    ];

    list.append(...optionButtons);

    const additionOptions = this._getAdditionOptions();
    list.append(additionOptions);

    element.panel.append(this._settings.$trigger);
    element.panel.append(list);

    this.element = element.panel;
  }

  private _getTradeOption(
    name: Race,
    option: TradeSettingsItem,
    i18nName: string,
    delimiter = false,
    upgradeIndicator = false
  ): JQuery<HTMLElement> {
    const element = SettingLimitedUi.make(
      this._host,
      name,
      option,
      i18nName,
      {
        onCheck: () => this._host.engine.imessage("status.sub.enable", [i18nName]),
        onUnCheck: () => this._host.engine.imessage("status.sub.disable", [i18nName]),
        onLimitedCheck: () => {
          this._host.updateOptions(() => (option.limited = true));
          this._host.engine.imessage("trade.limited", [i18nName]);
        },
        onLimitedUnCheck: () => {
          this._host.updateOptions(() => (option.limited = false));
          this._host.engine.imessage("trade.unlimited", [i18nName]);
        },
      },
      delimiter,
      upgradeIndicator
    );
    element.css("borderTop", "1px solid rgba(185, 185, 185, 0.1)");

    const button = $('<div class="ks-icon-button"/>', {
      id: `toggle-seasons-${name}`,
      title: this._host.engine.i18n("trade.seasons"),
    }).text("🗓");

    const list = SettingsSectionUi.getList(`seasons-list-${name}`);

    // fill out the list with seasons
    list.append(this._getSeason(name, "spring", option));
    list.append(this._getSeason(name, "summer", option));
    list.append(this._getSeason(name, "autumn", option));
    list.append(this._getSeason(name, "winter", option));

    button.on("click", function () {
      list.toggle();
    });

    element.append(button, list);

    return element;
  }

  private _getSeason(name: Race, season: Season, option: TradeSettingsItem): JQuery<HTMLElement> {
    const iname = ucfirst(this._host.engine.i18n(`$trade.race.${name}` as const));
    const iseason = ucfirst(this._host.engine.i18n(`$calendar.season.${season}` as const));

    const element = $("<li/>");

    const label = $("<label/>", {
      for: `toggle-${name}-${season}`,
      text: ucfirst(iseason),
    });

    const input = $("<input/>", {
      id: `toggle-${name}-${season}`,
      type: "checkbox",
    }).data("option", option);
    option[`$${season}` as const] = input;

    input.on("change", () => {
      if (input.is(":checked") && option[season] === false) {
        this._host.updateOptions(() => (option[season] = true));
        this._host.engine.imessage("trade.season.enable", [iname, iseason]);
      } else if (!input.is(":checked") && option[season] === true) {
        this._host.updateOptions(() => (option[season] = false));
        this._host.engine.imessage("trade.season.disable", [iname, iseason]);
      }
    });

    element.append(input, label);

    return element;
  }

  private _getAdditionOptions(): Array<JQuery<HTMLElement>> {
    const nodeHeader = this._getHeader("Additional options");

    const nodeEmbassies = SettingTriggerUi.make(
      this._host,
      "embassies",
      this._settings.buildEmbassies,
      this._host.engine.i18n("option.embassies"),
      {
        onCheck: () =>
          this._host.engine.imessage("status.sub.enable", [
            this._host.engine.i18n("option.embassies"),
          ]),
        onUnCheck: () =>
          this._host.engine.imessage("status.sub.disable", [
            this._host.engine.i18n("option.embassies"),
          ]),
      }
    );

    const nodeRaces = SettingUi.make(
      this._host,
      "races",
      this._settings.unlockRaces,
      this._host.engine.i18n("ui.upgrade.races"),
      {
        onCheck: () =>
          this._host.engine.imessage("status.auto.enable", [
            this._host.engine.i18n("ui.upgrade.races"),
          ]),
        onUnCheck: () =>
          this._host.engine.imessage("status.auto.disable", [
            this._host.engine.i18n("ui.upgrade.races"),
          ]),
      }
    );

    return [nodeHeader, nodeRaces, nodeEmbassies];
  }

  setState(state: TradeSettings): void {
    this._settings.enabled = state.enabled;
    this._settings.trigger = state.trigger;

    this._settings.buildEmbassies.enabled = state.buildEmbassies.enabled;
    this._settings.unlockRaces.enabled = state.unlockRaces.enabled;

    for (const [name, option] of objectEntries(this._settings.items)) {
      option.enabled = state.items[name].enabled;
      option.limited = state.items[name].limited;

      option.autumn = state.items[name].autumn;
      option.spring = state.items[name].spring;
      option.summer = state.items[name].summer;
      option.winter = state.items[name].winter;
    }
  }

  refreshUi(): void {
    this.setState(this._settings);

    mustExist(this._settings.$enabled).prop("checked", this._settings.enabled);
    mustExist(this._settings.$trigger)[0].title = SettingsSectionUi.renderPercentage(
      this._settings.trigger
    );

    mustExist(this._settings.buildEmbassies.$enabled).prop(
      "checked",
      this._settings.buildEmbassies.enabled
    );
    mustExist(this._settings.unlockRaces.$enabled).prop(
      "checked",
      this._settings.unlockRaces.enabled
    );

    for (const [name, option] of objectEntries(this._settings.items)) {
      mustExist(option.$enabled).prop("checked", this._settings.items[name].enabled);
      mustExist(option.$limited).prop("checked", this._settings.items[name].limited);

      mustExist(option.$autumn).prop("checked", this._settings.items[name].autumn);
      mustExist(option.$spring).prop("checked", this._settings.items[name].spring);
      mustExist(option.$summer).prop("checked", this._settings.items[name].summer);
      mustExist(option.$winter).prop("checked", this._settings.items[name].winter);
    }
  }
}
