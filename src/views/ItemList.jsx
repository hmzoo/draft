import React, {PropTypes} from 'react'
import Item from './Item'

const ItemList = ({items, onItemClick}) => (

    <div>

        {items.map(item => <Item data={item.data} key={item.id} onClick={() => onItemClick(item.id)}/>)}

    </div>
)

ItemList.PropTypes = {

    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, text: PropTypes.string.isRequired})),
    onTodoClick: PropTypes.func.isRequired

}

export default ItemList
