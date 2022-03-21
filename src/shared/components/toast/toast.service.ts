import Emitter, { ToastEventTypes } from '../../utils/emitter';
import { DefaultProps } from './ToastItem';

const ToastService = {
  show: (message: string, config?: DefaultProps) => {
    Emitter.emit({ type: ToastEventTypes.ShowToast }, { ...config, message });
  },
  hide: (id: string) => {
    Emitter.emit({ type: ToastEventTypes.HideToast }, id);
  },
};

export default ToastService;
