import './SectionDivider.css'

export default function SectionDivider(props) {

  return (
    
    <p className={props.size || "section-divider"}><span>{props.text}</span></p>
    
    
  )
}
