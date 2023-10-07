import { CanActivateChildFn } from '@angular/router';

export const user1Guard: CanActivateChildFn = (childRoute, state) => {
  return false;
};
