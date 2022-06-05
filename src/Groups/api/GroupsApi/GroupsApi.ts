import { Group } from '~/Groups/types';

export abstract class GroupsApi {
  public abstract getGroups: () => Promise<Group[]>;
}
