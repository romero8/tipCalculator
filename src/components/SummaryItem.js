import './SummaryItem.css'

export function SummaryItem(props) {
  const text = props.text;
  const summary = props.summary

  return (
    <div className="itemBox">
      <div>
        <h4>{text}</h4>
        <label>/ person</label>
      </div>
      <div>
        <p>${summary}</p>
      </div>
    </div>
  );
}
