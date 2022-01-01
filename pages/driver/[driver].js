import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import DriverMain from "../../components/DriverMain";

const defaultEndpoint = 'http://ergast.com/api/f1/';

export async function getServerSideProps(context){
    const {driver} = context.query;

    const resDriverResults = await fetch(`${defaultEndpoint}drivers/${driver}/driverStandings.json`)
    const dataDriverResults = await resDriverResults.json();

    const articleTitle = dataDriverResults.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.url.toString().split('/').slice(-1)[0];
    const resWiki = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${articleTitle}`)
    const image = await resWiki.json();
    let urlImg = image.query.pages[Object.keys(image.query.pages)[0]].original?.source
    if(!urlImg){
        urlImg = 'https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg'
    }
    return {
      props: {
        dataDriverResults,
        urlImg
      }
    }
}

const Driver = ({dataDriverResults, urlImg}) => {
    const driverResults = dataDriverResults.MRData.StandingsTable.StandingsLists
    const driverInfo = driverResults[0].DriverStandings[0].Driver
    return (
        <div className="">
            <Head>
                <title>{driverInfo.givenName} {driverInfo.familyName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <DriverMain driverResults={driverResults} urlImg={urlImg}/>
        </div>
    )
}

export default Driver