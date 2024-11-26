const Calculation = () => {
  return (
    <div className="p-5 bg-calBg">
      <div className="flex flex-col">
        <div>
          <div className="text-md text-slate-300">Bet Amount</div>
          <input
            className="mt-2 w-full h-10 pl-4 text-md"
            type="number"
            placeholder="0"
          />
        </div>
        <div className="mt-4">
          <div className="text-md text-slate-300">Mines</div>
          <select className="mt-2 w-full h-10" name="tiles" id="tiles">
            {Array.from({ length: 24 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6">
          <button className="bg-betButtonBg p-3 w-full text-md font-semibold rounded-md">
            Bet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
