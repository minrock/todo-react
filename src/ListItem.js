import React from 'react';


const ListItem = (props) => {
    const [checked, setChecked] = React.useState(props.status);
    
    const changeState = (value) => {
        setChecked(value)
        props.ChangeItemStatus(value)
    }

    return <tr>
        <td>
            <input type="checkbox" checked={checked} onChange={ e => changeState(e.target.checked) }/>
        </td>
        <td>
            {props.text}
        </td>
    </tr>
}

export default ListItem;