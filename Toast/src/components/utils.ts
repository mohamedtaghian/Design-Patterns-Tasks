import { Observable } from "../utils/observable";
import { ToastProps } from "./Toast";

type ToastEvent = Pick<ToastProps, "id" | "variant" | "message">;
type DismissAllEvent = { dismissAll: true };

export type ToastObservableEvent = ToastEvent | DismissAllEvent;

export const observable = new Observable<ToastObservableEvent>();

export function toast(message: string) {
  observable.notify({ id: Date.now(), message });
}

toast.success = (message: string) => {
  observable.notify({ id: Date.now(), message, variant: "success" });
};

toast.error = (message: string) => {
  observable.notify({ id: Date.now(), message, variant: "error" });
};

toast.dismissAll = () => {
  observable.notify({ dismissAll: true });
};
