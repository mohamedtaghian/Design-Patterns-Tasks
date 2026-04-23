export type Observer<T> = (data: T) => void;

export class Observable<T> {
  private observers: Observer<T>[] = [];

  subscribe(observerFn: Observer<T>) {
    this.observers.push(observerFn);
    return () => {
      this.observers = this.observers.filter(
        (observer) => observer !== observerFn,
      );
    };
  }

  notify(data: T) {
    this.observers.forEach((observer) => observer(data));
  }
}
