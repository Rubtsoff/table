export interface IUserResponse {
  id: number;
  age: number;
  name: string;
  about: string;
}

export interface IUser {
  id: number;
  age: number;
  name: string;
  about: string;
}

export const userMapper = (resp: IUserResponse): IUser => ({
  id: resp.id,
  age: resp.age,
  name: resp.name,
  about: resp.about,
});
