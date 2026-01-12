import { useState } from 'react'
import styles from './Button.module.css'
// The following imports fail due to module resolution issues (no default export)
// import habaneroButtonStyles from '@salsify/habanero/addon/components/private/button-base.css';
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
