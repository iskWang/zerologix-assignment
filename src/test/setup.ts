import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// 在每個測試後運行清理
afterEach(() => {
  cleanup();
});
