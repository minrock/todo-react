import React from 'react';
import ListItem from './ListItem';

const ListComponent = (props) => {
    
    const changeItemStatus = (i, status) => {
        props.ChangeItemStatus(i, status)
    }

    return <table>
        <thead>
            <tr>
                <th>Status</th>
                <th>Text</th>
            </tr>
        </thead>
        <tbody>
            {props.list.map((item, i) => <ListItem ChangeItemStatus={value => changeItemStatus(i, value)} key={i} status={item.done} text={item.text} />)}
        </tbody>
    </table>
}

export default ListComponent;