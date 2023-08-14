import './infoNotify.css'

export function InfoNotify(props) {

        return(
            <div className={props.isInfoNotifyOpen ? 'info-notify' : 'info-notify__unvisible'}>
                <h2 className='info-notify__text' onClick={props.closeMessage}>{props.isMassage}</h2>
                <button className='info-notify__button' onClick={props.closeMessage}>ОК</button>
            </div>
        )
}
