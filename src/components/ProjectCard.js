import { Col } from "react-bootstrap";

export default function ProjectCard({title, description,img}) {
  return (
    <Col>
        <div className="proj-imgbx">
            <img src={img} alt={description}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}
