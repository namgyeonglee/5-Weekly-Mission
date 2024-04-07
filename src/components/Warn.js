import classNames from 'classnames';
import styles from './Warn.module.css';

function Warn({ className, variant = '', title = '', description = '' }) {
  return (
    <div className={classNames(styles.warn, styles[variant], className)}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Warn;
