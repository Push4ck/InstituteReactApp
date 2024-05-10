import PropTypes from "prop-types";

const OverviewCard = ({ bgcolor, title, count, Icon1 }) => {
  return (
    <div
      className={`p-4 shadow-md shadow-slate-300 border w-56 h-32 flex flex-col justify-between rounded-xl hover:scale-105 ${bgcolor}`}
    >
      <div className="flex justify-between items-center">
        {/* icon */}
        <div className="text-xl rounded-lg p-2 bg-white text-slate-900">
          {Icon1}
        </div>

        {/* text */}
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>

      <div className="flex justify-start">
        {/* text */}
        <h1 className="font-bold text-xl">{count}</h1>
      </div>
    </div>
  );
};

OverviewCard.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Icon1: PropTypes.node.isRequired,
};

export default OverviewCard;
