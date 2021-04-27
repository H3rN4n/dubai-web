export function Button(props) {
  const { text } = props;
  return (
    <button
      {...props}
      className={`rounded-lg py-2 px-4 bg-green-500 text-white ${props.className}`}
    >
      {text}
    </button>
  );
}
