import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface ProductButtonsProps {
    className?: String
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    // const isMaxReached = useCallback(
    //     () => {
    //         return counter === maxCount
    //     },
    //     [counter, maxCount],
    // )

    const isMaxReached = counter === maxCount

    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}>
            <button
                className={styles.buttonMenus}
                onClick={() => increaseBy(-1)}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button
                className={`${styles.buttonAdd} ${isMaxReached ? styles.disabled : ""}`}
                onClick={() => increaseBy(+1)}> + </button>
        </div>
    );
}