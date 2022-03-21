import { FC, useEffect, useState } from 'react';
import ToastItem, { ToastAttributes } from './ToastItem';
import { v4 as uuidv4 } from 'uuid';
import classes from './toast.module.scss';
import Emitter, { ToastEventTypes } from '../../utils/emitter';

interface ToastConfig {
  maxToastLimit?: number;
}

const Toast: FC<ToastConfig> = ({ maxToastLimit }) => {
  const [toastlist, setToastList] = useState<ToastAttributes[]>([]);

  const create = (toast: ToastAttributes) => {
    setToastList(prev => [{ ...toast, id: uuidv4() }, ...prev]);
  };

  const removeAll = () => {
    setToastList([]);
  };

  const remove = (id: string) => {
    if (!id) removeAll();
    setToastList(prev => prev.filter(i => i.id !== id));
  };

  useEffect(() => {
    Emitter.on({ type: ToastEventTypes.ShowToast }, create);
    Emitter.on({ type: ToastEventTypes.HideToast }, remove);

    return () => {
      Emitter.off({ type: ToastEventTypes.ShowToast }, create);
      Emitter.off({ type: ToastEventTypes.HideToast }, remove);
    };
  }, []);

  return (
    <div className={classes.container}>
      {toastlist.slice(0, maxToastLimit).map(toast => (
        <ToastItem key={toast.id} {...toast} remove={remove} />
      ))}
    </div>
  );
};

export default Toast;
