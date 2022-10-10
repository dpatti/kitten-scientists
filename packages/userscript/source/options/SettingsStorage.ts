import {
  Job,
  Missions,
  Policy,
  Race,
  Resource,
  Season,
  SpaceBuildings,
  StagedBuilding,
  Technology,
  Upgrade,
} from "../types";
import { BonfireItem } from "./BonfireSettings";
import { FilterItem } from "./FilterSettings";
import { OptionsItem } from "./OptionsSettings";
import { FaithItem, ReligionAdditionItem, UnicornItem } from "./ReligionSettings";
import { ScienceItem } from "./ScienceSettings";
import { AllItems } from "./Settings";
import { TimeControlItem } from "./TimeControlSettings";
import { TimeItem } from "./TimeSettings";

type LegacySettingsSections =
  | "build"
  | "craft"
  | "distribute"
  | "faith"
  | "filter"
  | "options"
  | "space"
  | "time"
  | "timeCtrl"
  | "trade"
  | "upgrade";

type SetMaxBuildingItem = `set-${AllItems}-max`;
type SetMaxEmbassyItem = `set-build-${Race}-max`;
type SetMaxJobItem = `set-${Job}-max`;
type SetMaxResourceItem = `set-${Resource}-max`;
type SetMinResetBuildingItem = `set-reset-build-${Exclude<BonfireItem, "unicornPasture">}-min`;
type SetMinResetFaithItem = `set-reset-faith-${FaithItem | UnicornItem}-min`;
type SetMinResetSpaceItem = `set-reset-space-${SpaceBuildings}-min`;
type SetMinResetTimeItem = `set-reset-time-${TimeItem}-min`;
type SetMinResetUnicornItem = `set-reset-unicorn-${UnicornItem}-min`;
type SetSubtriggerOptionItem = `set-${OptionsItem}-trigger`;
type SetSubtriggerReligionItem = `set-${ReligionAdditionItem}-trigger`;
type SetSubtriggerTimeCtrlItem = `set-${"accelerateTime" | "timeSkip"}-trigger`;
type ToggleBuildEmbassies = "toggle-buildEmbassies";
type ToggleBuildEmbassiesItem = `toggle-build-${Race}`;
type ToggleBuildingItem = `toggle-${AllItems}`;
type ToggleFaithUnicornItem = `toggle-${FaithItem | UnicornItem}`;
type ToggleFilterItem = `toggle-${FilterItem}`;
type ToggleHoldFestivals = "toggle-festival";
type ToggleHunt = "toggle-hunt";
type ToggleJobItem = `toggle-${Job}`;
type ToggleLimitedJobItem = `toggle-limited-${Job}`;
type ToggleLimitedRaceItem = `toggle-limited-${Race}`;
type ToggleLimitedResourceItem = `toggle-limited-${Resource}`;
type ToggleMissionItem = `toggle-mission-${Missions}`;
type ToggleOptionsItem = `toggle-${OptionsItem}`;
type TogglePolicyItem = `toggle-policy-${Policy}`;
type TogglePromoteLeader = `toggle-promote`;
type ToggleRaceItem = `toggle-${Race}`;
type ToggleRaceSeasonItem = `toggle-${Race}-${Season}`;
type ToggleReligionAdditionItem = `toggle-${ReligionAdditionItem}`;
type ToggleResetBuildingItem = `toggle-reset-build-${Exclude<BonfireItem, "unicornPasture">}`;
type ToggleResetFaithItem = `toggle-reset-faith-${FaithItem | UnicornItem}`;
type ToggleResetSpaceItem = `toggle-reset-space-${SpaceBuildings}`;
type ToggleResetTimeItem = `toggle-reset-time-${TimeItem}`;
type ToggleResetUnicornItem = `toggle-reset-unicorn-${UnicornItem}`;
type ToggleResourceItem = `toggle-${Resource}`;
type ToggleShipOverride = `toggle-shipOverride`;
type ToggleTechItem = `toggle-tech-${Technology}`;
type ToggleTimeControlCycleItem = `toggle-timeSkip-${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;
type ToggleTimeControlItem = `toggle-${TimeControlItem}`;
type ToggleTimeControlSeasonItem = `toggle-timeSkip-${Season}`;
type ToggleTimeItem = `toggle-${TimeItem}`;
type ToggleTurnOnSteamworks = "toggle-_steamworks";
type ToggleUnlockItem = `toggle-${ScienceItem}`;
type ToggleUnlockRaces = "toggle-races";
type ToggleUnlockMissions = "toggle-missions";
type ToggleUnlockUpgrades = "toggle-upgrades";
type ToggleUpgradeBuildings = "toggle-buildings";
type ToggleUpgradeBuildingItem = `toggle-upgrade-${StagedBuilding}`;
type ToggleUpgradeItem = `toggle-upgrade-${Upgrade}`;

export type KittenStorageType = {
  version: number;
  toggles: Record<LegacySettingsSections | "engine", boolean>;
  items: Partial<Record<SetMaxBuildingItem, number>> &
    Partial<Record<SetMaxEmbassyItem, number>> &
    Partial<Record<SetMaxJobItem, number>> &
    Partial<Record<SetMaxResourceItem, number>> &
    Partial<Record<SetMinResetBuildingItem, number>> &
    Partial<Record<SetMinResetFaithItem, number>> &
    Partial<Record<SetMinResetSpaceItem, number>> &
    Partial<Record<SetMinResetTimeItem, number>> &
    Partial<Record<SetMinResetUnicornItem, number>> &
    Partial<Record<SetSubtriggerOptionItem, number>> &
    Partial<Record<SetSubtriggerReligionItem, number>> &
    Partial<Record<SetSubtriggerTimeCtrlItem, number>> &
    Partial<Record<ToggleBuildEmbassies, boolean>> &
    Partial<Record<ToggleBuildEmbassiesItem, boolean>> &
    Partial<Record<ToggleBuildingItem, boolean>> &
    Partial<Record<ToggleFaithUnicornItem, boolean>> &
    Partial<Record<ToggleFilterItem, boolean>> &
    Partial<Record<ToggleHoldFestivals, boolean>> &
    Partial<Record<ToggleHunt, boolean>> &
    Partial<Record<ToggleJobItem, boolean>> &
    Partial<Record<ToggleLimitedJobItem, boolean>> &
    Partial<Record<ToggleLimitedRaceItem, boolean>> &
    Partial<Record<ToggleLimitedResourceItem, boolean>> &
    Partial<Record<ToggleMissionItem, boolean>> &
    Partial<Record<ToggleOptionsItem, boolean>> &
    Partial<Record<TogglePolicyItem, boolean>> &
    Partial<Record<TogglePromoteLeader, boolean>> &
    Partial<Record<ToggleRaceItem, boolean>> &
    Partial<Record<ToggleRaceSeasonItem, boolean>> &
    Partial<Record<ToggleReligionAdditionItem, boolean>> &
    Partial<Record<ToggleResetBuildingItem, boolean>> &
    Partial<Record<ToggleResetFaithItem, boolean>> &
    Partial<Record<ToggleResetSpaceItem, boolean>> &
    Partial<Record<ToggleResetTimeItem, boolean>> &
    Partial<Record<ToggleResetUnicornItem, boolean>> &
    Partial<Record<ToggleResourceItem, boolean>> &
    Partial<Record<ToggleShipOverride, boolean>> &
    Partial<Record<ToggleTechItem, boolean>> &
    Partial<Record<ToggleTimeControlCycleItem, boolean>> &
    Partial<Record<ToggleTimeControlItem, boolean>> &
    Partial<Record<ToggleTimeControlSeasonItem, boolean>> &
    Partial<Record<ToggleTimeItem, boolean>> &
    Partial<Record<ToggleTurnOnSteamworks, boolean>> &
    Partial<Record<ToggleUnlockItem, boolean>> &
    Partial<Record<ToggleUnlockMissions, boolean>> &
    Partial<Record<ToggleUnlockRaces, boolean>> &
    Partial<Record<ToggleUnlockUpgrades, boolean>> &
    Partial<Record<ToggleUpgradeBuildings, boolean>> &
    Partial<Record<ToggleUpgradeBuildingItem, boolean>> &
    Partial<Record<ToggleUpgradeItem, boolean>>;
  resources: Partial<
    Record<
      Resource,
      {
        /**
         * This indicates if the resource option relates to the timeControl.reset automation.
         * If it's `false`, it's a resource option in the craft settings.
         */
        checkForReset: boolean;
        consume?: number;
        enabled: boolean;
        stock: number;
        stockForReset: number;
      }
    >
  >;
  triggers: {
    build: number;
    craft: number;
    faith: number;
    space: number;
    time: number;
    trade: number;
  };
  reset: {
    reset: boolean;
    times: number;
    paragonLastTime: number;
    pargonTotal: number;
    karmaLastTime: number;
    karmaTotal: number;
  };
};

export class SettingsStorage {
  static getLegacySettings(): KittenStorageType | null {
    const saved = JSON.parse(
      (localStorage["cbc.kitten-scientists"] as string | undefined) ?? "null"
    ) as KittenStorageType | null;
    return saved === null ? null : saved;
  }
  static setLegacySettings(settings: KittenStorageType): void {
    localStorage["cbc.kitten-scientists"] = JSON.stringify(settings);
  }
}
