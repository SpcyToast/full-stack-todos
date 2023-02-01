import BeerListItem from './BeerListItem'
import beerData from '../../data/beers'

function BeerList() {
  return (
    <div className="beerlist">
      <p className="welcome">
        Welcome! Please select from our delicious selection and don&apos;t
        hesitate to let us know if we can answer any of your questions.
      </p>
      {beerData.beers.map((beer) => {
        return <BeerListItem key={beer.id} beer={beer} />
      })}
    </div>
  )
}

export default BeerList