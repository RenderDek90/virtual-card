import PropTypes from 'prop-types';

export function SocialMedia({ props }) {
  return (
    <>
      <div className="flex flex-row gap-2 md:absolute z-2 h-auto left-2 top-2">
        {props &&
          props.map((item, index) => (
            <button
              onClick={() => {
                window.open(item.link, '_blank');
              }}
              className="cursor-pointer"
              key={index}
            >
              <img src={item.image} alt={item.name} className="md:w-10 w-auto md:hover:bg-white hover:bg-cyan-200 md:rounded rounded-lg p-1 duration-300 ease-in-out h-[30px] md:h-auto mt-5 md:mt-0" />
            </button>
          ))}
      </div>
    </>
  );
}

SocialMedia.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
