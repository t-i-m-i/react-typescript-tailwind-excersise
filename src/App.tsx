import './App.css';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import List from './components/List';
import ListItem from './components/ListItem';

export interface Movie {
  id: number,
  title: string,
  image: string,
  starRating: string,
  rating: string,
  year: string,
  genre: string,
  runtime: string,
  cast: string,
}

function App() {

  const movies = [
    {
      id: 1,
      title: 'Prognosis Negative',
      image: 'https://tailwindcss.com/_next/static/media/prognosis-negative.6897ae50.jpg',
      starRating: '2.66',
      rating: 'PG-13',
      year: '2021',
      genre: 'Comedy',
      runtime: '1h 46m',
      cast: 'Simon Pegg, Zach Galifianakis'
    },
    {
      id: 2,
      title: 'Rochelle, Rochelle',
      image: 'https://tailwindcss.com/_next/static/media/rochelle-rochelle.b97e372a.jpg',
      starRating: '3.25',
      rating: 'R',
      year: '2020',
      genre: 'Romance',
      runtime: '1h 56m',
      cast: 'Emilia Clarke'
    },
    {
      id: 3,
      title: 'Death Blow',
      image: 'https://tailwindcss.com/_next/static/media/death-blow.bcfcabb1.jpg',
      starRating: '4.95',
      rating: '18A',
      year: '2020',
      genre: 'Action',
      runtime: '2h 5m',
      cast: 'Idris Elba, John Cena, Thandiwe Newton'
    }
  ];
  
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl text-center my-4">Movies</h1>

        <div className="">
          <Nav>
            <NavItem href="/new" isActive>New Releases</NavItem>
            <NavItem href="/top">Top Rated</NavItem>
            <NavItem href="/picks">Vincent's Picks</NavItem>
          </Nav>
          <List>
            {movies.map((movie: Movie) => (
              <ListItem key={movie.id} movie={movie} />
            ))}
          </List>
        </div>

      </div>
    </>
  )
}

export default App
