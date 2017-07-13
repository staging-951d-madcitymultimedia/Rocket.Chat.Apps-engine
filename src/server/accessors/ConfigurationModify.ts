import {
    IConfigurationModify,
    IServerSettingsModify,
    ISlashCommandsModify,
} from 'temporary-rocketlets-ts-definition/accessors';

export class ConfigurationModify implements IConfigurationModify {
    public readonly serverSettings: IServerSettingsModify;
    public readonly slashCommands: ISlashCommandsModify;

    constructor(sets: IServerSettingsModify, cmds: ISlashCommandsModify) {
        this.serverSettings = sets;
        this.slashCommands = cmds;
    }
}
