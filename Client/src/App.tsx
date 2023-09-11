import { useApp } from "./useApp";

export const App = () => {
  const { handleClick, progressValue, running } = useApp();

  return (
    <>
      <h2>Hit this button to start an async task</h2>
      <div>
        <button onClick={handleClick}>Create a task</button>
      </div>

      {running && progressValue && (
        <div className="progressbar">
          <progress value={progressValue} max={100} />
        </div>
      )}

      {running === false && <p>Done!</p>}
    </>
  );
};
