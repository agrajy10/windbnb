import PropTypes from 'prop-types';
import Stay from './Stay';

function StaysGrid({ stays }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12">
      {stays.map((stay, index) => (
        <Stay key={index} {...stay} />
      ))}
    </section>
  );
}

StaysGrid.propTypes = {
  stays: PropTypes.array
};

export default StaysGrid;
