import { groupLocksWatchers, groupsWatchers } from '~/Groups/redux';

export const sagasWatchers = [...groupsWatchers, ...groupLocksWatchers];
