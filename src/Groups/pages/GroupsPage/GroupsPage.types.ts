import { Group } from '~/Groups/types';

export interface GroupsPageProps {
  useGroups: () => Group[];
  useGroupSelected: (group?: Group) => (group?: Group | undefined) => void;
}
