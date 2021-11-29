import {Header} from "./Header";

export const BaseLayout = (props: {title: string}) => {
    return (
        <>
            <Header />
            <h1 className='pageTitle'>{props.title}</h1>
        </>
    )
}