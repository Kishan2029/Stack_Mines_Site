import Calculation from "./Calculation";
import Mines from "./Mines";

const Stake = () => {
  return (
    <div className="p-10">
      <div className="raidus-4 flex">
        <div className="w-[30%]">
          <Calculation />
        </div>
        <div className="w-[70%]">
          <Mines />
        </div>
      </div>
    </div>
  );
};

export default Stake;
