import React from 'react';
import Expert from '../Expert/Expert';
import doc1 from '../Images/doc1.jpg'
import doc2 from '../Images/doc2.jpg'
import doc3 from '../Images/doc3.jpg'
import doc4 from '../Images/doc4.jpg'
import doc5 from '../Images/doc5.jpg'
import doc6 from '../Images/doc6.jpg'

const experts =[
    {
        id:1,
        img: doc1,
        name : 'Alain Ducasse – 19 Michelin Stars',
        expertize: 'Synonymous with breaking Michelin stars records, Alain Ducasse currently holds 17 Michelin stars. This makes him the current living chef with the most Michelin stars in the world. '
    },
    {
        id:2,
        img: doc2,
        name : 'Yannick Alleno – 10 Michelin Stars',
        expertize: 'Yannick Alleno directs eighteen restaurants across the world. His Alléno Paris au Pavillon Ledoyen is one of the oldest restaurants in Paris, situated in the Champs – Élysées gardens. It’s a constellation of Michelin stars, featuring three star-rated restaurants in the French Michelin Guide 2020.'
    },
    {
        id:3,
        img: doc3,
        name : 'Anne-Sophie Pic – 8 Michelin Stars',
        expertize: 'Let’s hear it for the ladies! Anne-Sophie Pic is the female chef with the most Michelin stars, holding eight stars across her five restaurants '
    },
    {
        id:4,
        img: doc4,
        name : 'Gordon Ramsay – 7 Michelin Stars',
        expertize: 'Known for his volatile kitchen demeanour and exceptional British cuisine, Gordon Ramsay is arguably the most famous chef in the world. Although he’s been awarded 16 Michelin stars throughout his career, he currently holds seven. '
    },
    {
        id:5,
        img: doc5,
        name : ' Thomas Keller – 7 Michelin Stars',
        expertize: 'The Michelin guide might not be the ultimate honour amongst chefs in the United States, but Thomas Keller has gone about setting a fine example. He’s the most decorated chef in America, currently holding 7 stars.'
    },
    {
        id:6,
        img: doc6,
        name : 'Heinz Beck – 5 Michelin Stars',
        expertize: 'Chef Heinz Beck is perhaps best known for being the man behind Rome’s only three-Michelin-starred restaurant, La Pergola. Beyond an excellent career as a highly decorated chef, Heinz has been heralded as a leader in Italian and Mediterranean culinary tradition. '
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container mx-auto   "> 
        <h1 className="text-primary mt-5 w-75" > Our Chef </h1>
            
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    experts.map(expert =><Expert
                        key={expert.name}
                        expert={expert}
                    
                    >
                       
                    </Expert>)
                    
                }

            </div>
        </div>
    );
};

export default Experts;