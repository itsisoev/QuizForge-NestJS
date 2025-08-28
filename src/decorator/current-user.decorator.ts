import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUser } from '../users/user.model';
import { Request as ExpressRequest } from 'express';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IUser => {
    const request = ctx
      .switchToHttp()
      .getRequest<ExpressRequest & { user: IUser }>();
    return request.user;
  },
);
