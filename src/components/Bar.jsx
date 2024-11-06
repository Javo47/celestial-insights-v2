const Bar = ({ dateRange = "??? - ???", zodiacSign = "Unknown", bg="bg-transparent" }) => {
  return (
    <div className={`min-h-[100px] rounded-lg ${bg} shadow flex flex-col justify-center items-center font-uncial`}>
      <h2 className="text-xl">{dateRange}</h2>
      <h1 className="text-4xl uppercase tracking-widest">{zodiacSign}</h1>
    </div>
  );
};

export default Bar;
