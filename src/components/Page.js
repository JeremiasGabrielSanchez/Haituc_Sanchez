const Page = (props) => {
    return (
        <div className="page">
            <header className="page__header">
                <h2>{props.titulo}</h2>
                <h3>{props.subtitulo}</h3>
            </header>
            <div className="page__content">
                {props.children}
            </div>
        </div>
    )
}

export default Page