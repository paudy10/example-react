const mapObj = {
    key: 'service.cfadf2423bb74262a36b5a321989c025',
    type: 'dreamy-gold',
    zoom: 12,
    lat: '27.217461355211013',
    long: '56.303490063754864',
    width: 500,
    height: 400,
    marker: 'none'
};

const mapUrl = `https://api.neshan.org/v2/static?key=${mapObj.key}&type=${
    mapObj.type
}&zoom=${mapObj.zoom}&center=${mapObj.lat},${mapObj.long}&width=${
    mapObj.width
}&height=${mapObj.height}&marker=${mapObj.marker}`;


const getMapUrl = () => {
    return mapUrl;
};

export default getMapUrl;
