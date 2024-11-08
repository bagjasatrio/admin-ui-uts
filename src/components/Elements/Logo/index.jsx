import PropTypes from 'prop-types';

const Logo = (props) => {
  const { variant = "text-primary text-4xl" } = props;

  return (
    <div
      className={`flex justify-center font-poppins tracking-wide ${variant}`}
    >
      <span className="font-bold ">FINE</span>bank
      <span className="font-bold">.IO</span>
    </div>
  );
};
Logo.propTypes = {
  variant: PropTypes.string, // Validasi variant sebagai string
};

export default Logo;