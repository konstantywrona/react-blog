import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const PostCard = (props) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <b>Author:</b> {props.author}
        </Card.Text>
        <Card.Text>
          <b>Published:</b> {props.date}
        </Card.Text>
        <Card.Text>
          <b>Category:</b> {props.category}
        </Card.Text>
        <Card.Text>
          <b>Short description:</b> {props.description}
        </Card.Text>
        <Link key={props.id} to={'/post/' + props.id}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
