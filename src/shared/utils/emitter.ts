import Eventemitter3 from 'eventemitter3';

const emitter = new Eventemitter3();

export enum ToastEventTypes {
  ShowToast = 'SHOW_TOAST',
  HideToast = 'HIDE_TOAST',
}

interface EventTypes {
  type: ToastEventTypes;
}

const Emitter = {
  on: (event: EventTypes, fn: (...args: any[]) => void) => emitter.on(event.type, fn),
  once: (event: EventTypes, fn: (...args: any[]) => void) => emitter.once(event.type, fn),
  off: (event: EventTypes, fn: (...args: any[]) => void) => emitter.off(event.type, fn),
  emit: (event: EventTypes, payload: any) => emitter.emit(event.type, payload),
};

Object.freeze(Emitter);

export default Emitter;
