import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import DriverMain from "../../components/DriverMain";

const defaultEndpoint = 'http://ergast.com/api/f1/';

export async function getServerSideProps(context){
    const {driver} = context.query;
    const res = await fetch(`${defaultEndpoint}drivers/${driver}.json`);
    const data = await res.json();
    
    const articleTitle = data.MRData.DriverTable.Drivers[0].url.toString().split('/').at(-1);
    const resWiki = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${articleTitle}`)
    const image = await resWiki.json();
    let urlImg = image.query.pages[Object.keys(image.query.pages)[0]].original?.source
    if(!urlImg){
        urlImg = 'https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg'
    }
    
    return {
      props: {
        data,
        urlImg
      }
    }
}

const Driver = ({data, urlImg}) => {
    const driver = data.MRData.DriverTable.Drivers[0]
    return (
        <div className="">
            <Head>
                <title>{driver.givenName} {driver.familyName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <DriverMain driver={driver} urlImg={urlImg}/>
        </div>
    )
}

export default Driver