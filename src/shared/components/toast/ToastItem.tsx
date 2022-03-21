import { FC, useEffect } from 'react';
import classes from './toast.module.scss';

export enum ToastStatuses {
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
}

export interface DefaultProps {
  status?: ToastStatuses;
  remove?: (id: string) => void | any;
  autoClose?: boolean | number;
}

export interface ToastAttributes extends DefaultProps {
  id: string;
  message: string;
}

const defaultConfig: DefaultProps = {
  autoClose: 3000,
  status: ToastStatuses.INFO,
};

function statusClass(status: ToastStatuses | undefined) {
  switch (status) {
    case ToastStatuses.INFO:
      return 'bg-info';
    case ToastStatuses.ERROR:
      return 'bg-error';
    case ToastStatuses.WARNING:
      return 'bg-warning';
    case ToastStatuses.SUCCESS:
      return 'bg-success';

    default:
      return '';
  }
}

const ToastItem: FC<ToastAttributes> = props => {
  props = {
    ...defaultConfig,
    ...props,
  };

  if (props.autoClose === true) {
    props.autoClose = defaultConfig.autoClose;
  }

  useEffect(() => {
    if (props.autoClose && typeof props.autoClose === 'number')
      setTimeout(() => {
        props.remove?.(props.id);
      }, props.autoClose);
  }, []);

  return (
    <div
      className={classes.item}
      onClick={() => {
        props.remove?.(props.id);
      }}
      role='alert'
    >
      <div className={`${classes.status} ${statusClass(props.status)}`}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z' />
        </svg>
      </div>
      <div className={classes.body}>
        <p className={classes.text}>{props.message}</p>
      </div>
    </div>
  );
};

export default ToastItem;
