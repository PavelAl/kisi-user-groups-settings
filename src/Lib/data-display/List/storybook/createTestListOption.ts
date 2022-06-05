import { ListOption } from '../List.types';

export function createTestListOption(index?: number): ListOption {
  return {
    key: `test-option-${index ?? ''}`,
    label: `Test Option ${index ?? ''}`,
    description: `This is test option ${index ?? ''}`
  };
}
