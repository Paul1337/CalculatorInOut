import React, { CSSProperties } from 'react';
import { IItemViewProps } from '../../models/props/ItemView';

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
                <span style={nameStyle}>{props.category}</span>
                <span style={nameStyle}>{props.name}</span>
                <span style={sumStyle}>{props.sum}</span>
                <span style={dateStyle}>{props.dateString}</span>
            </div>
            <span onClick={props.onClose} style={{ marginRight: '10px' }}>
                &times;
            </span>
        </div>
    );
};

export default ItemView;
