import React, {PropTypes} from 'react'
var Item = require('./Item.jsx');

const ItemList = ({items, onItemClick}) => (

    <div>

        {items.map(item => <Item data={item.data} key={item.id} onClick={() => onItemClick(item.id)}/>)}

    </div>
)

ItemList.PropTypes = {

    items: propTypes.arrayOf(PropTypes.shape({id: propTypes.string.isRequired, text: propTypes.string.isRequired})),
    onTodoClick: PropTypes.func.isRequired

}

export default ItemList
