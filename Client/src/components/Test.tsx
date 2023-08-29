import React, { useState } from "react";

const Test: React.FC = () => {
  const numberList: number[] = Array.from(
    { length: 500 },
    () => Math.floor(Math.random() * 1000) + 1
  );

  const scaleNumbers = (list: number[], maxDivHeight: number): number[] => {
    const maxNumber: number = Math.max(...list);
    const scaleFactor: number = maxDivHeight / maxNumber;
    return list.map((number) => number * scaleFactor);
  };

  const getRandomColor = (): string => {
    const letters: string = "0123456789ABCDEF";
    let color: string = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [selectedPoints, setSelectedPoints] = useState<number[]>([]);

  const handleCheckboxChange = (index: number): void => {
    if (selectedPoints.includes(numberList[index])) {
      setSelectedPoints(
        selectedPoints.filter((point) => point !== numberList[index])
      );
    } else {
      setSelectedPoints([...selectedPoints, numberList[index]]);
    }
  };

  const scaledHeights: number[] = scaleNumbers(numberList, 150);

  return (
    <div>
      <div id="container" style={{ display: "flex" }}>
        {numberList.map((number, index) => (
          <div
            key={index}
            style={{
              margin: "5px",
              position: "relative",
              height: scaledHeights[index],
              backgroundColor: getRandomColor(),
            }}
          >
            <input
              type="checkbox"
              className="checkbox"
              checked={selectedPoints.includes(number)}
              onChange={() => handleCheckboxChange(index)}
            />
          </div>
        ))}
      </div>
      <button
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          backgroundColor: "#0074d9",
          color: "white",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
        onClick={() => console.log("Selected Points:", selectedPoints)}
      >
        Submit
      </button>
    </div>
  );
};

export default Test;
