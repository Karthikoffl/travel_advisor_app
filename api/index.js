import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try { 
        const {data : {data}} = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
            params: {
            bl_latitude: bl_lat ? bl_lat : '12.699852',
            tr_latitude: tr_lat ? tr_lat : '13.26116610299326',
            bl_longitude: bl_lng ? bl_lng : '79.968435',
            tr_longitude: tr_lng ? tr_lng : '80.33632281480313',
            limit: '30',
            currency: 'USD',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Key': '7f2f83abcfmsh77ae5f2f9e1b5cap109f1ajsn24c61f8c70ea',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
    );
    return data;
    } catch (error) {
        return null
    }
}