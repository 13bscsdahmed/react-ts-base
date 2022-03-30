import { FC, useEffect, useState } from 'react';
import classes from './toast.module.scss';
import { ReactComponent as InfoIcon } from '@assets/images/info.svg';
import { ReactComponent as ErrorIcon } from '@assets/images/error.svg';
import { ReactComponent as WarnIcon } from '@assets/images/warn.svg';
import { ReactComponent as SuccessIcon } from '@assets/images/success.svg';

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
  autoClose: 5000,
  status: ToastStatuses.INFO,
};

let statusClass = 'bg-info';
let statusIcon = <InfoIcon />;
const StatusBody: FC<{ status: ToastStatuses | undefined }> = props => {
  switch (props.status) {
    case ToastStatuses.INFO:
      statusClass = 'bg-info';
      statusIcon = <InfoIcon />;
      break;
    case ToastStatuses.ERROR:
      statusClass = 'bg-error';
      statusIcon = <ErrorIcon />;
      break;
    case ToastStatuses.WARNING:
      statusClass = 'bg-warning';
      statusIcon = <WarnIcon />;
      break;
    case ToastStatuses.SUCCESS:
      statusClass = 'bg-success';
      statusIcon = <SuccessIcon />;
      break;

    default:
      statusClass = 'bg-info';
      statusIcon = <InfoIcon />;
      break;
  }

  return <div className={`${classes.status} ${statusClass}`}>{statusIcon}</div>;
};

const ToastItem: FC<ToastAttributes> = props => {
  props = {
    ...defaultConfig,
    ...props,
  };

  if (props.autoClose === true) {
    props.autoClose = defaultConfig.autoClose;
  }

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    if (props.autoClose && typeof props.autoClose === 'number') {
      setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          props.remove?.(props.id);
        }, 300);
      }, props.autoClose);
    }
  }, []);

  return (
    <div
      className={`${classes.item} ${show ? classes.show : ''}`}
      onClick={() => {
        props.remove?.(props.id);
      }}
      role='alert'
    >
      <StatusBody key={props.id} status={props.status} />
      <div className={classes.body}>
        <p className={classes.text}>{props.message}</p>
      </div>
    </div>
  );
};

export default ToastItem;
