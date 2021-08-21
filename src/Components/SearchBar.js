export default function SearchBar(props) {
  return (
    <div className="container">
      <input type="text" onChange={props.handleInputChange}></input>
    </div>
  );
}
