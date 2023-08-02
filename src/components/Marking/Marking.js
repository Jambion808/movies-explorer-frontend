import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

export function Marking({children, ...props}) {
    return (
        <>
        <Header loggedIn={props.loggedIn}/>
        {children}
        <Footer/>
        </>
    )
}