import Nav from '../components/Nav';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <div>
        <Card>Kitchen</Card>
        <Card>Floor</Card>
        <Card>Bathroom</Card>
      </div>

      <Nav></Nav>
    </>
  );
}
