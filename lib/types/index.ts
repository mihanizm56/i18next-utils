export type BaseAction = () => { type: string };

export type Action<T> = (payload: T) => { type: string; payload: T };
