import { Group } from '~/Groups/Groups.types';

export abstract class GroupsApi {
    public abstract getGroups: () => Promise<Group[]>;
}
