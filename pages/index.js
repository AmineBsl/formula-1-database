import Head from 'next/head'
import SearchBar from '../components/SearchBar';

const defaultEndpoint = 'http://ergast.com/api/f1/';

export async function getServerSideProps(){
  const resDrivers = await fetch(`${defaultEndpoint}drivers.json?limit=1000`);
  const resConstructors = await fetch(`${defaultEndpoint}constructors.json?limit=1000`);
  const driversJson = await resDrivers.json();
  const constructorsJson = await resConstructors.json();
  const drivers = driversJson.MRData.DriverTable.Drivers;
  const constructors = constructorsJson.MRData.ConstructorTable.Constructors;

  return {
    props: {
      drivers,
      constructors
    }
  }
}
export default function Home({drivers, constructors}) {
  console.log(drivers)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Formula 1 Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar searchableDrivers={drivers} searchableConstructors={constructors}/>
    </div>
  )
}
