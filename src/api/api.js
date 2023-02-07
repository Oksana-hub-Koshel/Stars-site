export const extractId= (item)=> {
    const isReg = /\/([0-9]*)\/$/;
    return item.url.match(isReg)[1];
// ф-ция для извлечения id с url
}

class API {
    location = "https://swapi.dev/api/"

    async getSource(url) {
        return await fetch(`${this.location}${url}`)
            .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                },
             )
            .catch((error) => console.log(error.message))

    }



    getAllPlanets = async () => {
      return await this.getSource('/planets/');

    }

    getAllPeople = async () => {
      return  await this.getSource('/people/')

    }

    getAllStarships = async () => {
      return  await this.getSource('/starships/')

    }

    getPlanet = async (id) => {
     return await this.getSource(`/planets/${id}/`)

    }

    getPerson = async (id) => {
    return await this.getSource(`/person/${id}/`)

    }

    getStarships = async (id) => {
     return await this.getSource(`/starships/${id}/`)

    }

}

export default new API()







