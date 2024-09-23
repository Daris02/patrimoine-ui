
function LogContainer ( { logs }: { logs: string[]}) {
  return (
    <div className="p-2 border border-gray-300 rounded">
      {logs.length > 0 ? (
        logs.map((log, index) => (
          <div key={index} className="mb-1">
            {log}
          </div>
        ))
      ) : (
        <p>Aucun log disponible.</p>
      )}
    </div>
  );
};

export default LogContainer;