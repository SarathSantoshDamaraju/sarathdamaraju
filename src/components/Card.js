const Card = ({ props = {} }) => {
  const { name, thumbnail, description } = props;

  if (Object.keys(props).length) {
    return (
      <li key={name} className="card overflow--hidden">
        <div className="card__image-container">
          <img className="card__image" alt={name} src={`/images/${thumbnail}`} />
        </div>
        <div className="card__info">
          <h4 className="card__title">{name}</h4>
          <p className="card__description">{description || 'No description available'}</p>
        </div>
      </li>
    );
  }
  return '';
};

export default Card;
