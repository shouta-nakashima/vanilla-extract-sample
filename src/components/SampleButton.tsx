import type {VFC} from 'react';
import * as styles from '../styles/sampleButton.css'

type Props = {
  title:string
  kind: keyof typeof styles.variant
}

const SampleButton:VFC<Props> = (props) => {
  return (
    <button className={styles.variant[props.kind]}>{props.title}</button>
  );
};

export default SampleButton;
