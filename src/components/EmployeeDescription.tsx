export const EmployeeDescription = (
  props: {
    name: string;
    position?: string;
  } = {
    name: "Title",
    position: "Text",
  }
) => {
  return (
    <div className="m-3 flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-2xl hover:backdrop-blur">
      <h3 className="text-2xl font-bold">{props.name}</h3>
      {props.position ? <div className="text-lg">{props.position}</div> : <></>}
    </div>
  );
};
