import Grid from '../components/Grid';
import './home.css';

function App() {
  const handleFollow = () => {
    alert('Followed!');
  };

  const xd = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"

  const gridItems = [
      { size: '1x1' as const, logo: xd, title: 'Card 1', subtitle: 'Subtitle 1', onFollow: handleFollow },
      { size: '1x2' as const, logo: 'logo2.png', title: 'Card 2', subtitle: 'Subtitle 2', onFollow: handleFollow },
      { size: '2x1' as const, logo: 'logo3.png', title: 'Card 3', subtitle: 'Subtitle 3', onFollow: handleFollow },
      { size: '2x2' as const, logo: 'logo4.png', title: 'Card 4', subtitle: 'Subtitle 4', onFollow: handleFollow },
      { size: '1x1' as const, logo: 'logo5.png', title: 'Card 5', subtitle: 'Subtitle 5', onFollow: handleFollow },
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
