import React from 'react';
import Progress from './Progress';

interface Cat {
    id: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
    weight: {
        imperial: string;
        metric: string;
    };
    life_span: string;
    indoor: number;
    lap: number;
    hairless: number;
    natural: number;
    rare: number;
    short_legs: number;
    hypoallergenic: number;
    reference_image_id: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    health_issues: number;
    intelligence: number;
    shedding_level: number;
    social_needs: number;
    stranger_friendly: number;
    vocalisation: number;
}

interface CardProps {
    cat: Cat;
}

const Card: React.FC<CardProps> = ({ cat }) => {
    return (
        <div className="border p-8 rounded-lg shadow-md mb-10">
            <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} loading="lazy" alt={`${cat.name} cat`} className="h-48 w-auto mx-auto rounded-lg" />
            <h2 className="mt-2 text-2xl font-bold text-center">{cat.name}</h2>
            <p className="mt-4 text-lg font-medium">{cat.description}</p>
            <p className="mt-4 text-base"><span className="font-semibold">Temperament</span>: {cat.temperament}</p>
            <div className="grid grid-cols-2 gap-x-10 mt-4">
                <p className="mt-2 text-base"><span className="font-semibold">Weight</span>: {cat.weight.imperial} lb ({cat.weight.metric} kg)</p>
                <p className="mt-2 text-base"><span className="font-semibold">Origin</span>: {cat.origin}</p>
                <p className="mt-2 text-base"><span className="font-semibold">Life span</span>: {cat.life_span} years</p>
                <p className="mt-2 text-base"><span className="font-semibold">Indoor</span>: {cat.indoor ? "yes" : "no"}</p>
                <p className="mt-2 text-base"><span className="font-semibold">Lap cat</span>: {cat.lap ? "yes" : "no"}</p>
                <p className="mt-2 text-base"><span className="font-semibold">Hairless</span>: {cat.hairless ? "yes" : "no"}</p>
                <p className="mt-2 text-base"><span className="font-semibold">Natural</span>: {cat.natural ? "yes" : "no"}</p>
                <p className="mt-2 text-base"><span className="font-semibold">Rare</span>: {cat.rare ? "yes" : "no"}</p>
                <p className="mt-2 text-base"><span className="font-semibold">Short legs</span>: {cat.short_legs ? "yes" : "no"}</p>
                <p className="mt-2 text-base"><span className="font-semibold">Hypoallergenic</span>: {cat.hypoallergenic ? "yes" : "no"}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-10 mt-4">
                <Progress label="Adaptability" quantity={cat.adaptability} />
                <Progress label="Affection level" quantity={cat.affection_level} />
                <Progress label="Child-friendly" quantity={cat.child_friendly} />
                <Progress label="Dog-friendly" quantity={cat.dog_friendly} />
                <Progress label="Energy level" quantity={cat.energy_level} />
                <Progress label="Grooming" quantity={cat.grooming} />
                <Progress label="Health issues" quantity={cat.health_issues} />
                <Progress label="Intelligence" quantity={cat.intelligence} />
                <Progress label="Shedding level" quantity={cat.shedding_level} />
                <Progress label="Social needs" quantity={cat.social_needs} />
                <Progress label="Stranger-friendly" quantity={cat.stranger_friendly} />
                <Progress label="Vocalisation" quantity={cat.vocalisation} />
            </div>
        </div>
    );
};

export default Card;
