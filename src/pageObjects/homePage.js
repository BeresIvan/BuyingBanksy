import page from "./page";

class homePage extends page {
  open (){
    super.open("https://webdriver.io/docs/options");
  }
}

export default new homePage();