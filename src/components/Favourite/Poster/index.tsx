export const Poster = (props: {image: string, title: string, rating: string}) => {
    return (
        <>
            <img src={require('./../../../' + props.image).default} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.rating}</p>
        </>
    )
}