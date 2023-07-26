import './FilterCheckbox.css'

export function FilterCheckbox({isCheck, checkHandler}) {
    return (
        <label className='checkbox'>
            <input className='checkbox__input' type='checkbox' checked={isCheck} onChange={checkHandler}/>
            <span className='checkbox__span'/>
            Короткометражки
        </label>
    )
}