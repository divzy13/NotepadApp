

export async function getTenRandomCatImages() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    if(response.ok) return response.json();
    throw response;
}