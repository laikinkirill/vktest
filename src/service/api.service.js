class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createName(name) {
    try {
      const request = new Request(this.url, {
        method: "post",
        body: JSON.stringify(name),
      });

      const response = await fetch(request);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export const apiService = new ApiService("https://api.agify.io/");
