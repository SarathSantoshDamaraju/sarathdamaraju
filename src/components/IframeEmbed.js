import PropTypes from 'prop-types';

const IframeEmbed = ({ url = '', name = '' }) => {
  if (url) {
    return (
      <div className="card">
        <iframe title={name} src={url} allowFullScreen loading="lazy">
          {name}
        </iframe>
      </div>
    );
  }
  return '';
};

IframeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

IframeEmbed.defaultProps = {
  url: '',
  name: '',
};

export default IframeEmbed;
