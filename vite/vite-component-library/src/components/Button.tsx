import { useState } from 'react'
import styles from './Button.module.css'
// import habaneroButtonStyles from '@salsify/habanero/components/private/button-base.css';
// import habaneroColors from '@salsify/habanero/addon/colors.css';

interface ButtonArgs {
  type: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  className?: string;
}

export default function Button({ type, className }: ButtonArgs) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={className}>
        <button className={styles[type]} onClick={() => setCount((count) => count + 1)}>
          {type} count is {count}
        </button>
      </div>
    </>
  )
}
