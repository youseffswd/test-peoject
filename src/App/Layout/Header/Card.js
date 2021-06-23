const Card = ({ src, title, desc }) => {
    return (
        <div className="card">
            <img src={src} alt={title} />
            <h3>{title} </h3>
            <p>{desc}</p>
        </div>
    );
};
export default Card;
