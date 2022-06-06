import { Option } from '~/Lib/types';

export function createTestOption(index?: number): Option {
  return {
    key: `test-option-${index ?? ''}`,
    label: `Test Option ${index ?? ''}`,
    description: `This is test option ${index ?? ''}`
  };
}
