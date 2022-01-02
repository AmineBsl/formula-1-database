import Head from "next/head";
import Header from "../../components/Header";
import DriverMain from "../../components/Driver/DriverMain";

const defaultEndpoint = 'http://ergast.com/api/f1/';

export async function getServerSideProps(context){
    const {driver} = context.query;
    const [resDriverResults, resDriverP1, resDriverP2, resDriverP3] = await Promise.all([
        fetch(`${defaultEndpoint}drivers/${driver}/driverStandings.json`),
        fetch(`${defaultEndpoint}drivers/${driver}/results/1.json`),
        fetch(`${defaultEndpoint}drivers/${driver}/results/2.json`),
        fetch(`${defaultEndpoint}drivers/${driver}/results/3.json`)
    ]);

    const [dataDriverResults, dataDriverP1, dataDriverP2, dataDriverP3] = await Promise.all([
        resDriverResults.json(), 
        resDriverP1.json(),
        resDriverP2.json(),
        resDriverP3.json()
    ]);

    const dataPodiumsArray = [dataDriverP1.MRData.total, dataDriverP2.MRData.total, dataDriverP3.MRData.total]

    /*const resDriverResults = await fetch(`${defaultEndpoint}drivers/${driver}/driverStandings.json`)
    const dataDriverResults = await resDriverResults.json();

    const resDriverP1 = await fetch(`${defaultEndpoint}drivers/${driver}/results/1.json`)
    const dataDriverP1 = await resDriverP1.json();

    const resDriverP2 = await fetch(`${defaultEndpoint}drivers/${driver}/results/2.json`)
    const dataDriverP2 = await resDriverP2.json();

    const resDriverP3 = await fetch(`${defaultEndpoint}drivers/${driver}/results/3.json`)
    const dataDriverP3 = await resDriverP3.json();*/

    const articleTitle = dataDriverResults.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.url.toString().split('/').slice(-1)[0];
    const resWiki = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${articleTitle}`)
    const image = await resWiki.json();
    let urlImg = image.query.pages[Object.keys(image.query.pages)[0]].original?.source
    if(!urlImg){
        urlImg = 'https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg'
    }
    return {
      props: {
        dataPodiumsArray,
        dataDriverResults,
        urlImg
      }
    }
}

const Driver = ({dataPodiumsArray, dataDriverResults, urlImg}) => {
    const driverResults = dataDriverResults.MRData.StandingsTable.StandingsLists
    const driverInfo = driverResults[0].DriverStandings[0].Driver

    console.log(dataPodiumsArray)
    return (
        <div className="min-h-screen bg-gray-800">
            <Head>
                <title>{driverInfo.givenName} {driverInfo.familyName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <DriverMain podiumsArray={dataPodiumsArray} driverResults={driverResults} urlImg={urlImg}/>
        </div>
    )
}

export default Driver