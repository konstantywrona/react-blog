import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const PostCard = (props) => {
  return (
    <Card className="m-2">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div>
          <b>Author:</b> {props.author}
        </div>
        <div>
          <b>Published:</b> {props.date}
        </div>
        <Card.Text className="mt-2">
          <div>{props.description}</div>
        </Card.Text>
        <Link key={props.id} to={'/post/' + props.id}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
