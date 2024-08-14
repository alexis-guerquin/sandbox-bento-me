import Grid from '../components/Grid';
import './home.css';

function App() {

  const createGridItem = (size: '1x1' | '2x1' | '1x2' | '2x2', content: string) => ({
    size,
    content,
  });

  const gridItems = [
    createGridItem('1x1', '1x1'),
    createGridItem('1x2', '1x2'),
    createGridItem('2x1', '2x1'),
    createGridItem('2x2', '2x2'),
    createGridItem('1x1', '1x1'),
  ];

  return (
    <div className='app'>
      <div className='grid'>
        <Grid items={gridItems} />
      </div>
    </div>
  );
}

export default App;
