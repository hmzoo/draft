import React from 'react';
import {connect} from 'react-redux'

const Item =({item,onSelect})=>(
  <p onClick={() => onSelect(item.id)}>{item.value}</p>
);

const ItemForm =({item,onUpdate,onDeSelect})=>(
  <div>
  <input type='text' className='form-input 8/12 fl ' defaultValue={item.value} onChange={(e) => {onUpdate(item.id,{value:e.target.value})}} onBlur={()=>{onDeSelect()}} onKeyDown={(e) => {if(e.keyCode===13){onDeSelect()}}} autoFocus/>
  </div>
);

const ItemDelBtn=({item,onDelItem})=>(
  <button className='btn btn-xs fl 4/12' onClick={() => onDelItem(item.id)}>delete</button>
)



const Items =({items,onAddItem,onDelItem,onSelect,onUpdate,onDeSelect})=>(
  <div>
  <button className="btn btn-primary mr--" onClick={onAddItem}> + </button>
  <div className="grid" >

        {items.map(item =>
            (<div className="grid-item 2/12" key={item.id}  >
            {(item.edit)?(
              <div>
              <ItemForm item={item} onUpdate={onUpdate} onDelItem={onDelItem} onDeSelect={onDeSelect}/>

              </div>
            ):(
              <div>
              <Item item={item} onSelect={onSelect}/>
              <ItemDelBtn item={item} onDelItem={onDelItem} />
              </div>
            )}

            </div>
          ),this
        )}
    }
    </div>
    </div>
);


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: () => {


            dispatch({
                type: 'ADD_ITEM'
            })
        },
        onDelItem: (id) => {
            dispatch({
                type: 'DEL_ITEM',
                id:id
            })
        },
        onSelect: (id) => {
            dispatch({
                type: 'SEL_ITEM',
                id:id
            })
        },
        onUpdate: (id,obj) => {
            dispatch({
                type: 'UPD_ITEM',
                id:id,
                item:obj
            })
        },
        onDeSelect: () => {
            dispatch({
                type: 'SEL_ITEM',
                id:undefined
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
