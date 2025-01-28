import { useState } from "react";

const ColourGuessGridRow = () => {
  const [guesses, setGuesses] = useState<string[][]>([["", "", "", "", "", "", "", "", ""]]);

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    const newGuesses = [...guesses];
    newGuesses[rowIndex][colIndex] = value;
    setGuesses(newGuesses);
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      {guesses.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-9 gap-1">
          {row.map((value, colIndex) => (
            <input
              key={colIndex}
              type="text"
              maxLength={1}
              className={`w-10 h-10 text-center text-lg border border-gray-400 rounded ${
                colIndex < 3 ? "bg-red-200" : colIndex < 6 ? "bg-green-200" : "bg-blue-200"
              }`}
              value={value}
              onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColourGuessGridRow;
