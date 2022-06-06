export enum GroupsSagaActions {
  GET_GROUPS = 'GROUPS_GET_GROUPS'
}

export function getGroups() {
  return { type: GroupsSagaActions.GET_GROUPS };
}
