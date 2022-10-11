/* eslint-disable */

// @ts-nocheck
import { Context, Request } from 'koa';
import { IUser } from '../../modules/user/UserModel';

export default class MockContext {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  public context: Context = {}

  public user?: IUser | null;

  public req?: Request;

  public koaContext: Context

  public setCookie(cookieName: string, token: string) {
    this.context.cookies = token;

    return this;
  }
}