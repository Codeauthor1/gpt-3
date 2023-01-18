import Bio from './component/bio/Bio';
import Brand from './component/brands/Brand';
import Container from './component/Container';
import Hero from './component/hero/Hero';
import Nav from './component/nav/Nav';

function App() {
  return (
    <Container content={
      <>
        <Nav />
        <Hero />
        <Brand />
        <Bio />
        <div style={{ height: "200px" }}></div>
      </>
    } />
  );
}

export default App;
