let url: string = `https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo`

export default async function addCompany( data ){
   await $fetch( url, {
      method: 'POST',
      body: data
   } );
}