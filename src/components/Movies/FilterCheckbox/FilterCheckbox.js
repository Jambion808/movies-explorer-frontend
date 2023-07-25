import './FilterCheckbox.css'

export function FilterCheckbox({isCheck, checkHandler}) {
    return (
        <label className='checkbox'>
            <input className='checkbox__element_type_default' type='checkbox' checked={isCheck} onChange={checkHandler}/>
            <span className='checkbox__element_type_custom'/>
            Короткометражки
        </label>
    )
}