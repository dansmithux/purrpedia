import React, { useState, useRef } from 'react';
import Card from './components/Card';
import Progress from './components/Progress';

interface Cat {
    weight: {
        imperial: string;
        metric: string;
    };
    id: string;
    name: string;
    cfa_url: string;
    vetstreet_url: string;
    vcahospitals_url: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    description: string;
    life_span: string;
    indoor: number;
    lap: number;
    alt_names: string;
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
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppressed_tail: number;
    short_legs: number;
    wikipedia_url: string;
    hypoallergenic: number;
    reference_image_id: string;
}

function App() {
  const [data, setData] = useState<Cat[]>([]);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  const fetchData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.length === 0 && searchInput.current) {
      searchInput.current.focus();
      return;
    }
    
    setLoading(true);
    setSubmittedQuery(query);

    try {
      const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${query}&attach_image=1`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.CAT_API_KEY!,
        },
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-prose mx-auto p-5">
      <header className="py-10">
        <h1 className="text-6xl text-center">Purrpedia</h1>
      </header>
      <section className="">
        <form onSubmit={fetchData}>
          <label htmlFor="breed" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Search by cat breed</label>
          <input ref={searchInput} id="breed" type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <button type="submit" className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center">
            { loading 
              ? <span><svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg> Loading...</span>
              :
                <span>Search</span>
            }
          </button>
        </form>
      </section>
      <section className="py-10">
        <div className="grid grid-cols-2 border-t pt-2">
          <h2 className="text-lg font-medium text-left">{ submittedQuery && `Results for "${submittedQuery}"` }</h2>
          <h2 className="text-lg font-medium text-right">{data.length} result{data.length !== 1 && "s"}</h2>
        </div>
        <div className="mt-10">
          {data.map(cat => (
            <Card key={cat.id} cat={cat} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
