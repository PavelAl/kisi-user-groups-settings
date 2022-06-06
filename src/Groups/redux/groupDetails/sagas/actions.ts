export enum GroupLocksSagaAction {
  GET_GROUP_LOCKS = 'GROUP_DETAILS_GET_GROUP_LOCKS',
  ASSIGN_LOCK = 'GROUP_DETAILS_ASSIGN_LOCK',
  UNASSIGN_LOCK = 'GROUP_DETAILS_UNASSIGN_LOCK'
}

export function getGroupLocks(groupId: number) {
  return { type: GroupLocksSagaAction.GET_GROUP_LOCKS, groupId };
}

export function assignLock(groupId: number, doorLockId: number) {
  return { type: GroupLocksSagaAction.ASSIGN_LOCK, groupId, doorLockId };
}

export function unassignLock(doorLockId: number) {
  return { type: GroupLocksSagaAction.UNASSIGN_LOCK, doorLockId };
}
