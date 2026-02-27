export interface IUser {
  id: string;
  name: string;

  sayHello(message: string): string;
}
