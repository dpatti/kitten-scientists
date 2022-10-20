import { SettingWithCycles } from "../ui/components/CyclesList";
import { Setting, SettingTrigger } from "./Settings";
import { LegacyStorage } from "./SettingsStorage";

export class TimeSkipSettings extends SettingTrigger implements SettingWithCycles {
  max = 50;

  spring: Setting;
  summer: Setting;
  autumn: Setting;
  winter: Setting;

  charon: Setting;
  umbra: Setting;
  yarn: Setting;
  helios: Setting;
  cath: Setting;
  redmoon: Setting;
  dune: Setting;
  piscine: Setting;
  terminus: Setting;
  kairo: Setting;

  get cycles() {
    return [
      this.charon,
      this.umbra,
      this.yarn,
      this.helios,
      this.cath,
      this.redmoon,
      this.dune,
      this.piscine,
      this.terminus,
      this.kairo,
    ];
  }

  constructor(
    cycles = {
      charon: new Setting(false),
      umbra: new Setting(false),
      yarn: new Setting(false),
      helios: new Setting(false),
      cath: new Setting(false),
      redmoon: new Setting(false),
      dune: new Setting(false),
      piscine: new Setting(false),
      terminus: new Setting(false),
      kairo: new Setting(false),
    },
    seasons = {
      spring: new Setting(true),
      summer: new Setting(false),
      autumn: new Setting(false),
      winter: new Setting(false),
    }
  ) {
    super(false, 5);

    this.charon = cycles.charon;
    this.umbra = cycles.umbra;
    this.yarn = cycles.yarn;
    this.helios = cycles.helios;
    this.cath = cycles.cath;
    this.redmoon = cycles.redmoon;
    this.dune = cycles.dune;
    this.piscine = cycles.piscine;
    this.terminus = cycles.terminus;
    this.kairo = cycles.kairo;

    this.spring = seasons.spring;
    this.summer = seasons.summer;
    this.autumn = seasons.autumn;
    this.winter = seasons.winter;
  }

  load(settings: TimeSkipSettings) {
    super.load(settings);
    this.max = settings.max;

    this.autumn.load(settings.autumn);
    this.spring.load(settings.spring);
    this.summer.load(settings.summer);
    this.winter.load(settings.winter);

    this.charon.load(settings.charon);
    this.umbra.load(settings.umbra);
    this.yarn.load(settings.yarn);
    this.helios.load(settings.helios);
    this.cath.load(settings.cath);
    this.redmoon.load(settings.redmoon);
    this.dune.load(settings.dune);
    this.piscine.load(settings.piscine);
    this.terminus.load(settings.terminus);
    this.kairo.load(settings.kairo);
  }

  static toLegacyOptions(settings: TimeSkipSettings, subject: LegacyStorage) {
    subject.items["toggle-timeSkip"] = settings.enabled;
    subject.items["set-timeSkip-trigger"] = settings.trigger;
    subject.items["set-timeSkip-max"] = settings.max;

    subject.items["toggle-timeSkip-autumn"] = settings.autumn.enabled;
    subject.items["toggle-timeSkip-spring"] = settings.spring.enabled;
    subject.items["toggle-timeSkip-summer"] = settings.summer.enabled;
    subject.items["toggle-timeSkip-winter"] = settings.winter.enabled;

    subject.items[`toggle-timeSkip-0`] = settings.charon.enabled;
    subject.items[`toggle-timeSkip-1`] = settings.umbra.enabled;
    subject.items[`toggle-timeSkip-2`] = settings.yarn.enabled;
    subject.items[`toggle-timeSkip-3`] = settings.helios.enabled;
    subject.items[`toggle-timeSkip-4`] = settings.cath.enabled;
    subject.items[`toggle-timeSkip-5`] = settings.redmoon.enabled;
    subject.items[`toggle-timeSkip-6`] = settings.dune.enabled;
    subject.items[`toggle-timeSkip-7`] = settings.piscine.enabled;
    subject.items[`toggle-timeSkip-8`] = settings.terminus.enabled;
    subject.items[`toggle-timeSkip-9`] = settings.kairo.enabled;
  }

  static fromLegacyOptions(subject: LegacyStorage) {
    const settings = new TimeSkipSettings();
    settings.enabled = subject.items["toggle-timeSkip"] ?? settings.enabled;

    settings.trigger = subject.items["set-timeSkip-trigger"] ?? settings.trigger;
    settings.max = subject.items["set-timeSkip-max"] ?? settings.max;

    settings.autumn.enabled = subject.items["toggle-timeSkip-autumn"] ?? settings.autumn.enabled;
    settings.spring.enabled = subject.items["toggle-timeSkip-spring"] ?? settings.spring.enabled;
    settings.summer.enabled = subject.items["toggle-timeSkip-summer"] ?? settings.summer.enabled;
    settings.winter.enabled = subject.items["toggle-timeSkip-winter"] ?? settings.winter.enabled;

    settings.charon.enabled = subject.items[`toggle-timeSkip-0`] ?? settings.charon.enabled;
    settings.umbra.enabled = subject.items[`toggle-timeSkip-1`] ?? settings.umbra.enabled;
    settings.yarn.enabled = subject.items[`toggle-timeSkip-2`] ?? settings.yarn.enabled;
    settings.helios.enabled = subject.items[`toggle-timeSkip-3`] ?? settings.helios.enabled;
    settings.cath.enabled = subject.items[`toggle-timeSkip-4`] ?? settings.cath.enabled;
    settings.redmoon.enabled = subject.items[`toggle-timeSkip-5`] ?? settings.redmoon.enabled;
    settings.dune.enabled = subject.items[`toggle-timeSkip-6`] ?? settings.dune.enabled;
    settings.piscine.enabled = subject.items[`toggle-timeSkip-7`] ?? settings.piscine.enabled;
    settings.terminus.enabled = subject.items[`toggle-timeSkip-8`] ?? settings.terminus.enabled;
    settings.kairo.enabled = subject.items[`toggle-timeSkip-9`] ?? settings.kairo.enabled;

    return settings;
  }
}