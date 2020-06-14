const CardMedia = (thumbnail) => (
  <div className="card__image-container">
    <img className="card__image" alt={thumbnail} src={`/images/${thumbnail}`} />
  </div>
);
const Card = ({ props = {} }) => {
  const { title, thumbnail, description } = props;

  if (Object.keys(props).length) {
    return (
      <li key={title} className="card overflow--hidden">
        {thumbnail && CardMedia(thumbnail)}
        <div className="card__info">
          <h4 className="card__title">{title}</h4>
          <p className="card__description">{description || 'No description available'}</p>
        </div>
      </li>
    );
  }
  return '';
};

export default Card;
