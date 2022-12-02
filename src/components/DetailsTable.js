import Table from 'react-bootstrap/Table';

const Detailstable= ({details})=>  {
  return (
    <Table striped bordered hover responsive>
      <tbody>
        <tr>
          <th>Departure</th>
          <td>{details.departure_location}</td>
        </tr>
        <tr>
          <th>Departure time</th>
          <td>{details.departure_time}</td>
        </tr>
        <tr>
          <th>maximum travellers</th>
          <td>{details.max_travellers}</td>
        </tr>
        <tr>
          <th>Languages</th>
          <td>{details.languages}</td>
        </tr>
        <tr>
          <th>includes</th>
          <td>{details.includes}</td>
        </tr>
        <tr>
          <th>excludes</th>
          <td>{details.excludes}</td>
        </tr>
        <tr>
          <th>popular places</th>
          <td>{details.places}</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default Detailstable;