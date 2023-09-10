export const App = () => {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <>
      <h2>Hit this button to start an async task</h2>
      <div>
        <button onClick={handleClick}>Create a task</button>
      </div>

      <div className="progressbar">
        <progress value={0} max={100} />
      </div>
    </>
  );
};
