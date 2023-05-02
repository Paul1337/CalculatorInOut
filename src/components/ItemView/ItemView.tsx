import React, { CSSProperties } from 'react';
import { IItemViewProps } from '../../models/props/ItemView';
import styles from './ItemView.module.css';

const contStyle: CSSProperties = {
    display: 'flex',
    margin: '6px',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid black',
};

const nameStyle: CSSProperties = {};

const sumStyle: CSSProperties = {};

const dateStyle: CSSProperties = {};

const ItemView = (props: IItemViewProps) => {
    return (
        <div style={contStyle}>
            <div style={contStyle}>
                <span className={styles.itemParam} style={nameStyle}>
                    {props.category}
                </span>
                <span className={styles.itemParam} style={nameStyle}>
                    {props.name}
                </span>
                <span className={styles.itemParam} style={sumStyle}>
                    {props.sum}
                </span>
                <span className={styles.itemParam} style={dateStyle}>
                    {props.dateString}
                </span>
            </div>
            <span className={styles.close} onClick={props.onClose} style={{ marginRight: '10px' }}>
                &times;
            </span>
        </div>
    );
};

export default ItemView;
