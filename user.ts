import { v4 as uuid } from "uuid";
import { IUser } from "./user.interface";

export class User implements IUser {
  private m_id: string;
  private m_name: string;

  constructor(id: string, name: string) {
    this.m_id = !!id ? id : uuid();
    this.m_name = name;
  }

  sayHello(message: string): string {
    return `${this.m_name} says: ${message}`;
  }

  get id(): string {
    return this.m_id;
  }

  get name(): string {
    return this.m_name;
  }
}
