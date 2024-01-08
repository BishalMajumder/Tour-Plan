import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className="container flex justify-center ">

                    <div className="cards grid grid-cols-4 gap-5 ">
                        {
                            tours.map( (tour) => {
                                return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                            } )
                        }
                    </div>
                
        </div>
    );
}

export default Tours;