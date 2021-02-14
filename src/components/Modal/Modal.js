import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClientOnlyPortal from '../ClientOnlyPortal/ClientOnlyPortal';
import styles from './Modal.module.css';

export const Modal = ({
  children, onClose, open, title, tick,
}) => (open
  ? (
    <ClientOnlyPortal selector="#modal-root">
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={onClose}>x</span>
        <h1>
          {tick
            ? (
              <center>
                <CheckCircleIcon
                  color="secondary"
                  style={{
                    borderRadius: 50, background: '#FFF', color: '#F65261', fontSize: 70,
                  }}
                />
                <br />
                {title}
              </center>
            )
            : title}
        </h1>
        {children}
      </div>
    </ClientOnlyPortal>
  )
  : null);
