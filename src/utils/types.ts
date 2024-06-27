export type Id<T = string> = { id: T };

export type Param<K extends string, T = string> = {
  params: Record<K, T>;
};

export type Params<K extends string, T = string> = {
  params: Record<K, T[]>;
};

export type Ok<D> = { val: D; fail: false };
export type Err<E> = { val: E; fail: true };

export type Result<D, E = null> = Ok<D> | Err<E>;

export function Ok<D>(val: D): Ok<D> {
  return { val, fail: false };
}

export function Err<E>(val: E): Err<E> {
  return { val, fail: true };
}

export function next<S>(current: S): S {
  return current;
}

export type IsArray<T> = T extends (infer U)[] ? true : false;
