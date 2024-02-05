import { Component } from 'react';
import SingleBook from './SingleBook';
import { Col, Form, Row } from 'react-bootstrap';
import CommentArea from './CommentArea';

class BookList extends Component {
  state = {
    searchQuery: '',
    asin: '',
    selected: false,
  };
  updateAsin(asin) {
    console.log(asin);
    this.setState({ asin: asin });
  }

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="g-2 mt-3">
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook book={b} updateAsin={this.updateAsin} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col>
            {this.state.asin !== '' && <CommentArea asin={this.props.asin} />}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
